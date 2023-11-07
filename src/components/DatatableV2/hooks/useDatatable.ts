import {
  ColumnSizingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import { prepareColumns } from '../columns.utils';
import { DatatableInstance, DatatableOptions } from '../Datatable.types';
import { useDisplayColumns } from './useDisplayColumns';
import { useOptions } from './useOptions';
import { useDebounce } from '../../../hooks/useDebounce';

export const useDatatable = <D>({
  data,
  columns,
  ...options
}: DatatableOptions<D>): DatatableInstance<D> => {
  const tableOptions = useOptions<D>(options);
  const displayColumns = useDisplayColumns<D>(tableOptions);

  const [showColumnSettings, setShowColumnSettings] = useState<boolean>(
    tableOptions.initialState?.showColumnSettings ?? false,
  );
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(
    tableOptions.initialState?.columnSizing ?? {},
  );

  const debouncedSetColumnSizing = useDebounce(setColumnSizing);

  const columnDefs = useMemo(
    () => prepareColumns({ columnDefs: [...displayColumns, ...columns] }),
    [columns, displayColumns],
  );

  const table = useReactTable({
    ...tableOptions,
    // I know what I'm doing here
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    columns: columnDefs,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: tableOptions.enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: tableOptions.enableSorting
      ? getSortedRowModel()
      : undefined,
    state: {
      showColumnSettings,
      columnSizing,
      ...tableOptions.state,
    },
  }) as unknown as DatatableInstance<D>;

  table.setShowColumnSettings =
    tableOptions.onShowColumnSettings ?? setShowColumnSettings;
  table.setColumnSizing =
    tableOptions.onColumnSizingChange ?? debouncedSetColumnSizing;

  return table;
};
