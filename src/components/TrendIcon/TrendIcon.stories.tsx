import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { TrendIcon } from './TrendIcon';
import { Inline } from '../layout';

export default {
  title: 'components/TrendIcon',
  component: TrendIcon,
} as Meta;

export const Default: Story = () => (
  <Inline gap="lg">
    <TrendIcon type="positive" />
    <TrendIcon type="stable" />
    <TrendIcon type="negative" />
  </Inline>
);
