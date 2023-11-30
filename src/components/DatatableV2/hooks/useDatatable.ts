import {
  ColumnSizingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import {
  getAllLeafColumnDefs,
  getColumnId,
  getDefaultColumnOrder,
  prepareColumns,
} from '../columns.utils';
import {
  DatatableInitialState,
  DatatableInstance,
  DatatableOptions,
} from '../Datatable.types';
import { displayColumnIds, useDisplayColumns } from './useDisplayColumns';
import { useOptions } from './useOptions';
import { useDebounce } from '../../../hooks/useDebounce';

export const useDatatable = <D>(
  options: DatatableOptions<D>,
): DatatableInstance<D> => {
  const tableOptions = useOptions<D>(options);
  const displayColumns = useDisplayColumns<D>(tableOptions);

  const columnDefs = useMemo(
    () =>
      prepareColumns({ columnDefs: [...displayColumns, ...options.columns] }),
    [options.columns, displayColumns],
  );

  const initialState = useMemo<Partial<DatatableInitialState>>(() => {
    const initState = tableOptions.initialState ?? {};
    initState.columnOrder = getDefaultColumnOrder(
      initState.columnOrder ?? [],
      columnDefs,
      tableOptions,
    );
    initState.columnPinning = {
      left: Array.from(
        new Set([
          ...(tableOptions.enableRowSelection ? [displayColumnIds.select] : []),
          ...(initState.columnPinning?.left ?? []),
        ]),
      ),
      right: [...(initState.columnPinning?.right ?? [])],
    };

    return initState;
  }, [tableOptions, columnDefs]);

  const [showColumnSettings, setShowColumnSettings] = useState<boolean>(
    initialState?.showColumnSettings ?? false,
  );
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(
    initialState?.columnSizing ?? {},
  );

  const debouncedSetColumnSizing = useDebounce(setColumnSizing);

  const data: D[] = useMemo(
    () =>
      options.state?.isLoading && !options.data.length
        ? [
            ...Array(
              options.state?.pagination?.pageSize ||
                initialState?.pagination?.pageSize ||
                10,
            ).fill(null),
          ].map(() =>
            Object.assign(
              {},
              ...getAllLeafColumnDefs(tableOptions.columns).map((col) => ({
                [getColumnId(col)]: null,
              })),
            ),
          )
        : options.data,
    [
      initialState?.pagination?.pageSize,
      options.data,
      options.state?.isLoading,
      options.state?.pagination?.pageSize,
      tableOptions.columns,
    ],
  );

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: tableOptions.enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: tableOptions.enableSorting
      ? getSortedRowModel()
      : undefined,
    ...tableOptions,
    // I know what I'm doing here
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    columns: columnDefs,
    data,
    initialState,
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
