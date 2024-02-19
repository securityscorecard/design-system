import type { ColumnOrderState } from '@tanstack/react-table';
import type { CSSProperties } from 'react';
import type {
  DatatableColumn,
  DatatableColumnDef,
  DatatableDefinedColumnDef,
  DatatableHeader,
  DatatableInstance,
  ParsedDatatableOptions,
} from './Datatable.types';

import { pluck } from 'ramda';

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
    columnDefType: columnDef?.columnDefType ?? 'data',
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

export const getCommonCellStyles = <D>({
  table,
  header,
  column,
}: {
  table: DatatableInstance<D>;
  header?: DatatableHeader<D>;
  column: DatatableColumn<D>;
}): CSSProperties => ({
  minWidth: `max(calc(var(--${header ? 'header' : 'col'}-${parseCSSVarId(
    header?.id ?? column.id,
  )}-size) * 1px), ${column.columnDef.minSize ?? 30}px)`,
  width: `calc(var(--${header ? 'header' : 'col'}-${parseCSSVarId(
    header?.id ?? column.id,
  )}-size) * 1px)`,
  flex: `var(--${header ? 'header' : 'col'}-${parseCSSVarId(
    header?.id ?? column.id,
  )}-size) 0 auto`,
  flexDirection: header ? 'column' : 'row',
  height: '100%',
  position: column.getIsPinned() ? 'sticky' : undefined,
  zIndex: column.getIsPinned() ? '1' : undefined,
  left:
    column.getIsPinned() === 'left'
      ? `${column.getStart('left')}px`
      : undefined,
  right:
    column.getIsPinned() === 'right'
      ? `${getTotalRight(table, column)}px`
      : undefined,
  backgroundColor: column.getIsPinned()
    ? 'var(--sscds-table-color-background)'
    : undefined,
  borderRight: getIsLastLeftPinnedColumn(table, column)
    ? '1px solid var(--sscds-table-color-border)'
    : 'inherit',
  borderLeft: getIsFirstRightPinnedColumn(column)
    ? '1px solid var(--sscds-table-color-border)'
    : 'inherit',

  boxShadow: getIsLastLeftPinnedColumn(table, column)
    ? 'var(--sscds-table-shadow-pin-left)'
    : getIsFirstRightPinnedColumn(column)
    ? 'var(--sscds-table-shadow-pin-right)'
    : 'none',
});

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
