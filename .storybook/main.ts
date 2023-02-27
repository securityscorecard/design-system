const { includes } = require('ramda');
module.exports = {
  stories: ['../src/**/*.@(mdx|stories.@(tsx|jsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', 'storycap'],
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
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
