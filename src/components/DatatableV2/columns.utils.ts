import { ColumnOrderState } from '@tanstack/react-table';
import { pluck } from 'ramda';

import {
  DatatableColumn,
  DatatableColumnDef,
  DatatableDefinedColumnDef,
  DatatableHeader,
  DatatableInstance,
  ParsedDatatableOptions,
} from './Datatable.types';

export const parseCSSVarId = (id: string) => id.replace(/[^a-zA-Z0-9]/g, '_');

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

export const getCommonCellStyles = <D>({
  table,
  header,
  column,
}: {
  table: DatatableInstance<D>;
  header?: DatatableHeader<D>;
  column: DatatableColumn<D>;
}) => ({
  borderRight: getIsLastLeftPinnedColumn(table, column)
    ? '1px solid black'
    : 'none',
  borderLeft: getIsFirstRightPinnedColumn(column) ? '1px solid black' : 'none',
  minWidth: `max(calc(var(--${header ? 'header' : 'col'}-${parseCSSVarId(
    header?.id ?? column.id,
  )}-size) * 1px), ${column.columnDef.minSize ?? 30}px)`,
  width: `calc(var(--${header ? 'header' : 'col'}-${parseCSSVarId(
    header?.id ?? column.id,
  )}-size) * 1px)`,
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
  );
};
