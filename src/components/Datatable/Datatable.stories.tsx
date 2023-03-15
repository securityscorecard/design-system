import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import MockDate from 'mockdate';

import assets from '../_internal/BaseTable/mocks/ipAssets.json';
import { Data } from '../_internal/BaseTable/mocks/types';
import { simpleColumns } from '../_internal/BaseTable/mocks/columns';
import { comparisonTable } from '../_internal/BaseTable/docs';
import { controlsConfig } from './mocks/controls';
import { datatableBatchActions, datatableRowActions } from './mocks/actions';
import { defaultControlsConfig, defaultTableConfig } from './defaultConfigs';
import {
  BatchActionsType,
  ColumnsType,
  ControlsConfigType,
  DataPrimaryKeyType,
  OnDataFetchFnType,
  TableConfigType,
} from './Datatable.storiesTypes';
import Datatable from './Datatable';
import { DatatableProps } from './Datatable.types';

MockDate.set('2021-03-31T00:00:00Z');

export default {
  title: 'components/Datatable',
  component: Datatable,
  parameters: {
    screenshot: { skip: true },
    docs: {
      source: { type: 'code' },
      description: {
        component: `
\`\`\`jsx
import { Datatable } from '@securityscorecard/design-system';

const MyFancyDatatable = () => <Datatable ...props />
\`\`\`

  ${comparisonTable}
      `,
      },
    },
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  argTypes: {
    data: { control: { disable: true } },
    dataSize: { control: { disable: true } },
    columns: {
      control: { disable: true },
      table: {
        type: {
          summary: 'Columns<D>[]',
          detail: ColumnsType,
        },
      },
    },
    isDataLoading: { control: { disable: true } },
    pageButtonsCount: { control: { disable: false }, defaultValue: 5 },
    dataPrimaryKey: {
      table: {
        type: {
          summary: 'PrimaryKey<D>',
          detail: DataPrimaryKeyType,
        },
      },
    },
    batchActions: {
      table: {
        type: {
          summary: 'Action[]',
          detail: BatchActionsType,
        },
      },
    },
    controlsConfig: {
      table: {
        type: {
          summary: 'Partial<ControlsConfig>',
          detail: ControlsConfigType,
        },
        defaultValue: {
          summary: 'defaultControlsConfig',
          detail: JSON.stringify(defaultControlsConfig, null, 2),
        },
      },
    },
    tableConfig: {
      table: {
        type: {
          summary: 'Partial<TableConfig<D>>',
          detail: TableConfigType,
        },
        defaultValue: {
          summary: 'defaultTableConfig',
          detail: JSON.stringify(defaultTableConfig, null, 2),
        },
      },
    },
    onDataFetch: {
      control: { disable: true },
      table: {
        type: {
          summary: 'OnDataFetchFn<D>',
          detail: OnDataFetchFnType,
        },
        defaultValue: {
          summary: 'noop',
        },
      },
    },
  },
} as Meta;

export const ServerSidePlayground: Story<DatatableProps<Data>> = (args) => {
  const [tableData, setTableData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalLength, setTotalLength] = useState(0);
  const timeoutRef = useRef(null);

  const dispatchFetchData = useCallback(
    ({ pageSize, pageIndex, sortBy, filters, query }) => {
      action('onDataFetch')({
        pageSize,
        pageIndex,
        sortBy,
        filters,
        query,
      });
      setIsLoading(true);
      timeoutRef.current = setTimeout(() => {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        const fetchedData: Data[] = assets.slice(startRow, endRow);
        setTableData(fetchedData);
        setTotalLength(assets.length);
        setIsLoading(false);
      }, 500);
    },
    [setIsLoading, setTableData],
  );

  useEffect(() => {
    dispatchFetchData({ pageSize: 50, pageIndex: 0 });
  }, [dispatchFetchData]);

  const {
    batchActions: argsBatchActions = [],
    controlsConfig: argsControlsConfig = {},
    dataPrimaryKey: argsDataPrimaryKey,
    tableConfig: argsTableConfig = {},
    ...restArgs
  } = args;

  const onCancelLoading = () => {
    clearTimeout(timeoutRef.current);
    setIsLoading(false);
  };

  return (
    <Datatable<Data>
      {...restArgs}
      batchActions={[...argsBatchActions, ...datatableBatchActions]}
      columns={simpleColumns}
      controlsConfig={{ ...argsControlsConfig, ...controlsConfig }}
      data={tableData}
      dataPrimaryKey={argsDataPrimaryKey || 'ipAddress'}
      dataSize={totalLength}
      isDataLoading={isLoading}
      tableConfig={{
        ...argsTableConfig,
        rowActions: [
          ...(argsTableConfig?.rowActions || []),
          ...datatableRowActions,
        ],
        onSelect: action('onRowSelect'),
      }}
      onCancelLoading={onCancelLoading}
      onDataFetch={dispatchFetchData}
    />
  );
};
ServerSidePlayground.storyName = 'Playground (Server-Side implementation)';

export const InBrowserPlayground: Story<DatatableProps<Data>> = (args) => {
  const [data, setData] = useState(assets);

  const resetFilter = useRef(null);

  const storeResetFn = (resetFn) => {
    resetFilter.current = resetFn;
  };

  const handleOnSearch = (query) => {
    action('onSearch')(query);
    const result = assets.filter((asset) => asset.ipAddress.includes(query));

    setData(result);
  };
  const handleOnClearSearch = () => {
    action('onClear')();
    setData(assets);
  };

  const {
    batchActions: argsBatchActions = [],
    controlsConfig: argsControlsConfig = {},
    dataPrimaryKey: argsDataPrimaryKey,
    tableConfig: argsTableConfig = {},
    ...restArgs
  } = args;

  return (
    <Datatable<Data>
      {...restArgs}
      batchActions={[...argsBatchActions, ...datatableBatchActions]}
      columns={simpleColumns}
      controlsConfig={{
        ...controlsConfig,
        ...argsControlsConfig,
        searchConfig: {
          ...controlsConfig.searchConfig,
          ...argsControlsConfig.searchConfig,
          onSearch: handleOnSearch,
          onClear: handleOnClearSearch,
        },
      }}
      data={data}
      dataPrimaryKey={argsDataPrimaryKey || 'ipAddress'}
      dataSize={data.length}
      resetSelectionFn={storeResetFn}
      tableConfig={{
        ...argsTableConfig,
        rowActions: [
          ...(argsTableConfig.rowActions || []),
          ...datatableRowActions,
        ],
        onSelect: action('onRowSelect'),
        hasServerSidePagination: false,
        hasServerSideSorting: false,
      }}
    />
  );
};

InBrowserPlayground.storyName = 'Playground (In-Browser implementation)';
