import type { Meta, Story } from '@storybook/react';

import React from 'react';

import StatusPill from './StatusPill';
import { Inline } from '../layout';

export default {
  title: 'components/StatusPill',
  component: StatusPill,
} as Meta;

export const Default: Story = () => (
  <Inline gap="lg">
    <StatusPill color="good" label="Good" />
    <StatusPill color="bad" label="Bad" />
    <StatusPill color="neutral" label="Neutral" />
    <StatusPill color="inactive" label="Inactive" />
  </Inline>
);
