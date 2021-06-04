import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Stack, { StackProps } from './Stack';
import { Padbox } from '../Padbox';
import { getColor } from '../../../utils';
import { SpaceSizes } from '../../../theme/space.enums';
import { Button } from '../../Button';

export default {
  title: 'layout/primitives/Stack',
  component: Stack,
  argTypes: {
    justify: {
      options: ['center', 'flex-end', 'flex-start', 'baseline', 'stretch'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Box = styled(Padbox).attrs((props) => ({
  paddingSize: SpaceSizes.sm,
  children:
    props.children ||
    'Sed id nulla ac est dignissim pharetra. Donec sit amet nulla vitae orci auctor posuere in ac massa. Quisque blandit enim diam, eget interdum ante pretium eget.',
}))`
  background-color: ${getColor('blueberry0')};
`;

export const playground: Story<StackProps> = (args) => (
  <div style={{ height: '20rem' }}>
    <Stack style={{ backgroundColor: '#0275d8' }} {...args}>
      <Box />
      <Button variant="outline">Click me gently</Button>
      <Stack style={{ backgroundColor: '#80baeb' }}>
        <Box />
        <Box />
      </Stack>
      <Box />
    </Stack>
  </div>
);
playground.args = { gap: SpaceSizes.lg };

export const WithGap: Story<StackProps> = (args) => (
  <Stack style={{ backgroundColor: '#0275d8' }} {...args}>
    <Box />
    <Box />
    <Box />
  </Stack>
);
WithGap.args = {
  gap: SpaceSizes.lg,
};

export const RecursiveGap: Story<StackProps> = (args) => (
  <Stack style={{ backgroundColor: '#0275d8' }} {...args}>
    <Box />
    <Box style={{ backgroundColor: '#579aa0' }}>
      <Box />
      <Stack style={{ backgroundColor: '#b4b4b4' }}>
        <Box />
        <Box />
      </Stack>
    </Box>
    <Box />
  </Stack>
);
RecursiveGap.args = {
  gap: SpaceSizes.xl,
  isRecursive: true,
};

export const SplitedStack: Story<StackProps> = (args) => (
  <div style={{ height: '20rem' }}>
    <Stack style={{ backgroundColor: '#0275d8' }} {...args}>
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
  <Stack style={{ backgroundColor: '#0275d8' }} {...args}>
    <Box />
    <Button variant="outline">Click me gently</Button>
    <Box />
  </Stack>
);
WithHorizontalAlignment.args = {
  gap: SpaceSizes.sm,
  justify: 'center',
};
