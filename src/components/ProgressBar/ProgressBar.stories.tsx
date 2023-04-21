import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ProgressBarProps } from './ProgressBar.types';
import ProgressBar from './ProgressBar';
import { Stack } from '../layout';

export default {
  title: 'components/ProgressBar',
  component: ProgressBar,
  argTypes: {},
} as Meta;

const Cluster = (args) => (
  <Stack gap="md">
    <ProgressBar {...args} progress={25} />
    <ProgressBar {...args} progress={50} />
    <ProgressBar {...args} progress={75} />
    <ProgressBar {...args} progress={100} />
  </Stack>
);

const ProgressBarTemplate: Story<ProgressBarProps> = () => (
  <Stack gap="lg" style={{ width: '50%', margin: 'auto' }}>
    <Cluster variant="success" />
    <Cluster size="thin" variant="success" />
    <Cluster />
    <Cluster size="thin" />
    <Cluster variant="warn" />
    <Cluster size="thin" variant="warn" />
    <Cluster variant="error" />
    <Cluster size="thin" variant="error" />
  </Stack>
);

export const Examples = ProgressBarTemplate.bind({});
