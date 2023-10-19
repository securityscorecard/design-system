import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';

import { DatatableInstance, DatatableOptions } from '../Datatable.types';
import { useDislayColumns } from './useDisplayColumns';
import { useOptions } from './useOptions';

export const useDatatable = <D>({
  data,
  columns,
  ...options
}: DatatableOptions<D>): DatatableInstance<D> => {
  const tableOptions = useOptions<D>(options);
  const displayColumns = useDislayColumns<D>(tableOptions);

  const columnDefs = useMemo(
    () => [...displayColumns, ...columns],
    [columns, displayColumns],
  );

  const table = useReactTable({
    ...tableOptions,
    columns: columnDefs,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: tableOptions.enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: tableOptions.enableSorting
      ? getSortedRowModel()
      : undefined,
  }) as DatatableInstance<D>;

  return table;
};
