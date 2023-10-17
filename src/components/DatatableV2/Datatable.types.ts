import { ColumnDef, Table, TableOptions } from '@tanstack/react-table';

export interface DatatableOptions<D>
  extends Omit<
    Partial<TableOptions<D>>,
    | 'data'
    | 'columns'
    | 'enableMultiSort'
    | 'enablePagination'
    | 'enableSorting'
    | 'enableSortingRemoval'
  > {
  data: D[];
  columns: ColumnDef<D>[];
  /**
   * @default true
   */
  hasMultiSort?: boolean;
  /**
   * @default true
   */
  hasSorting?: boolean;
  /**
   * @default true
   */
  hasPagination?: boolean;
  /**
   * @default true
   */
  hasSortingRemoval?: boolean;
}

export interface ParsedDatatableOptions<D>
  extends Omit<Partial<TableOptions<D>>, 'data' | 'columns'> {
  enablePagination?: boolean;
}

export interface DatatableInstance<D>
  extends Omit<Partial<Table<D>>, 'options'> {
  options: ParsedDatatableOptions<D>;
}
