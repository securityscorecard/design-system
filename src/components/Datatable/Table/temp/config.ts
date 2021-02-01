// TODO: Remove this when we expose API for Datatable component
import { Column } from 'react-table';

import { abbreviateNumber } from '../../../../utils/helpers';
import ipAssetsMock from '../../mocks/ipAssets.json';

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
};
const data: Data[] = ipAssetsMock;
const primaryKey = 'ipAddress';
const columns: Column<Data>[] = [
  { Header: 'IP Adress', accessor: 'ipAddress', width: 200 },
  { Header: 'Status', accessor: 'status', width: 96 },
  { Header: 'Domains', accessor: 'domainsCount', width: 96 },
  {
    Header: 'Detection',
    accessor: 'detectionMethod',
    Cell: ({ value }: { value: string[] }): string[] => {
      return value.map((item, index) => {
        if (index === value.length - 1) {
          return item;
        }
        return `${item}, `;
      });
    },
    width: 160,
  },
  {
    Header: 'Source',
    accessor: 'source',
    Cell: ({ value }: { value: string[] }): string[] => {
      return value.map((item, index) => {
        if (index === value.length - 1) {
          return item;
        }
        return `${item}, `;
      });
    },
    width: 160,
  },
  { Header: 'Country', accessor: 'country', width: 144 },
  {
    Header: 'Issues',
    accessor: 'issuesCount',
    Cell: ({ value }: { value: number }): string => {
      return abbreviateNumber(value);
    },
    width: 88,
  },
  {
    Header: 'Findings',
    accessor: 'findingsCount',
    Cell: ({ value }: { value: number }): string => {
      return abbreviateNumber(value);
    },
    width: 88,
  },
  { Header: 'Observed for', accessor: 'observationDate', width: 120 },
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
