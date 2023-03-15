import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import BottomBar from './BottomBar';
import { BottomBarProps } from './BottomBar.types';

export default {
  component: BottomBar,
  title: 'components/Filters/internalComponents/BottomBar',
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

export const Playground: Story<BottomBarProps> = (args) => (
  <BottomBar {...args} />
);
