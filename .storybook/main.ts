import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.@(mdx|stories.@(tsx|jsx))',
    '../docs/**/*.mdx'
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
    // '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-themes',
    '@storybook/addon-coverage',
    'storycap',
  ],
  docs: { defaultName: 'Documentation' },
  typescript: {
    reactDocgen: process.env?.DOCS === 'true' ? 'react-docgen-typescript' : 'react-docgen',
  },
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      define: {
        'process.env.STORYBOOK': true,
    },
    });
  }
};

export default config;
