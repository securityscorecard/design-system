import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components', 'add-react-displayname'],
      },
    }),
    externalizeDeps(),
    dts({
      insertTypesEntry: true,
    }),
    visualizer({
      filename: 'stats/stat.html',
      template: 'sunburst',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format, name) => `${name}.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
    minify: true,
  },
});
