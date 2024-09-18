import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';
import { Box } from '../mocks/Box';
import Stack, { type StackProps } from './Stack';

const meta = {
  title: 'layout/primitives/Stack',
  component: Stack,
  argTypes: {
    gap: {
      description: 'Whitespace between each child of the Stack',
      options: [
        'none',
        'xxs',
        'xs',
        'sm',
        'md',
        'mdPlus',
        'lg',
        'lgPlus',
        'xl',
        'xlPlus',
        'xxl',
        'half-x',
        '1x',
        '2x',
        '3x',
        '4x',
        '6x',
        '8x',
        '12x',
        '16x',
        '24x',
        '32x',
      ],
      control: { type: 'select' },
      table: {
        type: {
          summary:
            "'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdPlus' | 'lg' | 'lgPlus' | 'xl' | 'xlPlus' | 'xxl' | 'half-x' | '1x' | '2x' | '3x' | '4x' | '6x' | '8x' | '12x' | '16x' | '24x' | '32x'",
        },
        defaultValue: {
          summary: "'none'",
        },
      },
    },
    justify: {
      description: 'Horizontal alignment of elements inside Stack',
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
      table: {
        type: {
          summary: "'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'",
        },
        defaultValue: {
          summary: "'stretch'",
        },
      },
    },
    align: {
      description: 'Vertical alignment of elements inside Stack',
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
      table: {
        type: {
          summary: "'center'| 'flex-end'| 'flex-start'| 'baseline'| 'stretch'",
        },
      },
    },
    splitAt: {
      description:
        'Index of element after which the Stack is splitted. Leave `undefined` for no splitting',
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    isRecursive: {
      description: 'Should apply gap recursively (on nested levels)',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<StackProps>;

export default meta;

type Story = StoryObj<StackProps>;

export const Playground: Story = {
  args: {
    gap: 'lg',
    children: (
      <>
        <Box />
        <Button color="primary" variant="solid">
          Click me gently
        </Button>
        <Box />
      </>
    ),
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const WithGap: Story = {
  args: {
    gap: 'lg',
    children: (
      <>
        <Box />
        <Box />
        <Box />
      </>
    ),
  },
};

export const RecursiveGap: Story = {
  args: {
    gap: 'xl',
    isRecursive: true,
    children: (
      <>
        <Box />
        <Box>
          <Box />
          <Box>
            <Box />
            <Box />
          </Box>
        </Box>
        <Box />
      </>
    ),
  },
};

export const SplitedStack: Story = {
  args: {
    gap: 'sm',
    splitAt: 2,
    children: (
      <>
        <Box />
        <Box />
        <Box />
      </>
    ),
  },
  decorators: [(storyFn) => <div style={{ height: '20rem' }}>{storyFn()}</div>],
};

export const WithHorizontalAlignment: Story = {
  args: {
    ...Playground.args,
    justify: 'center',
  },
};
