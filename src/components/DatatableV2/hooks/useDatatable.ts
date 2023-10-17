import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { DatatableInstance, DatatableOptions } from '../Datatable.types';
import { useOptions } from './useOptions';

export const useDatatable = <D>({
  data,
  columns,
  ...options
}: DatatableOptions<D>): DatatableInstance<D> => {
  const tableOptions = useOptions<D>(options);

  const table = useReactTable({
    ...tableOptions,
    columns,
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
