import { Meta, StoryFn } from '@storybook/react';

import StatusDot from './StatusDot';
import { Inline } from '../layout';

export default {
  title: 'components/StatusDot',
  component: StatusDot,
} as Meta;

export const Default: StoryFn = () => (
  <Inline gap="lg">
    <StatusDot color="success" />
    <StatusDot color="danger" />
    <StatusDot color="warn" />
    <StatusDot color="info" />
    <StatusDot color="inactive" />
  </Inline>
);
