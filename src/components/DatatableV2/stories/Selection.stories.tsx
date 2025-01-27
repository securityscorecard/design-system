import { useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PaginationState, RowSelectionState } from '@tanstack/react-table';

import Datatable from '../Datatable';
import Template, { Story } from './Template';
import { Button } from '../../Button';
import { fetchData, useQuery } from '../mocks/externalData';
import argTypes from './argTypes';

export default {
  title: 'components/DatatableV2/Selection',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
  },
  argTypes,
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

export const DisabledSelectionToolbar: Story = Template.bind({});
DisabledSelectionToolbar.args = {
  ...SelectionEnabled.args,
  initialState: RowSelectionActions.args.initialState,
  enableSelectionToolbar: false,
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

export const ManualPaginationWithSinglePageSelection: Story = (args) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true,
  });

  return (
    <Datatable
      {...args}
      data={dataQuery?.data?.entries ?? []}
      pageCount={dataQuery?.data?.pageCount ?? -1}
      rowCount={dataQuery?.data?.rowCount}
      state={{ pagination }}
      manualPagination
      onPaginationChange={setPagination}
    />
  );
};
ManualPaginationWithSinglePageSelection.args = {
  ...Template.args,
  manualPagination: true,
  rowSelectionMode: 'single-page',
  renderRowSelectionActions: ({ selectedRows }) => (
    <Button onClick={() => action('batch action')(selectedRows)}>
      Show selected rows
    </Button>
  ),
  initialState: {
    rowSelection: {
      '55ea9935-7f59-4e30-b132-5372d214c20e': true,
      '72badeb8-8974-4dc3-82f5-b638b381b9c4': true,
      'ffcc21d9-7fe7-4c26-b708-4b8ba6432ad6': true,
    },
  },
};
ManualPaginationWithSinglePageSelection.parameters = {
  screenshot: { skip: false },
};

export const ManualPaginationWithMultiPageSelection: Story =
  ManualPaginationWithSinglePageSelection.bind({});
ManualPaginationWithMultiPageSelection.args = {
  ...ManualPaginationWithSinglePageSelection.args,
  manualPagination: true,
  rowSelectionMode: 'multi-page',
  renderRowSelectionActions: ({ selectedRows }) => (
    <Button onClick={() => action('batch action')(selectedRows)}>
      Show selected rows
    </Button>
  ),
};
ManualPaginationWithMultiPageSelection.parameters = {
  screenshot: { skip: false },
};
