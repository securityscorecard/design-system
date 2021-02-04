// TODO: Remove this when we expose API for Datatable component
import React from 'react';
import { Column, Row } from 'react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Text as TypographyText } from '../../../typography';
import ipAssetsMock from '../../mocks/ipAssets.json';
import Count from '../TableCell/renderers/Count';
import Date from '../TableCell/renderers/Date';
import Link from '../TableCell/renderers/Link';
import MultiValue from '../TableCell/renderers/MultiValue';
import TimeFromNow from '../TableCell/renderers/TimeFromNow';
import Text from '../TableCell/renderers/Text';
import { TextCellRendererProps } from '../TableCell/renderers/renderers.types';
import { TextSizes, TextVariants } from '../../../typography/Text/Text.enums';

export type Data = {
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
const data: Data[] = ipAssetsMock;
const primaryKey = 'ipAddress';
const columns: (Column<Data> & { onClick?: (value: unknown) => void })[] = [
  {
    Header: 'IP Address',
    accessor: 'ipAddress',
    width: 200,
    Cell: Link,
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
            <TypographyText size={TextSizes.md} variant={TextVariants.context}>
              {value}
            </TypographyText>
          );
        case 'Claimed':
        case 'Disputed':
          return (
            <TypographyText
              size={TextSizes.md}
              variant={TextVariants.secondary}
            >
              {value}
            </TypographyText>
          );

        default:
          return (
            <TypographyText
              size={TextSizes.md}
              variant={TextVariants.primary}
              isBold
            >
              {value}
            </TypographyText>
          );
      }
    },
  },
  { Header: 'Domains', accessor: 'domainsCount', width: 96 },
  {
    Header: 'Detection',
    accessor: 'detectionMethod',
    Cell: MultiValue,
    width: 160,
    onClick: (val: string): void => {
      console.log(`navigate to IP details page, detection type: ${val}`);
    },
  },
  {
    Header: 'Source',
    accessor: 'source',
    Cell: MultiValue,
    width: 160,
    onClick: (val: string): void => {
      console.log(`navigate to IP details page, source type: ${val}`);
    },
  },
  { Header: 'Country', accessor: 'country', width: 144 },
  {
    Header: 'Issues',
    accessor: 'issuesCount',
    Cell: Count,
    width: 88,
    onClick: (val: string): void => {
      console.log(`navigate to IP (${val}) details page (issues tab)`);
    },
  },
  {
    Header: 'Findings',
    accessor: 'findingsCount',
    Cell: Count,
    width: 88,
    onClick: (val: string): void => {
      console.log(`navigate to IP (${val}) details page (issues tab)`);
    },
  },
  {
    Header: 'First observed',
    accessor: 'observationDate',
    width: 120,
    Cell: Date,
  },
  {
    Header: 'Last observed',
    accessor: 'lastObservationDate',
    width: 120,
    Cell: TimeFromNow,
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
    }: TextCellRendererProps<string> & {
      row: Row<Data>;
    }): React.ReactElement => {
      dayjs.extend(relativeTime);

      return (
        <Text
          column={column}
          formater={(val) => dayjs(val).to(dayjs(lastObservationDate), true)}
          value={value}
        />
      );
    },
  },
];

export type RowAction = {
  label: string;
  name: string;
  onClick: (rowId: number) => void;
};
export const rowActions: RowAction[] = [
  {
    label: 'Detail',
    name: 'detail',
    onClick: (rowId: number): void => {
      console.log(rowId);
    },
  },
  {
    label: 'Remove',
    name: 'remove',
    onClick: (rowId: number): void => {
      console.log(rowId);
    },
  },
];

export type TableProps = {
  data: Data[];
  primaryKey: string;
  columns: Column<Data>[];
  rowActions: RowAction[];
};

export const props: Partial<TableProps> = {
  data,
  primaryKey,
  columns,
  rowActions,
};
