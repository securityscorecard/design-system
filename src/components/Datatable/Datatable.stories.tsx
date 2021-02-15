import React, { useCallback, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';
import { Column, Row } from 'react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { noop } from 'ramda-adjunct';

import * as Grid from '../layout';
import Datatable from './Datatable';
import assets from './mocks/ipAssets.json';
import {
  RendererCount,
  RendererDate,
  RendererLink,
  RendererMultiValue,
  RendererText,
  RendererTimeFromNow,
} from './Table/TableCell/renderers';
import { TextSizes, TextVariants } from '../typography/Text/Text.enums';
import { Text } from '../typography';
import { LinkCellRendererProps } from './Table/TableCell/renderers/renderers.types';
import { mockControlModuleProps } from './mocks/controlModule';

export default {
  title: 'components/Datatable',
  component: Datatable,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    screenshot: {
      delay: 1000,
    },
  },
} as Meta;

type Data = {
  ipAddress: string;
  status: string;
  domainsCount: number;
  detectionMethod: string[];
  source: string[];
  country: string;
  issuesCount: number;
  findingsCount: number;
  observationDate: string;
  lastObservationDate: string;
};
const columns: (Column<Data> & { onClick?: (value: unknown) => void })[] = [
  {
    Header: 'IP Address',
    accessor: 'ipAddress',
    width: 200,
    Cell: RendererLink,
    onClick: (val: string): void => {
      console.log(`navigate to IP (${val}) details page`);
    },
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 96,
    Cell: ({ value }: { value: string }): React.ReactElement => {
      switch (value) {
        case 'Removed':
        case 'Dynamic':
          return (
            <Text size={TextSizes.md} variant={TextVariants.context}>
              {value}
            </Text>
          );
        case 'Claimed':
        case 'Disputed':
          return (
            <Text size={TextSizes.md} variant={TextVariants.secondary}>
              {value}
            </Text>
          );

        default:
          return (
            <Text size={TextSizes.md} variant={TextVariants.primary} isBold>
              {value}
            </Text>
          );
      }
    },
  },
  { Header: 'Domains', accessor: 'domainsCount', width: 96 },
  {
    Header: 'Detection',
    accessor: 'detectionMethod',
    Cell: RendererMultiValue,
    width: 160,
    onClick: (val: string): void => {
      console.log(`navigate to IP details page, detection type: ${val}`);
    },
  },
  {
    Header: 'Source',
    accessor: 'source',
    Cell: RendererMultiValue,
    width: 160,
    onClick: (val: string): void => {
      console.log(`navigate to IP details page, source type: ${val}`);
    },
  },
  { Header: 'Country', accessor: 'country', width: 144 },
  {
    Header: 'Issues',
    accessor: 'issuesCount',
    Cell: RendererCount,
    width: 88,
    onClick: (val: string): void => {
      console.log(`navigate to IP (${val}) details page (issues tab)`);
    },
  },
  {
    Header: 'Findings',
    accessor: 'findingsCount',
    Cell: RendererCount,
    width: 88,
    onClick: (val: string): void => {
      console.log(`navigate to IP (${val}) details page (issues tab)`);
    },
  },
  {
    Header: 'First observed',
    accessor: 'observationDate',
    width: 120,
    Cell: RendererDate,
  },
  {
    Header: 'Last observed',
    accessor: 'lastObservationDate',
    width: 120,
    Cell: RendererTimeFromNow,
  },
  {
    id: 'observedFor',
    Header: 'Observed for',
    accessor: 'observationDate',
    width: 120,
    Cell: ({
      value,
      column,
      row: {
        original: { lastObservationDate },
      },
    }: LinkCellRendererProps<string> & {
      row: Row<Data>;
    }): React.ReactElement => {
      dayjs.extend(relativeTime);

      return (
        <RendererText
          column={column}
          formatter={(val) => dayjs(val).to(dayjs(lastObservationDate), true)}
          value={value}
        />
      );
    },
  },
];

export const Default: Story = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatchFetchData = useCallback(
    ({ pageSize, pageIndex }) => {
      console.log('dispatchFetchData');
      setIsLoading(true);
      setTimeout(() => {
        // Only update the data if this is the latest fetch
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        const fetchedData = assets.slice(startRow, endRow);
        setTableData(fetchedData);
        setIsLoading(false);
      }, 500);
    },
    [setIsLoading, setTableData],
  );

  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
          <Datatable<Data>
            columns={columns}
            controlsConfig={mockControlModuleProps}
            data={tableData}
            dataPrimaryKey="ipAddress"
            isDataLoading={isLoading}
            tableConfig={{
              rowActions: [
                {
                  label: 'Detail',
                  name: 'detail',
                  onClick: noop,
                },
              ],
            }}
            totalDataSize={assets.length}
            onDataFetch={dispatchFetchData}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};
