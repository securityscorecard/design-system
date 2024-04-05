import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import autoExternal from 'rollup-plugin-auto-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { viteRequire } from 'vite-require';

const commonPlugins = [
  viteRequire(),
  react({
    babel: {
      plugins: [
        'babel-plugin-styled-components',
        '@prisma-capacity/babel-plugin-react-display-name',
      ],
    },
  }),
];
const isStorybook = process.env.STORYBOOK === 'true';

export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: isStorybook
    ? commonPlugins
    : [
        autoExternal(),
        ...commonPlugins,
        dts({
          insertTypesEntry: true,
          tsconfigPath: 'tsconfig.build.json',
        }),
        visualizer({
          filename: 'stats/stat.html',
          template: 'sunburst',
        }),
      ],
  build: {
    outDir: 'build',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format, name) => `${name}.${format === 'cjs' ? 'cjs' : 'mjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        'react-select/async',
        'react-select/creatable',
        'react-select/async-creatable',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
        interop: 'compat',
      },
    },
    minify: true,
  },
});
