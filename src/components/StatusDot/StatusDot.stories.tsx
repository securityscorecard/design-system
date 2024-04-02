import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import StatusDot from './StatusDot';
import { Inline } from '../layout';

export default {
  title: 'components/StatusDot',
  component: StatusDot,
} as Meta;

export const Default: Story = () => (
  <Inline gap="lg">
    <StatusDot color="success" />
    <StatusDot color="danger" />
    <StatusDot color="warn" />
    <StatusDot color="info" />
    <StatusDot color="inactive" />
  </Inline>
);
