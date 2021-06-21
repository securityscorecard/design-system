const {includes} = require('ramda')

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|jsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    'storycap',
    'storybook-addon-designs',
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
          return !prop.parent.fileName.includes("node_modules");
        }

        // filter inherited styled-components props
        return !includes(prop.name, ['theme', 'as', 'forwardedAs', 'ref']);
      },
    },
  },
};