import {
  ColumnSizingState,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

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
  ParsedDatatableOptions,
} from '../Datatable.types';
import { displayColumnIds, useDisplayColumns } from './useDisplayColumns';
import { useOptions } from './useOptions';
import { useDebounce } from '../../../hooks/useDebounce';

const getMaxRowsPerPageOption = <D>(
  tableOptions: ParsedDatatableOptions<D>,
) => {
  const { enableRowsPerPage, rowsPerPageOptions } = tableOptions;
  if (!enableRowsPerPage) return null;

  if (Array.isArray(rowsPerPageOptions)) {
    return rowsPerPageOptions[rowsPerPageOptions.length - 1];
  }
  return null;
};

export const useDatatable = <D>(
  options: DatatableOptions<D>,
): DatatableInstance<D> => {
  const tableOptions = useOptions<D>(options);
  const displayColumns = useDisplayColumns<D>(tableOptions);
  const tableRef = useRef<HTMLTableElement>();
  const lastSelectedRowIdRef = useRef<null | string>(null);

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
          ...(tableOptions.enableExpanding ? [displayColumnIds.expand] : []),
          ...(tableOptions.enableRowSelection ? [displayColumnIds.select] : []),
          ...(initState.columnPinning?.left ?? []),
        ]),
      ),
      right: Array.from(
        new Set([
          ...(tableOptions.enableRowActions ? [displayColumnIds.actions] : []),
          ...(initState.columnPinning?.right ?? []),
        ]),
      ),
    };
    initState.pagination = {
      pageIndex: initState?.pagination?.pageIndex ?? 0,
      pageSize:
        initState?.pagination?.pageSize ??
        getMaxRowsPerPageOption(tableOptions) ??
        50,
    };

    return initState;
  }, [tableOptions, columnDefs]);

  const [showColumnSettings, setShowColumnSettings] = useState<boolean>(
    initialState?.showColumnSettings ?? false,
  );
  const [isFullscreenMode, setIsFullscreenMode] = useState(
    initialState?.isFullscreenMode ?? false,
  );
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(
    initialState?.columnSizing ?? {},
  );
  const [width, setWidth] = useState(0);

  const onResize = () => {
    setWidth(tableRef.current.getBoundingClientRect().width);
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  useLayoutEffect(() => {
    onResize();
  }, []);

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
    ...tableOptions,
    // I know what I'm doing here
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    columns: columnDefs,
    data,
    initialState,
    state: {
      showColumnSettings,
      isFullscreenMode,
      columnSizing,
      ...tableOptions.state,
      // I know what I'm doing here
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      width,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: tableOptions.enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: tableOptions.enableSorting
      ? getSortedRowModel()
      : undefined,
    getExpandedRowModel: tableOptions.enableExpanding
      ? getExpandedRowModel()
      : undefined,
  }) as unknown as DatatableInstance<D>;

  table.refs = {
    tableRef,
    lastSelectedRowIdRef,
  };

  table.setShowColumnSettings =
    tableOptions.onShowColumnSettings ?? setShowColumnSettings;
  table.setIsFullscreenMode =
    tableOptions.onFullscreenModeChange ?? setIsFullscreenMode;
  table.setColumnSizing =
    tableOptions.onColumnSizingChange ?? debouncedSetColumnSizing;

  return table;
};
