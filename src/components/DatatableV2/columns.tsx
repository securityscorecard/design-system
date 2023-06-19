import type { IPAsset } from './data/ipAssets';

import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import { IndeterminateCheckbox } from './IndeterminateCheckbox';
import { abbreviateNumber } from '../../utils';

const columnHelper = createColumnHelper<IPAsset>();

export const defaultColumns = [
  columnHelper.display({
    id: 'expand',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          {...{
            type: 'button',
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer' },
          }}
        >
          {row.getIsExpanded() ? '👇' : '👉'}
        </button>
      ) : (
        '🔵'
      );
    },
    enablePinning: false,
    enableGrouping: false,
    enableHiding: false,
    enableSorting: false,
    enableResizing: false,
    size: 40,
    meta: {
      isStatic: true,
    },
  }),
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
    footer: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    enablePinning: false,
    enableGrouping: false,
    enableHiding: false,
    enableSorting: false,
    enableResizing: false,
    size: 40,
    meta: {
      isStatic: true,
    },
  }),
  columnHelper.accessor('ipAddress', {
    header: 'IP Address',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('domainsCount', {
    footer: (info) => info.column.id,
    aggregatedCell: (info) => abbreviateNumber(info.getValue()),
  }),
  columnHelper.accessor((row) => row.detectionMethod, {
    header: 'Detection Method',
    cell: (info) => info.getValue().join(', '),
    footer: (info) => info.column.id,
    aggregationFn: (colId, _leaf, child) => {
      return (
        child.reduce((acc, curr) => {
          return acc + curr.getValue<IPAsset['detectionMethod']>(colId).length;
        }, 0) / child.length
      ).toFixed(2);
    },
  }),
  columnHelper.accessor((row) => row.source, {
    header: 'Source',
    cell: (info) => info.getValue().join(', '),
    footer: (info) => info.column.id,
    aggregationFn: (colId, _leaf, child) => {
      return (
        child.reduce((acc, curr) => {
          return acc + curr.getValue<IPAsset['source']>(colId).length;
        }, 0) / child.length
      ).toFixed(2);
    },
  }),
  columnHelper.accessor('issuesCount', {
    footer: (info) => info.column.id,
    aggregatedCell: (info) => abbreviateNumber(info.getValue()),
  }),
  columnHelper.accessor('findingsCount', {
    footer: (info) => info.column.id,
    aggregatedCell: (info) => abbreviateNumber(info.getValue()),
  }),
  columnHelper.accessor('observationDate', {
    header: 'Observation Date',
    cell: (info) => dayjs(info.getValue()).format('MMM DD, YYYY'),
    footer: (info) => info.column.id,
    aggregationFn: 'min',
    aggregatedCell: (info) => dayjs(info.getValue()).format('MMM DD, YYYY'),
  }),
  columnHelper.accessor('lastObservationDate', {
    header: 'Last observation Date',
    cell: (info) => dayjs(info.getValue()).format('MMM DD, YYYY'),
    footer: (info) => info.column.id,
    aggregationFn: 'min',
    aggregatedCell: (info) => dayjs(info.getValue()).format('MMM DD, YYYY'),
  }),
];
