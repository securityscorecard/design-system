import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';
import MockDate from 'mockdate';
import { omit } from 'ramda';

import Table from './Table';
import { TableProps } from './Table.types';
import { defaultTableConfig } from '../defaultConfigs';
import { Data } from '../mocks/types';
import assets from '../mocks/ipAssets.json';
import { columnsForFirstTable } from '../mocks/columns';

MockDate.set('2021-03-31T00:00:00Z');

export default {
  title: 'components/DatatableLight/internalComponents/Table',
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
  columns: columnsForFirstTable,
  dataSize: assets.length,
  isDataLoading: false,
};

export const WithoutSorting = TableTemplate.bind({});
WithoutSorting.args = {
  ...MinimalConfig.args,
  hasSorting: false,
};

export const WithSortedColumn = TableTemplate.bind({});
WithSortedColumn.args = {
  ...MinimalConfig.args,
  defaultSortBy: [{ id: 'companyName', desc: true }],
};

export const WithCustomPageSize = TableTemplate.bind({});
WithCustomPageSize.args = {
  ...MinimalConfig.args,
  data: assets.slice(0, 20),
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

export const DataIsLoadingWithoutPreviousData = TableTemplate.bind({});
DataIsLoadingWithoutPreviousData.args = {
  ...WithNoData.args,
  isDataLoading: true,
};

export const WithSinglePage = TableTemplate.bind({});
WithSinglePage.args = {
  ...MinimalConfig.args,
  dataSize: 50,
};
