import { Meta } from '@storybook/react';

import Datatable from '../Datatable';
import Template, { Story, columns } from './Template';
import argTypes from './argTypes';

export default {
  title: 'components/DatatableV2/ColumnActions',
  component: Datatable,
  argTypes,
} as Meta<typeof Datatable>;

export const ColumnActionsEnabled: Story = Template.bind({});
ColumnActionsEnabled.args = Template.args;

export const DisabledColumnActions: Story = Template.bind({});
DisabledColumnActions.args = { ...Template.args, enableColumnActions: false };

export const EnabledColumnActionsPerColumn: Story = Template.bind({});
EnabledColumnActionsPerColumn.args = {
  ...Template.args,
  enableColumnActions: false,
  columns: [
    columns[0],
    {
      ...columns[1],
      enableColumnActions: true,
    },
    {
      ...columns[2],
      enableColumnActions: true,
    },
  ],
};

export const DisabledColumnActionsPerColumn: Story = Template.bind({});
DisabledColumnActionsPerColumn.args = {
  ...Template.args,
  columns: [
    columns[0],
    {
      ...columns[1],
      enableColumnActions: false,
    },
    {
      ...columns[2],
      enableColumnActions: false,
    },
  ],
};
