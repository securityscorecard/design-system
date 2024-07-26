import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ProgressBarProps } from './ProgressBar.types';
import ProgressBar from './ProgressBar';
import { Stack } from '../layout';

export default {
  title: 'components/ProgressBar',
  component: ProgressBar,
} as Meta;

export const Playground: StoryFn<ProgressBarProps> = (args) => (
  <ProgressBar {...args} />
);
Playground.args = {
  value: 50,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Variants: StoryFn<ProgressBarProps> = (args) => (
  <Stack gap="lg" style={{ width: '50%', margin: 'auto' }}>
    <ProgressBar {...args} variant="info" />
    <ProgressBar {...args} variant="success" />
    <ProgressBar {...args} variant="warn" />
    <ProgressBar {...args} variant="error" />
  </Stack>
);
Variants.args = Playground.args;

export const Sizes: StoryFn<ProgressBarProps> = (args) => (
  <Stack gap="lg" style={{ width: '50%', margin: 'auto' }}>
    <ProgressBar {...args} size="normal" />
    <ProgressBar {...args} size="thin" />
  </Stack>
);
Sizes.args = Playground.args;
