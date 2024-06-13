import { ColumnOrderState } from '@tanstack/react-table';
import { pluck } from 'ramda';
import { CSSProperties } from 'react';

import {
  DatatableColumn,
  DatatableColumnDef,
  DatatableDefinedColumnDef,
  DatatableHeader,
  DatatableInstance,
  ParsedDatatableOptions,
} from './Datatable.types';
import { displayColumnIds } from './hooks/useDisplayColumns';

export const getColumnId = <D>(columnDef: DatatableColumnDef<D>): string =>
  columnDef.id ?? columnDef.accessorKey?.toString?.() ?? columnDef.header;

export const parseCSSVarId = (id: string) => id.replace(/[^a-zA-Z0-9]/g, '_');

export const getAllLeafColumnDefs = <D>(
  columns: DatatableColumnDef<D>[],
): DatatableColumnDef<D>[] => {
  const allLeafColumnDefs: DatatableColumnDef<D>[] = [];
  const getLeafColumns = (cols: DatatableColumnDef<D>[]) => {
    cols.forEach((col) => {
      allLeafColumnDefs.push(col);
    });
  };
  getLeafColumns(columns);
  return allLeafColumnDefs;
};

export const prepareColumns = <D>({
  columnDefs,
}: {
  columnDefs: DatatableColumnDef<D>[];
}): DatatableDefinedColumnDef<D>[] =>
  columnDefs.map((columnDef) => ({
    ...columnDef,
    id: columnDef.id ?? columnDef.accessorKey?.toString?.() ?? columnDef.header,
    columnDefType:
      columnDef?.columnDefType ??
      (!columnDef.accessorKey && !columnDef.accessorFn && columnDef.id)
        ? 'display'
        : 'data',
    enableSorting: columnDef?.enableSorting ?? true,
  }));

const getIsLastLeftPinnedColumn = <D>(
  table: DatatableInstance<D>,
  column: DatatableColumn<D>,
) =>
  column.getIsPinned() === 'left' &&
  table.getLeftLeafColumns().length - 1 === column.getPinnedIndex();

const getIsFirstRightPinnedColumn = <D>(column: DatatableColumn<D>) =>
  column.getIsPinned() === 'right' && column.getPinnedIndex() === 0;

const getTotalRight = <D>(
  table: DatatableInstance<D>,
  column: DatatableColumn<D>,
) => {
  return table
    .getRightLeafHeaders()
    .slice(column.getPinnedIndex() + 1)
    .reduce((acc, col) => acc + col.getSize(), 0);
};

const getSizeStyle = <D>({
  header,
  column,
}: {
  header?: DatatableHeader<D>;
  column: DatatableColumn<D>;
}): CSSProperties => {
  const CSSVarId = parseCSSVarId(header?.id ?? column.id);

  if (
    CSSVarId === displayColumnIds.select ||
    CSSVarId === displayColumnIds.expand ||
    CSSVarId === displayColumnIds.actions
  ) {
    return {};
  }

  const varName = `--${header ? 'header' : 'col'}-${CSSVarId}-size`;
  const columnMinSize = column.columnDef.minSize ?? 60;

  return {
    minWidth: `max(calc(var(${varName}) * 1px), ${columnMinSize}px)`,
    width: `calc(var(${varName}) * 1px)`,
    flex: `var(${varName}) 0 auto`,
  };
};

const getPinnedStyle = <D>({
  table,
  column,
}: {
  table: DatatableInstance<D>;
  column: DatatableColumn<D>;
}): CSSProperties => {
  const isPinned = column.getIsPinned();

  if (!isPinned) {
    return {};
  }

  if (isPinned === 'left') {
    const isLastLeftColumn = getIsLastLeftPinnedColumn(table, column);

    return {
      left: `${column.getStart('left') / 16}rem`,
      borderRight:
        isLastLeftColumn && '1px solid var(--sscds-table-color-border)',
      boxShadow: isLastLeftColumn && 'var(--sscds-table-shadow-pin-left)',
    };
  }
  const isFirstRightColumn = getIsFirstRightPinnedColumn(column);

  return {
    right: `${getTotalRight(table, column) / 16}rem`,
    borderLeft:
      isFirstRightColumn && '1px solid var(--sscds-table-color-border)',
    boxShadow: isFirstRightColumn && 'var(--sscds-table-shadow-pin-right)',
  };
};

export const getCommonCellStyles = <D>({
  table,
  header,
  column,
}: {
  table: DatatableInstance<D>;
  header?: DatatableHeader<D>;
  column: DatatableColumn<D>;
}): CSSProperties => {
  return {
    ...getSizeStyle({ header, column }),
    ...getPinnedStyle({ table, column }),
  };
};

export const reorderColumn = <D>(
  draggedColumn: DatatableColumn<D>,
  targetColumn: DatatableColumn<D>,
  columnOrder: ColumnOrderState,
): ColumnOrderState => {
  if (draggedColumn.getCanPin()) {
    draggedColumn.pin(targetColumn.getIsPinned());
  }
  const newColumnOrder = [...columnOrder];
  newColumnOrder.splice(
    newColumnOrder.indexOf(targetColumn.id),
    0,
    newColumnOrder.splice(newColumnOrder.indexOf(draggedColumn.id), 1)[0],
  );
  return newColumnOrder;
};

export const getDefaultColumnOrder = <D>(
  columnOrder: ColumnOrderState,
  columnDef: DatatableDefinedColumnDef<D>[],
  tableOptions: ParsedDatatableOptions<D>,
): ColumnOrderState => {
  const { enableRowSelection } = tableOptions;
  const defaultColumnOrder: string[] = pluck(['id'], columnDef);
  return Array.from(
    new Set([
      enableRowSelection && 'ssc_dt_select',
      ...columnOrder,
      ...defaultColumnOrder,
    ]),
  ).filter(Boolean);
};

export const getHidableColumns = <D>(table: DatatableInstance<D>) =>
  table
    .getVisibleFlatColumns()
    .filter((col) => Object.values(displayColumnIds).indexOf(col.id) === -1);
