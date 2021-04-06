import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Badge from './Badge';
import { BadgeProps } from './Badge.types';
import { BadgeSizes } from './Badge.enums';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Badge',
  component: Badge,
} as Meta;

export const playground: Story<BadgeProps> = (props) => <Badge {...props} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  count: {
    control: { type: 'number' },
    defaultValue: 25,
  },
  size: {
    ...generateControl('select', BadgeSizes),
    defaultValue: BadgeSizes.md,
  },
};

export const SimpleBadge: Story = () => <Badge count={25} />;
SimpleBadge.storyName = 'Simple Badge';

export const BadgeWithHighCount: Story = () => <Badge count={120} />;
BadgeWithHighCount.storyName = 'Badge With High Count';
