import { T } from 'ramda';
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { DatatableOptions } from '../Datatable.types';

export const useDatatable = <D>({
  data,
  columns,
  hasSorting = true,
  hasMultiSort = true,
  hasSortingRemoval = true,
  ...restDatatableOptions
}: DatatableOptions<D>) => {
  const table = useReactTable({
    columns,
    data,
    enableMultiSort: hasMultiSort,
    enableSorting: hasSorting,
    enableSortingRemoval: hasSortingRemoval,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: hasSorting ? getSortedRowModel() : undefined,
    isMultiSortEvent: T,
    ...restDatatableOptions,
  });

  return table;
};
