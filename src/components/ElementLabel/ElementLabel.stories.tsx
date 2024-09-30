import { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../layout/Stack';
import ElementLabel from './ElementLabel';

const meta = {
  title: 'typography/ElementLabel',
  component: ElementLabel,
  parameters: {
    docs: {
      description: {
        component:
          'ElementLabel is used for short and mostly interactive text elements like button, links, form field labels, and dropdown options/lists.',
      },
    },
  },
  argTypes: {
    size: {
      description: 'Selects the font size',
      control: 'select',
      options: ['sm', 'md'],
      table: {
        type: { summary: "'sm' | 'md'" },
        defaultValue: { summary: "'sm'" },
      },
    },
    color: {
      description: 'Selects the font color',
      control: 'select',
      options: [
        'default',
        'subtle',
        'disabled',
        'danger',
        'inverse',
        'white',
        'link',
      ],
      table: {
        type: {
          summary:
            "'default' | 'subtle' | 'disabled' | 'danger' | 'inverse' | 'white' | 'link'",
        },
        defaultValue: { summary: "'default'" },
      },
    },
    isStrong: {
      description:
        'Selects the font weight. When true ElementLabel will be rendered as bold ',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof ElementLabel>;

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
      <ElementLabel {...args} size="sm">
        Small
      </ElementLabel>
      <ElementLabel {...args} size="md">
        Medium
      </ElementLabel>
    </Stack>
  ),
  args: { children: 'ElementLabel size' },
};

export const Colors: Story = {
  render: (args) => (
    <Stack gap="sm">
      <ElementLabel {...args} color="default">
        Default
      </ElementLabel>
      <ElementLabel {...args} color="subtle">
        Subtle
      </ElementLabel>
      <ElementLabel {...args} color="disabled">
        Disabled
      </ElementLabel>
      <ElementLabel {...args} color="danger">
        Danger
      </ElementLabel>
      <ElementLabel
        {...args}
        color="inverse"
        style={{ background: 'var(--sscds-color-neutral-12)' }}
      >
        Inverse
      </ElementLabel>
      <ElementLabel
        {...args}
        color="white"
        style={{ background: 'var(--sscds-color-black)' }}
      >
        White
      </ElementLabel>
      <ElementLabel {...args} color="link">
        Link
      </ElementLabel>
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
      <ElementLabel {...args} isStrong={false}>
        Default
      </ElementLabel>
      <ElementLabel {...args} isStrong>
        Strong
      </ElementLabel>
    </Stack>
  ),
  args: { children: 'ElementLabel font weight' },
};
