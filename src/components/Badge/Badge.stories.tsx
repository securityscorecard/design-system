import { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import { Inline } from '../layout';

/**
 * ```jsx
 * import { Badge } from '@securityscorecard/design-system';
 * ```
 */

const meta = {
  title: 'components/Badge',
  component: Badge,
  args: {
    count: 32,
  },
  argTypes: {
    variant: {
      table: {
        type: {
          summary: "'neutral' | 'success' | 'info' | 'warn' | 'error'",
        },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};
export const SimpleBadge: Story = {};
export const BadgeWithHighCount: Story = {
  args: {
    count: 120,
  },
};
export const NeutralBadge: Story = {
  args: {
    variant: 'neutral',
  },
};
export const SuccessBadge: Story = {
  args: {
    variant: 'success',
  },
};
export const InfoBadge: Story = {
  args: {
    variant: 'info',
  },
};
export const WarnBadge: Story = {
  args: {
    variant: 'warn',
  },
};
export const ErrorBadge: Story = {
  args: {
    variant: 'error',
  },
};
export const ColorsDark: Story = {
  render: (args) => (
    <Inline gap="md">
      <Badge {...args} variant="error" />
      <Badge {...args} variant="neutral" />
      <Badge {...args} variant="success" />
      <Badge {...args} variant="info" />
      <Badge {...args} variant="warn" />
    </Inline>
  ),
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
