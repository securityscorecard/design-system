import { ColumnDef, Table, TableOptions } from '@tanstack/react-table';

export interface DatatableOptions<D>
  extends Omit<
    Partial<TableOptions<D>>,
    | 'columns'
    | 'data'
    | 'enableMultiRowSelection'
    | 'enableMultiSort'
    | 'enableRowSelection'
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
  hasSortingRemoval?: boolean;

  /**
   * @default true
   */
  hasPagination?: boolean;
  /**
   * @default true
   */
  hasRowsPerPage?: boolean;
  rowsPerPageOptions?: number[];
  rowsCount?: number;

  /**
   * @default true
   */
  hasRowSelection?: TableOptions<D>['enableRowSelection'];
  /**
   * @default true
   */
  hasMultiRowSelection?: TableOptions<D>['enableMultiRowSelection'];
  /**
   * @default true
   */
  hasSelectAll?: boolean;
  /**
   * @default 'all'
   */
  selectAllMode?: 'page' | 'all';
}

export type DatatableColumnDef<D, V = unknown> = ColumnDef<D, V> & {
  columnDefType?: 'display' | 'data';
};

export interface ParsedDatatableOptions<D>
  extends Omit<Partial<TableOptions<D>>, 'data' | 'columns'> {
  defaultDisplayColumn?: Partial<DatatableColumnDef<D>> & {
    columnDefType: 'display';
  };
  enablePagination?: DatatableOptions<D>['hasPagination'];
  enableRowsPerPage?: DatatableOptions<D>['hasRowsPerPage'];
  enableSelectAll?: DatatableOptions<D>['hasSelectAll'];
  rowsCount?: DatatableOptions<D>['rowsCount'];
  rowsPerPageOptions?: DatatableOptions<D>['rowsPerPageOptions'];
  selectAllMode?: DatatableOptions<D>['selectAllMode'];
}

export interface DatatableInstance<D>
  extends Omit<Partial<Table<D>>, 'options'> {
  options: ParsedDatatableOptions<D>;
}
