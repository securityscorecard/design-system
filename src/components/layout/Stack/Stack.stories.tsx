import type { Meta, Story } from '@storybook/react';
import type { StackProps } from './Stack';

import { SpaceSizes } from '../../../theme/space.enums';
import Stack from './Stack';
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

export const Playground: Story<StackProps> = (args) => (
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

export const WithGap: Story<StackProps> = (args) => (
  <Stack style={{ backgroundColor: '#80baeb' }} {...args}>
    <Box />
    <Box />
    <Box />
  </Stack>
);
WithGap.args = {
  gap: SpaceSizes.lg,
};
export const WithResponsiveGap: Story<StackProps> = (args) => (
  <Stack style={{ backgroundColor: '#80baeb' }} {...args}>
    <Box />
    <Box />
    <Box />
  </Stack>
);
WithResponsiveGap.args = {
  gap: [SpaceSizes.xl, SpaceSizes.sm],
};

export const SplitedStack: Story<StackProps> = (args) => (
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

export const WithHorizontalAlignment: Story<StackProps> = (args) => (
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
