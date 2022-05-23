import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Badge from './Badge';
import { BadgeProps } from './Badge.types';
import { BadgeSizes, BadgeVariants } from './Badge.enums';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {
    size: {
      ...generateControl('select', BadgeSizes),
    },
    variant: {
      ...generateControl('select', BadgeVariants),
    },
  },
} as Meta;

const BadgeTemplate: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Playground = BadgeTemplate.bind({});
Playground.args = {
  count: 25,
  size: BadgeSizes.md,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const SimpleBadge = BadgeTemplate.bind({});
SimpleBadge.args = {
  count: 25,
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
