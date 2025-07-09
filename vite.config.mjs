var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import autoExternal from 'rollup-plugin-auto-external';
import { visualizer } from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
import { viteRequire } from 'vite-require';
var commonPlugins = [
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
var isStorybook = process.env.STORYBOOK === 'true';
export default defineConfig({
    assetsInclude: ['**/*.md'],
    plugins: isStorybook
        ? commonPlugins
        : __spreadArray(__spreadArray([
            autoExternal()
        ], commonPlugins, true), [
            dts({
                insertTypesEntry: true,
                tsconfigPath: 'tsconfig.build.json',
            }),
            visualizer({
                filename: 'stats/stat.html',
                template: 'sunburst',
            }),
            del({
                targets: ['build/tokens.css.d.ts'],
                hook: 'closeBundle',
            }),
        ], false),
    build: {
        outDir: 'build',
        lib: {
            entry: [
                path.resolve(__dirname, 'src/index.ts'),
                path.resolve(__dirname, 'src/tokens/tokens.css'),
                path.resolve(__dirname, 'src/locales/en-US.ts'),
                path.resolve(__dirname, 'src/locales/cs-CZ.ts'),
                path.resolve(__dirname, 'src/locales/es-ES.ts'),
                path.resolve(__dirname, 'src/locales/pt-BR.ts'),
                path.resolve(__dirname, 'src/locales/ja-JP.ts'),
            ],
            fileName: function (format, name) { return "".concat(name, ".").concat(format === 'cjs' ? 'cjs' : 'mjs'); },
            formats: ['es', 'cjs'],
        },
        cssCodeSplit: true,
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
    test: {
        globals: true,
        dir: './src',
        setupFiles: './vitest-setup.ts',
        include: ['**/*.test.(ts|tsx)'],
        environment: 'happy-dom',
        coverage: {
            reporter: ['lcov'],
            all: false,
            reportsDirectory: './coverage/unit',
        },
    },
});
