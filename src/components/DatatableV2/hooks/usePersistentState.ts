import type {
  ColumnOrderState,
  ColumnPinningState,
  ColumnSizingState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';
import type { DatatableColumnDef, DatatableOptions } from '../Datatable.types';

import { useState } from 'react';

import { useLocalStorageState } from '../../../hooks/useLocalStorageState';
import { displayColumnIds } from './useDisplayColumns';

type PersistentState = {
  columnOrder?: ColumnOrderState;
  columnPinning?: ColumnPinningState;
  columnSizing?: ColumnSizingState;
  columnVisibility?: VisibilityState;
  sorting?: SortingState;
};

export const usePersistentState = <D>(
  key: string,
  options?: {
    enabled?: boolean;
    initialState?: PersistentState;
    columns: DatatableColumnDef<D>[];
    props: DatatableOptions<D>;
  },
) => {
  const { columns, enabled = false, initialState, props } = options;
  const [state, setState] = useLocalStorageState<PersistentState>(key);
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: Array.from(
      new Set([
        ...(props?.enableExpanding ?? false ? [displayColumnIds.expand] : []),
        ...(props?.enableRowSelection ?? true ? [displayColumnIds.select] : []),
        ...(state?.columnPinning?.left ??
          initialState?.columnPinning?.left ??
          []),
      ]),
    ),
    right: Array.from(
      new Set([
        ...(props?.enableRowActions ?? true ? [displayColumnIds.actions] : []),
        ...(state?.columnPinning?.right ??
          initialState?.columnPinning?.right ??
          []),
      ]),
    ),
  });
  const [columnSizing, setColumnSizing] = useState(
    state?.columnSizing ?? initialState?.columnSizing ?? {},
  );
  const defaultColumnOrder = columns.map(
    (column) => column.id ?? column.accessorKey?.toString?.() ?? column.header,
  );
  const [columnOrder, setColumnOrder] = useState(
    Array.from(
      new Set([
        ...(state?.columnOrder ?? initialState?.columnOrder ?? []),
        ...defaultColumnOrder,
      ]),
    ),
  );
  const [columnVisibility, setColumnVisibility] = useState(
    state?.columnVisibility ?? initialState?.columnVisibility ?? {},
  );
  const [sorting, setSorting] = useState(
    state?.sorting ?? initialState?.sorting ?? [],
  );

  if (enabled) {
    setState({
      columnPinning,
      columnSizing,
      columnVisibility,
      sorting,
      columnOrder,
    });
  }

  return [
    { columnPinning, columnSizing, columnOrder, columnVisibility, sorting },
    {
      onColumnPinningChange: setColumnPinning,
      onColumnSizingChange: setColumnSizing,
      onColumnOrderChange: setColumnOrder,
      onColumnVisibilityChange: setColumnVisibility,
      onSortingChange: setSorting,
    },
  ] as const;
};
