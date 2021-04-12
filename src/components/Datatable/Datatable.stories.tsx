import React, { useCallback, useEffect, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import MockDate from 'mockdate';

import * as Grid from '../layout';
import assets from './mocks/ipAssets.json';
import Datatable from './Datatable';
import { Data } from './mocks/types';
import { simpleColumns } from './mocks/columns';
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
import { DatatableProps } from './Datatable.types';

MockDate.set('2021-03-31T00:00:00Z');

export default {
  title: 'components/Datatable',
  component: Datatable,
  parameters: {
    screenshot: {
      delay: 1000,
    },
    docs: { source: { type: 'code' } },
  },
  decorators: [
    (storyFn) => (
      <MemoryRouter>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col>{storyFn()}</Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </MemoryRouter>
    ),
  ],
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

export const Playground: Story<DatatableProps<Data>> = (args) => {
  const [tableData, setTableData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalLength, setTotalLength] = useState(0);

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
      setTimeout(() => {
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
    batchActions: argsBatchActions,
    controlsConfig: argsControlsConfig,
    dataPrimaryKey: argsDataPrimaryKey,
    tableConfig: argsTableConfig,
    ...restArgs
  } = args;
  return (
    <Datatable<Data>
      {...restArgs}
      batchActions={{ ...argsBatchActions, ...datatableBatchActions }}
      columns={simpleColumns}
      controlsConfig={{ ...argsControlsConfig, ...controlsConfig }}
      data={tableData}
      dataPrimaryKey={argsDataPrimaryKey || 'ipAddress'}
      dataSize={totalLength}
      isDataLoading={isLoading}
      tableConfig={{
        ...argsTableConfig,
        rowActions: [
          ...(argsTableConfig.rowActions || []),
          ...datatableRowActions,
        ],
        onSelect: action('onRowSelect'),
      }}
      onDataFetch={dispatchFetchData}
    />
  );
};
