import autoExternal from 'rollup-plugin-auto-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import addDisplayNameTransformer from 'ts-react-display-name';
import { head, last, pipe, split } from 'ramda';

const getFilename = pipe(split('/'), last, split('.'), head);
const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName: (file, bindingName) => {
    const filename = getFilename(file);
    return bindingName === filename
      ? bindingName
      : `${filename}__${bindingName}`;
  },
});
const displayNameTransformer = addDisplayNameTransformer({
  funcTypes: [
    'React.FunctionComponent',
    'React.FC',
    'FunctionComponent',
    'FC',
    'React.SFC',
    'React.StatelessComponent',
    'SFC',
    'StatelessComponent',
  ],
  classTypes: [
    'React.Component',
    'React.PureComponent',
    'Component',
    'PureComponent',
  ],
  factoryFuncs: ['React.forwardRef', 'React.memo', 'forwardRef', 'memo'],
});

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'build',
      entryFileNames: '[name].js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'build',
      entryFileNames: '[name].es.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    'react-select/async',
    'react-select/creatable',
    'react-select/async-creatable',
  ],
  plugins: [
    autoExternal(),
    resolve(),
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ['**/*.woff2', '**/*.woff'],
    }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      transformers: [
        () => ({
          before: [displayNameTransformer, styledComponentsTransformer],
        }),
      ],
    }),
    terser(),
    visualizer({
      filename: 'stats/stat.html',
      template: 'sunburst',
    }),
  ],
};
