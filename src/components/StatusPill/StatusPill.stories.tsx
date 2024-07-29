import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import StatusPill from './StatusPill';
import { Inline } from '../layout';

export default {
  title: 'components/StatusPill',
  component: StatusPill,
} as Meta;

export const Default: StoryFn = () => (
  <Inline gap="lg">
    <StatusPill color="success" label="Success" />
    <StatusPill color="danger" label="Danger" />
    <StatusPill color="warn" label="Warn" />
    <StatusPill color="info" label="Info" />
    <StatusPill color="inactive" label="Inactive" />
  </Inline>
);
