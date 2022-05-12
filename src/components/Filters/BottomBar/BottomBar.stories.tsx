import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import BottomBar from './BottomBar';
import { BottomBarProps } from './BottomBar.types';

export default {
  component: BottomBar,
  title: 'components/Filters/BottomBar',
} as Meta;

export const Playground: Story<BottomBarProps> = (args) => (
  <BottomBar {...args} />
);
