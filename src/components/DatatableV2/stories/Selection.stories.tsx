import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RowSelectionState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
import { Button } from '../../Button';

export default {
  title: 'components/DatatableV2/Selection',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
} as Meta<typeof Datatable>;

export const SelectionEnabled: Story = Template.bind({});
SelectionEnabled.args = {
  ...Template.args,
  getRowId: (row) => row.id,
};
SelectionEnabled.parameters = {
  screenshot: { skip: false },
};

export const DisabledSelection: Story = Template.bind({});
DisabledSelection.args = { ...Template.args, enableRowSelection: false };
DisabledSelection.parameters = {
  screenshot: { skip: false },
};

export const DisabledBatchRowSelection: Story = Template.bind({});
DisabledBatchRowSelection.args = {
  ...Template.args,
  enableBatchRowSelection: false,
};
DisabledBatchRowSelection.parameters = {
  screenshot: { skip: false },
};

export const SingleRowSelection: Story = Template.bind({});
SingleRowSelection.args = {
  ...SelectionEnabled.args,
  enableMultiRowSelection: false,
};
SingleRowSelection.parameters = {
  screenshot: { skip: false },
};

export const DisabledSelectAllHeader: Story = Template.bind({});
DisabledSelectAllHeader.args = {
  ...SelectionEnabled.args,
  enableSelectAll: false,
};
DisabledSelectAllHeader.parameters = {
  screenshot: { skip: false },
};

export const SelectAllModePage: Story = Template.bind({});
SelectAllModePage.args = { ...SelectionEnabled.args, selectAllMode: 'page' };

export const SelectAllModeAll: Story = Template.bind({});
SelectAllModeAll.args = { ...SelectionEnabled.args, selectAllMode: 'all' };

export const ConditionallyEnabledSelection: Story = Template.bind({});
ConditionallyEnabledSelection.args = {
  ...Template.args,
  enableRowSelection: (row) => row.original.organization.grade !== 'A',
};
ConditionallyEnabledSelection.parameters = {
  screenshot: { skip: false },
};

export const RowSelectionActions: Story = Template.bind({});
RowSelectionActions.args = {
  ...SelectionEnabled.args,
  initialState: {
    rowSelection: {
      'e23968c3-3f19-44b2-aee9-c4a1d7c326ee': true,
      'eb43a2df-8884-43f1-bfe8-eea3545bbded': true,
    },
  },
  renderRowSelectionActions: ({ selectedRows, table }) => (
    <>
      <Button
        variant="outline"
        onClick={() => {
          action('selectedRows')(selectedRows);
        }}
      >
        Show selected rows
      </Button>
      <Button
        onClick={() => {
          table.setRowSelection?.(() =>
            table.options.data.reduce(
              (acc, row) =>
                row.organization.grade === 'F'
                  ? { ...acc, [row.id]: true }
                  : acc,
              {},
            ),
          );
        }}
      >
        Select all F grades
      </Button>
    </>
  ),
};
RowSelectionActions.parameters = {
  screenshot: { skip: false },
};

export const SelectionManagedState: Story = (args) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({
    'e23968c3-3f19-44b2-aee9-c4a1d7c326ee': true,
    'eb43a2df-8884-43f1-bfe8-eea3545bbded': true,
  });

  return (
    <>
      <Datatable
        state={{ rowSelection }}
        onRowSelectionChange={setRowSelection}
        {...args}
      />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(rowSelection, null, 2)}</pre>
      </div>
    </>
  );
};
SelectionManagedState.args = SelectionEnabled.args;
