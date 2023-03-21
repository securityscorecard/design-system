import type { Meta, Story } from '@storybook/react';
import type { BadgeProps } from './Badge.types';

import Badge from './Badge';
import { BadgeVariants } from './Badge.enums';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      ...generateControl('select', BadgeVariants),
    },
  },
} as Meta;

const BadgeTemplate: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Playground = BadgeTemplate.bind({});
Playground.args = {
  count: 32,
};

Playground.parameters = {
  screenshot: { skip: true },
};

export const SimpleBadge = BadgeTemplate.bind({});
SimpleBadge.args = {
  count: 32,
};

export const BadgeWithHighCount = BadgeTemplate.bind({});
BadgeWithHighCount.args = {
  count: 120,
};

export const NeutralBadge = BadgeTemplate.bind({});
NeutralBadge.args = {
  ...SimpleBadge.args,
  variant: 'neutral',
};
export const SuccessBadge = BadgeTemplate.bind({});
SuccessBadge.args = {
  ...SimpleBadge.args,
  variant: 'success',
};
export const InfoBadge = BadgeTemplate.bind({});
InfoBadge.args = {
  ...SimpleBadge.args,
  variant: 'info',
};
export const WarnBadge = BadgeTemplate.bind({});
WarnBadge.args = {
  ...SimpleBadge.args,
  variant: 'warn',
};
export const ErrorBadge = BadgeTemplate.bind({});
ErrorBadge.args = {
  ...SimpleBadge.args,
  variant: 'error',
};
