import { readFile, writeFile } from 'fs-extra';
import path from 'path';
import glob from 'glob';
import { flatten } from 'ramda';
import { EOL } from 'os';
import prettier from 'prettier';

import * as ttp from '../packages/typescript-to-proptypes/src';

const TS_CONFIG = ttp.loadConfig(path.join(__dirname, '../tsconfig.json'));
const prettierConfig = prettier.resolveConfig.sync(process.cwd(), {
  config: path.join(__dirname, '../.prettierrc.json'),
});

const fixBabelIssuesRegExp = /(?<=(\/>)|,)(\r?\n){2}/g;
function fixBabelGeneratorIssues(source) {
  return source.replace(fixBabelIssuesRegExp, '\n');
}
function getLineFeed(source) {
  const match = source.match(/\r?\n/);
  return match === null ? EOL : match[0];
}
function fixLineEndings(source, target) {
  return target.replace(/\r?\n/g, getLineFeed(source));
}
function containsNodeModules(files) {
  for (const file of files) {
    if (file.includes('node_modules')) {
      return true;
    }
  }
  return false;
}

const generateProptypes = async ({ tsDefFilePath, jsFilePath, tsProgram }) => {
  // `parseFromProgram` retrieves the TS defs for the props,
  // and returns an AST representation of the React Prop Types
  const propTypesAST = ttp.parseFromProgram(tsDefFilePath, tsProgram, {
    checkDeclarations: true,
  });

  // if the AST is empty, there are no prop types,
  // which must mean it's not a component
  if (!propTypesAST.body.length) {
    return 'not-component';
  }
  const jsFileContent = await readFile(jsFilePath, 'utf8');
  const generatedForTypeScriptFile = tsDefFilePath === jsFilePath;
  // `inject` parses the JS file into an AST & inserts
  // the PropTypes AST based on specified options
  const jsFileContentWithPropTypes = ttp.inject(propTypesAST, jsFileContent, {
    disablePropTypesTypeChecking: generatedForTypeScriptFile,
    babelOptions: {
      filename: jsFilePath,
    },
    ensureBabelPluginTransformReactRemovePropTypesIntegration: true,
    comment: `
=============== WARNING ================
| These PropTypes are auto-generated   |
| from the TypeScript type definitions  |
========================================
    `,
    reconcilePropTypes: (_, previous, generated) => {
      if (previous !== undefined) {
        const usedCustomValidator = !previous.startsWith('PropTypes');
        const ignoreGenerated = previous.startsWith(
          'PropTypes /* @typescript-to-proptypes-ignore */',
        );

        if (usedCustomValidator || ignoreGenerated) {
          return previous;
        }
      }

      return generated;
    },

    // include prop type if it's the children prop or if it has a
    // jsDoc description. this helps avoid pulling in prop types
    // for components inheriting base elements like `<a>` or `<input>`
    shouldInclude: ({ prop }) => {
      const isInternalProp = prop.name.startsWith('__');
      const isExternal = containsNodeModules(prop.filenames);
      const shouldDocument =
        prop.name !== 'children' && !isInternalProp && !isExternal;
      console.log(prop.name, shouldDocument);
      return shouldDocument;
    },
  });

  if (!jsFileContentWithPropTypes) {
    return 'failed';
  }

  const prettified = prettier.format(jsFileContentWithPropTypes, {
    ...prettierConfig,
    filepath: jsFilePath,
  });
  const formatted = fixBabelGeneratorIssues(prettified);
  const correctedLineEndings = fixLineEndings(jsFileContent, formatted);

  await writeFile(jsFilePath, correctedLineEndings);

  return 'success';
};

async function run() {
  // Matches files where the folder and file both start with uppercase letters
  // Example: AppBar/AppBar.d.ts

  const allFiles = await Promise.all(
    [
      path.resolve(__dirname, '../src/components'),
      path.resolve(__dirname, '../src/hooks'),
      path.resolve(__dirname, '../src/managers'),
      path.resolve(__dirname, '../src/theme'),
      path.resolve(__dirname, '../src/utils'),
    ].map((folderPath) =>
      glob('+([A-Z])*/+([A-Z])*.*@(types.ts|d.ts|ts|tsx)', {
        absolute: true,
        cwd: folderPath,
      }),
    ),
  );

  const files = flatten(allFiles).filter((filePath) => {
    const folderName = path.basename(path.dirname(filePath));
    const fileName = path
      .basename(filePath)
      .replace(/(\.d\.ts|\.tsx|\.ts)/g, '');

    return (
      // Filter out files where the directory name and filename doesn't match
      // Example: Modal/ModalManager.d.ts
      fileName === folderName
    );
  });
  // `createProgram` comes from the TS Compile API
  // create a program passing an array of all the `.d.ts` files for components
  const program = ttp.createTSProgram(files, TS_CONFIG);
  const promises = files.map(async (tsFile) => {
    const sourceFile = tsFile.includes('.d.ts')
      ? tsFile.replace('.d.ts', '.js')
      : tsFile;
    // The function also assumes that the JS files for the components have
    // already been generated/transpiled. Depending on your setup, you would
    // use the `babel` or `tsc` CLIs.
    await generateProptypes({
      tsProgram: program,
      jsFilePath: sourceFile,
      tsDefFilePath: tsFile || sourceFile,
    });
  });

  const results = await Promise.allSettled(promises);

  const fails = results.filter((result) => {
    return result.status === 'rejected';
  });

  fails.forEach((result) => {
    console.error(result.reason);
  });
  if (fails.length > 0) {
    process.exit(1);
  }
}

run();
