const { includes } = require('ramda');

module.exports = {
  core: {
    builder: 'webpack5',
  },
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
        // filter inherited styled-components props
        return !includes(prop.name, ['theme', 'as', 'forwardedAs', 'ref']);
      },
    },
  },
};
