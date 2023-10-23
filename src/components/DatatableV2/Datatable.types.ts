import {
  Cell,
  Column,
  ColumnDef,
  DeepKeys,
  Header,
  HeaderGroup,
  Row,
  Table,
  TableOptions,
} from '@tanstack/react-table';
import { ReactNode, RefObject } from 'react';

export type DatatableColumnDef<D, V = unknown> = Omit<
  ColumnDef<D, V>,
  'accessorFn' | 'accessorFn' | 'cell' | 'header'
> & {
  accessorFn?: (originalRow: D) => V;
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  header?:
    | ((props: {
        column: DatatableColumn<D, V>;
        header: DatatableHeader<D>;
        table: DatatableInstance<D>;
      }) => ReactNode)
    | ReactNode;
  cell?: (props: {
    cell: Cell<D, V>;
    column: DatatableColumn<D, V>;
    renderedCellValue: ReactNode;
    row: Row<D>;
    rowRef?: RefObject<HTMLTableRowElement>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  columnDefType?: 'display' | 'data';
  enableColumnActions?: boolean;
};

export type DatatableDefinedColumnDef<D, V = unknown> = DatatableColumnDef<
  D,
  V
> & {
  columnDefType: 'display' | 'data';
};

export type DatatableColumn<D, V = unknown> = Omit<
  Column<D, V>,
  'columnDef' | 'columns'
> & {
  columnDef: DatatableColumnDef<D, V>;
  columns?: DatatableColumn<D, V>;
};

export type DatatableHeader<D> = Omit<
  Header<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    column: DatatableColumn<D>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  };
};

export type DatatableHeaderGroup<D> = Omit<HeaderGroup<D>, 'headers'> & {
  headers: DatatableHeader<D>[];
};

export interface ParsedDatatableOptions<D>
  extends Omit<Partial<TableOptions<D>>, 'data' | 'columns'> {
  columns: DatatableOptions<D>['columns'];
  data: DatatableOptions<D>['data'];
  defaultDisplayColumn?: Partial<DatatableColumnDef<D>> & {
    columnDefType: 'display';
  };
  enableColumnActions?: DatatableOptions<D>['enableColumnActions'];
  enablePagination?: DatatableOptions<D>['enablePagination'];
  enableRowsPerPage?: DatatableOptions<D>['enableRowsPerPage'];
  enableSelectAll?: DatatableOptions<D>['enableSelectAll'];
  rowsCount?: DatatableOptions<D>['rowsCount'];
  rowsPerPageOptions?: DatatableOptions<D>['rowsPerPageOptions'];
  selectAllMode?: DatatableOptions<D>['selectAllMode'];
  renderRowSelectionActions?: DatatableOptions<D>['renderRowSelectionActions'];
}

export interface DatatableInstance<D>
  extends Omit<Partial<Table<D>>, 'options' | 'getHeaderGroups'> {
  getHeaderGroups: () => DatatableHeaderGroup<D>[];
  options: ParsedDatatableOptions<D>;
}

export interface DatatableOptions<D>
  extends Omit<Partial<TableOptions<D>>, 'data' | 'columns'> {
  data: D[];
  columns: DatatableColumnDef<D>[];

  /**
   * @default true
   */
  enableMultiSort?: boolean;
  /**
   * @default true
   */
  enableSorting?: boolean;

  /**
   * @default true
   */
  enableSortingRemoval?: boolean;

  /**
   * @default true
   */
  enablePagination?: boolean;
  /**
   * @default true
   */
  enableRowsPerPage?: boolean;
  rowsPerPageOptions?: number[];
  rowsCount?: number;

  /**
   * @default false
   */
  enableRowSelection?: TableOptions<D>['enableRowSelection'];
  /**
   * @default true
   */
  enableMultiRowSelection?: TableOptions<D>['enableMultiRowSelection'];
  /**
   * @default true
   */
  enableSelectAll?: boolean;
  /**
   * @default 'all'
   */
  selectAllMode?: 'page' | 'all';
  renderRowSelectionActions?: (props: {
    selectedRows: D[];
    totalRowCount: number;
    table: DatatableInstance<D>;
  }) => ReactNode;

  /**
   * @default true
   */
  enableColumnActions?: boolean;
}
