import React, { useEffect } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';
import { omit } from 'ramda';

import Table from './Table';
import { TableProps } from './Table.types';
import { Data } from '../mocks/types';
import assets from '../mocks/ipAssets.json';
import { defaultTableConfig } from '../defaultConfigs';
import { simpleColumns } from '../mocks/columns';
import { datatableRowActions } from '../mocks/actions';
import { DatatableStore, datatableInitialState } from '../Datatable.store';

export default {
  title: 'components/DatatableV2/internalComponents/Table',
  component: Table,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
    screenshot: {
      viewport: {
        width: 1820,
        height: 720,
      },
    },
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const TableTemplate: Story<TableProps<Data>> = (args) => (
  <Table<Data> {...args} />
);

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

export const WithExclusiveSelection: Story<TableProps<Data>> = (args) => {
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
  data: assets.slice(0, 5),
  defaultPageSize: 5,
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

export const WithNoMatchingData: Story<TableProps<Data>> = (args) => {
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

export const WithNoMatchingDataCustom: Story<TableProps<Data>> = (args) => {
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

export const DataIsLoading = TableTemplate.bind({});
DataIsLoading.args = {
  ...WithNoData.args,
  isDataLoading: true,
};
