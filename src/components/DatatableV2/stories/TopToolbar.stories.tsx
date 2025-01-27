import { Meta } from '@storybook/react';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
import argTypes from './argTypes';

export default {
  title: 'components/DatatableV2/TopToolbar',
  component: Datatable,
  argTypes,
} as Meta<typeof Datatable>;

export const TopToolbarEnabled: Story = Template.bind({});
TopToolbarEnabled.args = Template.args;

export const DisabledTopToolbar: Story = Template.bind({});
DisabledTopToolbar.args = { ...Template.args, enableTopToolbar: false };

export const WithHiddenColumns: Story = Template.bind({});
WithHiddenColumns.args = {
  ...Template.args,
  initialState: {
    columnVisibility: {
      detectionMethod: false,
      score: false,
    },
  },
};

export const DisabledFullscreenMode: Story = Template.bind({});
DisabledFullscreenMode.args = { ...Template.args, enableFullScreenMode: false };

export const DisabledColumnSettings: Story = Template.bind({});
DisabledColumnSettings.args = {
  ...Template.args,
  enableColumnOrdering: false,
  enableColumnPinning: false,
  enableHiding: false,
};
