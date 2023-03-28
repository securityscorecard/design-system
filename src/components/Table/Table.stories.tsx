import type { Meta, Story } from '@storybook/react';
import type { Data } from '../_internal/BaseTable/mocks/types';
import type { TableProps } from './Table.types';

import { MemoryRouter } from 'react-router-dom';
import MockDate from 'mockdate';
import { action } from '@storybook/addon-actions';

import assets from '../_internal/BaseTable/mocks/ipAssets.json';
import { simpleColumns } from '../_internal/BaseTable/mocks/columns';
import { comparisonTable } from '../_internal/BaseTable/docs';
import Table from './Table';
import { datatableRowActions } from '../Datatable/mocks/actions';

MockDate.set('2021-03-31T00:00:00Z');

export default {
  title: 'components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`jsx
import { Table } from '@securityscorecard/design-system';

const MyFancyTable = () => <Table ...props />
\`\`\`

${comparisonTable}
      `,
      },
    },
    screenshot: {
      viewport: {
        width: 1820,
        height: 720,
      },
    },
  },
  decorators: [
    (storyFn) => (
      <MemoryRouter>
        <div style={{ paddingBottom: '25px' }}>{storyFn()}</div>
      </MemoryRouter>
    ),
  ],
} as Meta;

const TableTemplate: Story<TableProps<Data>> = (args) => (
  <Table<Data> {...args} />
);

export const MinimalConfig = TableTemplate.bind({});
MinimalConfig.args = {
  data: assets.slice(0, 50),
  columns: simpleColumns,
  dataSize: 50,
  isDataLoading: false,
  onPageChange: action('onPageChange'),
  onSortChange: action('onSortChange'),
};

export const WithoutSorting = TableTemplate.bind({});
WithoutSorting.args = {
  ...MinimalConfig.args,
  hasSorting: false,
};

export const WithSortedColumn = TableTemplate.bind({});
WithSortedColumn.args = {
  ...MinimalConfig.args,
  defaultSortBy: [{ id: 'status', desc: false }],
};

export const WithCustomPageSize = TableTemplate.bind({});
WithCustomPageSize.args = {
  ...MinimalConfig.args,
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
  data: assets.slice(0, 3),
  dataSize: 1,
};

export const WithoutHorizontalScrolling = TableTemplate.bind({});

WithoutHorizontalScrolling.args = {
  ...WithSinglePage.args,
  columns: [
    {
      Header: 'IP Address',
      accessor: 'ipAddress',
      width: 200,
    },
  ],
};

export const WithRowActions = TableTemplate.bind({});
WithRowActions.args = {
  ...MinimalConfig.args,
  rowActions: datatableRowActions,
  dataPrimaryKey: 'ipAddress',
};
