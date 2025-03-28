import { useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { omit } from 'ramda';

import Table from './Table';
import { TableProps } from './Table.types';
import { Data } from '../../_internal/BaseTable/mocks/types';
import assets from '../../_internal/BaseTable/mocks/ipAssets.json';
import { defaultTableConfig } from '../defaultConfigs';
import { simpleColumns } from '../../_internal/BaseTable/mocks/columns';
import { datatableRowActions } from '../mocks/actions';
import { DatatableStore, datatableInitialState } from '../Datatable.store';

export default {
  title: 'tests/Datatable/Table',
  component: Table,
  parameters: {
    viewMode: 'story',
    screenshot: {
      viewport: {
        width: 1820,
        height: 720,
      },
    },
    mockDate: new Date('2021-03-31T00:00:00Z'),
  },
  argTypes: {
    data: { controls: { type: 'disabled' } },
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

type Story = StoryFn<TableProps<Data>>;

const TableTemplate: Story = (args) => <Table<Data> {...args} />;

export const Playground: Story = (args) => <TableTemplate {...args} />;

Playground.args = {
  ...omit(['onSelect'], defaultTableConfig),
  data: assets.slice(0, 50),
  dataSize: assets.length,
  columns: simpleColumns,
  defaultSelectedRows: {},
};

export const MinimalConfig = TableTemplate.bind({});
MinimalConfig.args = {
  ...omit(['onSelect'], defaultTableConfig),
  data: assets.slice(0, 50),
  columns: simpleColumns,
  dataSize: assets.length,
  defaultSelectedRows: {},
};

export const WithDisabledSelection = TableTemplate.bind({});
WithDisabledSelection.args = {
  ...MinimalConfig.args,
  hasSelection: false,
};

export const WithRowActions = TableTemplate.bind({});
WithRowActions.args = {
  ...MinimalConfig.args,
  rowActions: datatableRowActions,
};

export const WithSelectedRows = TableTemplate.bind({});
WithSelectedRows.args = {
  ...MinimalConfig.args,
  defaultSelectedRows: { 1: true, 6: true, 24: true },
};

export const WithExclusiveSelection: Story = (args) => {
  useEffect(() => {
    DatatableStore.update((s) => {
      s.hasExclusiveSelection = true;
    });

    return () => {
      DatatableStore.replace(datatableInitialState);
    };
  });

  return <Table<Data> {...args} />;
};
WithExclusiveSelection.args = MinimalConfig.args;

export const WithSingleSelection = TableTemplate.bind({});
WithSingleSelection.args = {
  ...MinimalConfig.args,
  isMultiSelect: false,
};

export const WithSingleSelectionAndSelectedRow = TableTemplate.bind({});
WithSingleSelectionAndSelectedRow.args = {
  ...MinimalConfig.args,
  isMultiSelect: false,
  defaultSelectedRows: { 1: true },
};

export const WithoutSorting = TableTemplate.bind({});
WithoutSorting.args = {
  ...MinimalConfig.args,
  hasSorting: false,
};

export const WithSortedColumn = TableTemplate.bind({});
WithSortedColumn.args = {
  ...MinimalConfig.args,
  defaultSortBy: [
    { id: 'ipAddress', desc: true },
    { id: 'status', desc: false },
  ],
};

export const WithCustomPageSize = TableTemplate.bind({});
WithCustomPageSize.args = {
  ...MinimalConfig.args,
  data: assets.slice(0, 50),
  defaultPageSize: 5,
  hasServerSidePagination: false,
};

export const WithNoData = TableTemplate.bind({});
WithNoData.args = {
  ...MinimalConfig.args,
  data: [],
  dataSize: 0,
};
export const WithNoDataCustom = TableTemplate.bind({});
WithNoDataCustom.storyName = 'With No Data (custom component)';
WithNoDataCustom.args = {
  ...WithNoData.args,
  NoDataComponent: () => <div>We do not have any data</div>,
};

export const WithNoMatchingData: Story = (args) => {
  useEffect(() => {
    DatatableStore.replace(datatableInitialState);
    DatatableStore.update((s) => {
      s.hasAppliedFilters = true;
    });

    return () => {
      DatatableStore.replace(datatableInitialState);
    };
  }, []);

  return <Table<Data> {...args} />;
};
WithNoMatchingData.args = WithNoData.args;

export const WithNoMatchingDataCustom: Story = (args) => {
  useEffect(() => {
    DatatableStore.replace(datatableInitialState);
    DatatableStore.update((s) => {
      s.hasAppliedFilters = true;
    });

    return () => {
      DatatableStore.replace(datatableInitialState);
    };
  }, []);

  return <Table<Data> {...args} />;
};
WithNoMatchingDataCustom.storyName = 'With No Matching Data (custom component)';
WithNoMatchingDataCustom.args = {
  ...WithNoData.args,
  NoMatchingDataComponent: () => <div>No data match your current filters</div>,
};

export const DataIsLoadingWithoutPreviousData = TableTemplate.bind({});
DataIsLoadingWithoutPreviousData.args = {
  ...WithNoData.args,
  isDataLoading: true,
};

export const DataIsLoadingWithPreviousData = TableTemplate.bind({});
DataIsLoadingWithPreviousData.args = {
  ...MinimalConfig.args,
  isDataLoading: true,
};

export const DataIsLoadingWithPreviousDataAndIsCancelable = TableTemplate.bind(
  {},
);
DataIsLoadingWithPreviousDataAndIsCancelable.args = {
  ...MinimalConfig.args,
  isDataLoading: true,
  isCancelDisabled: false,
  onCancelLoading: () => null,
};

export const WithSinglePage = TableTemplate.bind({});
WithSinglePage.args = {
  ...MinimalConfig.args,
  dataSize: 50,
};
