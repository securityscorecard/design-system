import { ColumnDef, TableOptions } from '@tanstack/react-table';

export interface DatatableOptions<D>
  extends Omit<
    Partial<TableOptions<D>>,
    | 'data'
    | 'columns'
    | 'enableSorting'
    | 'enableMultiSort'
    | 'enableSortingRemoval'
  > {
  data: D[];
  columns: ColumnDef<D>[];
  /**
   * @default true
   */
  hasSorting?: boolean;
  /**
   * @default true
   */
  hasMultiSort?: boolean;
  /**
   * @default true
   */
  hasSortingRemoval?: boolean;
}
