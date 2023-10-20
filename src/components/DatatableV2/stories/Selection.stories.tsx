import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { RowSelectionState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story } from './Template';

export default {
  title: 'components/DatatableV2/Selection',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as ComponentMeta<typeof Datatable>;

export const SelectionEnabled: Story = Template.bind({});
SelectionEnabled.args = {
  ...Template.args,
  hasRowSelection: true,
  getRowId: (row) => row.id,
};

export const DisabledSelection: Story = Template.bind({});
DisabledSelection.args = { ...Template.args, hasRowSelection: false };

export const SingleRowSelection: Story = Template.bind({});
SingleRowSelection.args = {
  ...SelectionEnabled.args,
  hasMultiRowSelection: false,
};

export const DisabledSelectAllHeader: Story = Template.bind({});
DisabledSelectAllHeader.args = {
  ...SelectionEnabled.args,
  hasSelectAll: false,
};

export const SelectAllModePage: Story = Template.bind({});
SelectAllModePage.args = { ...SelectionEnabled.args, selectAllMode: 'page' };

export const SelectAllModeAll: Story = Template.bind({});
SelectAllModeAll.args = { ...SelectionEnabled.args, selectAllMode: 'all' };

export const ConditionallyEnabledSelection: Story = Template.bind({});
ConditionallyEnabledSelection.args = {
  ...Template.args,
  hasRowSelection: (row) => row.original.organization.grade !== 'A',
};

export const SelectionManagedState: Story = (args) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({
    'ae62aa4c-5fe5-44b7-88e0-bb0b2e07a370': true,
    'b5fa06ab-739e-4140-b5a0-d1c8841db036': true,
  });

  return (
    <Datatable
      state={{ rowSelection }}
      onRowSelectionChange={setRowSelection}
      {...args}
    />
  );
};
SelectionManagedState.args = SelectionEnabled.args;
