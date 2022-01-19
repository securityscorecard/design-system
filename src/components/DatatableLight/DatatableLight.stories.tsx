import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';
import MockDate from 'mockdate';

import * as Grid from '../layout';
import ipAssets from './mocks/ipAssets.json';
import assets from './mocks/assets.json';
import DatatableLight from './DatatableLight';
import { Data } from './mocks/types';
import { columnsForFirstTable, columnsForSecondTable } from './mocks/columns';
import { defaultTableConfig } from './defaultConfigs';
import {
  ColumnsType,
  DataPrimaryKeyType,
  TableConfigType,
} from './DatatableLight.storiesTypes';
import { DatatableProps } from './DatatableLight.types';

MockDate.set('2021-03-31T00:00:00Z');

export default {
  title: 'components/DatatableLight',
  component: DatatableLight,
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
      table: {
        type: {
          summary: 'Columns<D>[]',
          detail: ColumnsType,
        },
      },
    },
    dataPrimaryKey: {
      table: {
        type: {
          summary: 'PrimaryKey<D>',
          detail: DataPrimaryKeyType,
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
  },
} as Meta;

export const InBrowserPlayground: Story<DatatableProps<Data>> = (args) => {
  const {
    dataPrimaryKey: argsDataPrimaryKey,
    tableConfig: argsTableConfig = {},
  } = args;

  return (
    <>
      <DatatableLight<Data>
        columns={columnsForFirstTable}
        data={ipAssets}
        dataPrimaryKey={argsDataPrimaryKey || 'companyName'}
        dataSize={ipAssets.length}
        tableConfig={{
          ...argsTableConfig,
          defaultPageSize: 2,
        }}
      />
      <DatatableLight<Data>
        columns={columnsForSecondTable}
        data={assets}
        dataPrimaryKey={argsDataPrimaryKey || 'companyName'}
        dataSize={assets.length}
        tableConfig={{
          ...argsTableConfig,
          defaultPageSize: 2,
        }}
      />
    </>
  );
};

InBrowserPlayground.storyName = 'Playground (In-Browser implementation)';
