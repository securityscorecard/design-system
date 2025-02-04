import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.@(mdx|stories.@(tsx|jsx))',
    '../docs/**/*.mdx'
  ],
  staticDirs: [
    {from: './assets', to: '/'},
  ],
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
    '@storybook/addon-designs',
    '@storybook/addon-themes',
    '@storybook/addon-coverage',
    '@storybook/addon-a11y',
    'storycap',
    'storybook-addon-tag-badges'
  ],
  docs: { defaultName: 'Documentation' },
  typescript: {
    reactDocgen: process.env?.DOCS === 'true' ? 'react-docgen-typescript' : 'react-docgen',
  },
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      base: process.env.DOCS === 'true'
        ? `/design-system/${process.env.VERSION}/`
        : './',
      define: {
        'process.env.STORYBOOK': true,
      },
      server: {
        allowedHosts: ['host.docker.internal'],
      },
    });
  }
};

export default config;
