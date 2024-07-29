import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SpaceSizes } from '../../../theme/space.enums';
import Stack, { StackProps } from './Stack';
import { Button } from '../../Button';
import { Box } from '../mocks/Box';

export default {
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
} as Meta;

export const Playground: StoryFn<StackProps> = (args) => (
  <div style={{ height: '20rem' }}>
    <Stack style={{ backgroundColor: '#80baeb' }} {...args}>
      <Box />
      <Button color="primary" variant="solid">
        Click me gently
      </Button>
      <Stack style={{ backgroundColor: '#80baeb' }}>
        <Box />
        <Box />
      </Stack>
      <Box />
    </Stack>
  </div>
);
Playground.args = { gap: SpaceSizes.lg };
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithGap: StoryFn<StackProps> = (args) => (
  <Stack style={{ backgroundColor: '#80baeb' }} {...args}>
    <Box />
    <Box />
    <Box />
  </Stack>
);
WithGap.args = {
  gap: SpaceSizes.lg,
};

export const RecursiveGap: StoryFn<StackProps> = (args) => (
  <Stack style={{ backgroundColor: '#80baeb' }} {...args}>
    <Box />
    <Box style={{ backgroundColor: '#579aa0' }}>
      <Box />
      <div style={{ backgroundColor: '#b4b4b4' }}>
        <Box />
        <Box />
      </div>
    </Box>
    <Box />
  </Stack>
);
RecursiveGap.args = {
  gap: SpaceSizes.xl,
  isRecursive: true,
};

export const SplitedStack: StoryFn<StackProps> = (args) => (
  <div style={{ height: '20rem' }}>
    <Stack style={{ backgroundColor: '#80baeb' }} {...args}>
      <Box />
      <Box />
      <Box />
    </Stack>
  </div>
);
SplitedStack.args = {
  splitAt: 2,
  gap: SpaceSizes.sm,
};

export const WithHorizontalAlignment: StoryFn<StackProps> = (args) => (
  <Stack style={{ backgroundColor: '#80baeb' }} {...args}>
    <Box />
    <Button color="primary" variant="solid">
      Click me gently
    </Button>
    <Box />
  </Stack>
);
WithHorizontalAlignment.args = {
  gap: SpaceSizes.sm,
  justify: 'center',
};
