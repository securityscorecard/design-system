import autoExternal from 'rollup-plugin-auto-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

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
  plugins: [
    autoExternal(),
    resolve(),
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ['**/*.woff2', '**/*.woff'],
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
    visualizer({
      filename: `stats/stat.html`,
    }),
  ],
};
