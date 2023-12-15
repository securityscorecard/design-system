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
  hasHorizontalScroll,
}: {
  table: DatatableInstance<D>;
  header?: DatatableHeader<D>;
  column: DatatableColumn<D>;
  hasHorizontalScroll: boolean;
}): CSSProperties => {
  const CSSVarId = parseCSSVarId(header?.id ?? column.id);
  const isPinned = column.getIsPinned();
  const isLastLeftColumn = getIsLastLeftPinnedColumn(table, column);
  const isFirstRightColumn = getIsFirstRightPinnedColumn(column);

  const pinnedStyle: CSSProperties = isPinned
    ? {
        position: 'sticky',
        zIndex: '1',
        left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
        right:
          isPinned === 'right'
            ? `${getTotalRight(table, column)}px`
            : undefined,
        borderRight: isLastLeftColumn
          ? '1px solid var(--sscds-table-color-border)'
          : 'inherit',
        borderLeft: isFirstRightColumn
          ? '1px solid var(--sscds-table-color-border)'
          : 'inherit',

        boxShadow: !hasHorizontalScroll
          ? 'none'
          : isLastLeftColumn
          ? 'var(--sscds-table-shadow-pin-left)'
          : isFirstRightColumn
          ? 'var(--sscds-table-shadow-pin-right)'
          : 'none',
      }
    : {};

  const sizes = (): CSSProperties => {
    if (CSSVarId === displayColumnIds.select) {
      return {
        minWidth: '2.5rem',
        flex: '0 0 2.5rem',
        justifyContent: 'center',
      };
    }
    if (
      CSSVarId === displayColumnIds.expand ||
      CSSVarId === displayColumnIds.actions
    ) {
      return {
        minWidth: '3rem',
        flex: '0 0 3rem',
        justifyContent: 'center',
      };
    }
    return {
      minWidth: `max(calc(var(--${
        header ? 'header' : 'col'
      }-${CSSVarId}-size) * 1px), ${column.columnDef.minSize ?? 60}px)`,
      width: `calc(var(--${header ? 'header' : 'col'}-${CSSVarId}-size) * 1px)`,
      flex: `var(--${header ? 'header' : 'col'}-${CSSVarId}-size) 0 auto`,
    };
  };

  return {
    ...sizes(),
    flexDirection: header ? 'column' : 'row',
    height: header ? '3.75rem' : '100%',
    ...pinnedStyle,
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
