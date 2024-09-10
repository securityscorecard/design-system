import type { Meta, StoryObj } from '@storybook/react';

import Logo from './Logo';

/**
 * The focal point of our visual identity is our logo – a universal signature for our brand. An element
 * that is used across all of our identity system providing a dynamic and distinctive mark on all
 * SecurityScorecard communications.
 *
 * There are various rules for its application, but we have created a flexible system that allows
 * freedom and diversity. For more information about using the logo checkout
 * our [brand portal](https://sites.google.com/securityscorecard.io/brand/brand-guide/logo-usage).
 *
 * ```js
 * import { ButtonV2 } from '@securityscorecard/design-system';
 * ```
 */
const meta = {
  component: Logo,
  args: {
    height: 64,
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

export const VariantSingleLine: Story = {
  args: {
    variant: 'single-line',
  },
};

export const VariantStacked: Story = {
  args: {
    variant: 'stacked',
  },
};

export const VariantEmblem: Story = {
  args: {
    variant: 'emblem',
  },
};

export const Monochromatic: Story = {
  args: {
    variant: 'single-line',
    color: 'monochromatic',
  },
};

export const Colored: Story = {
  args: {
    variant: 'single-line',
    color: 'colored',
  },
};
