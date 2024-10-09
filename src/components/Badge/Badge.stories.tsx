import { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import Button from '../ButtonV2/Button';
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
    children: <Button variant="subtle">Notifications</Button>,
  },
  argTypes: {
    variant: {
      description:
        'Badge visual variant. If set to `standard` the `count` property is required. If set to `dot` the `isVisible` property is required.',
      control: 'select',
      options: ['standard', 'dot'],
      table: {
        defaultValue: {
          summary: "'standard'",
        },
        type: {
          summary: "'standard' | 'dot'",
        },
      },
    },
    isVisible: {
      description:
        'Controls visibility of Badge in `dot` variant. Required for `dot` variant.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    count: {
      description:
        'Set the badge count in the `standard` variant. Required for `standard` variant.',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'standard',
    count: 56,
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const StandardBadge: Story = {
  args: Playground.args,
};

export const DotBadge: Story = {
  args: {
    variant: 'dot',
    isVisible: true,
  },
};

export const DarkMode: Story = {
  args: Playground.args,
  render: (args) => (
    <Inline gap="md">
      <Badge count={56}>{args.children}</Badge>
      <Badge variant="dot" isVisible>
        {args.children}
      </Badge>
    </Inline>
  ),
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
