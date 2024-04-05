import { includes } from 'ramda';
import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(tsx|jsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-measure',
    'storycap',
    'storybook-addon-designs',
    'storybook-addon-outline',
    '@geometricpanda/storybook-addon-badges',
  ],
  features: {
    postcss: false,
  },
  typescript: {
    check: false,
    checkOptions: {},
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
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
};

export default config;
