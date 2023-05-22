import { includes } from 'ramda';
import remarkGfm from 'remark-gfm';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(jsx|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    '@geometricpanda/storybook-addon-badges',
    'storycap',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // shouldExtractValuesFromUnion: true, // disable it for now as it cause issues in SBv6.2
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          // filter inherited props
          return (
            !prop.parent.fileName.includes('node_modules/@types/react/') &&
            !prop.parent.fileName.includes('node_modules/@emotion/') &&
            !prop.parent.fileName.includes('node_modules/@types/node/') &&
            !prop.parent.fileName.includes('node_modules/typescript/')
          );
        }
        // filter inherited styled-components props
        return !includes(prop.name, ['theme', 'as', 'forwardedAs', 'ref']);
      },
    },
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'process.env.STORYBOOK': true,
      },
      build: {
        sourcemap: false,
      },
    });
  },
};
export default config;
