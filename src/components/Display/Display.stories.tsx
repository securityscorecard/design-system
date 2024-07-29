import { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../layout/Stack';
import Display from './Display';

const meta = {
  title: 'typography/Display',
  component: Display,
  parameters: {
    docs: {
      description: {
        component:
          'The largest text on the screen is reserved for short, important text or numerals. Can be a standalone element or is used in combination with short captions for contextual outlines.',
      },
    },
  },
  argTypes: {
    size: {
      description: 'Selects the font size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
      },
    },
    color: {
      description: 'Selects the font color',
      control: 'select',
      options: ['default', 'subtle', 'success', 'warning', 'danger'],
      table: {
        type: {
          summary: "'default' | 'subtle' | 'success' | 'warning' | 'danger'",
        },
        defaultValue: { summary: "'default'" },
      },
    },
    isSubtle: {
      description:
        'Selects the font weight. When true Display will be rendered as medium.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hasTabularNumbers: {
      description:
        'Toggles if numbers use the same width for every digit. This aligns numbers exactly below each other.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Display>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Playground',
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack gap="sm">
      <Display {...args} size="sm">
        Small
      </Display>
      <Display {...args} size="md">
        Medium
      </Display>
      <Display {...args} size="lg">
        Large
      </Display>
    </Stack>
  ),
  args: { children: 'Display size' },
};
export const Colors: Story = {
  render: (args) => (
    <Stack gap="sm">
      <Display {...args} color="default">
        Default
      </Display>
      <Display {...args} color="subtle">
        Subtle
      </Display>
      <Display {...args} color="success">
        Success
      </Display>
      <Display {...args} color="warning">
        Warning
      </Display>
      <Display {...args} color="danger">
        Danger
      </Display>
    </Stack>
  ),
  args: { children: 'ElementLabel color' },
};

export const ColorsDark: Story = {
  render: Colors.render,
  args: Colors.args,
  decorators: [
    (storyFn) => (
      <div
        className="dark"
        style={{ background: 'var(--sscds-color-background-body)' }}
      >
        {storyFn()}
      </div>
    ),
  ],
  name: 'Colors (Dark mode)',
};

export const Weights: Story = {
  render: (args) => (
    <Stack gap="sm">
      <Display {...args} isSubtle={false}>
        Default
      </Display>
      <Display {...args} isSubtle>
        Subtle
      </Display>
    </Stack>
  ),
  args: { children: 'Display font weight' },
};

export const TabularNumbers: Story = {
  render: (args) => (
    <Stack gap="sm">
      <Display {...args} hasTabularNumbers />
      <Display {...args} hasTabularNumbers={false} />
    </Stack>
  ),
  args: { children: '0123456789' },
};
