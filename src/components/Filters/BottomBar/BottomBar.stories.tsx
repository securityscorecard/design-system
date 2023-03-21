import type { Meta, Story } from '@storybook/react';
import type { BottomBarProps } from './BottomBar.types';

import BottomBar from './BottomBar';

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
