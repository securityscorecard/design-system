import {
  DatatableColumn,
  DatatableColumnDef,
  DatatableDefinedColumnDef,
  DatatableInstance,
} from './Datatable.types';

export const prepareColumns = <D>({
  columnDefs,
}: {
  columnDefs: DatatableColumnDef<D>[];
}): DatatableDefinedColumnDef<D>[] =>
  columnDefs.map((columnDef) => ({
    ...columnDef,
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
  column,
}: {
  table: DatatableInstance<D>;
  column: DatatableColumn<D>;
}) => ({
  borderRight: getIsLastLeftPinnedColumn(table, column)
    ? '1px solid black'
    : 'none',
  borderLeft: getIsFirstRightPinnedColumn(column) ? '1px solid black' : 'none',
});
