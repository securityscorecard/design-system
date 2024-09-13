import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';
import { Box } from '../mocks/Box';
import Stack from './Stack';

const meta = {
  title: 'layout/primitives/Stack',
  component: Stack,
  argTypes: {
    justify: {
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
    },
    align: {
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

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
