import {
  AccessorFn,
  Cell,
  Column,
  ColumnDef,
  DeepKeys,
  Getter,
  Header,
  HeaderGroup,
  InitialTableState,
  Row,
  Table,
  TableOptions,
  TableState,
} from '@tanstack/react-table';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type DatatableColumnDef<D, V = unknown> = Omit<
  ColumnDef<D, V>,
  'accessorFn' | 'accessorFn' | 'cell' | 'header'
> & {
  accessorFn?: AccessorFn<D, V>;
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * `header` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use `headerComponent` property.
   */
  header: string;
  headerComponent?:
    | ((props: {
        column: DatatableColumn<D, V>;
        header: DatatableHeader<D>;
        table: DatatableInstance<D>;
      }) => ReactNode)
    | ReactNode;
  cell?: (props: {
    cell: DatatableCell<D>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  columnDefType?: 'display' | 'data';
  enableColumnActions?: boolean;
  enableOrdering?: boolean;
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

export type DatatableCell<D> = Omit<Cell<D, unknown>, 'column'> & {
  column: DatatableColumn<D>;
};

export type DatatableRow<D> = Omit<Row<D>, 'getVisibleCells'> & {
  getVisibleCells: () => DatatableCell<D>[];
};

export interface DatatableRowModel<D> {
  flatRows: DatatableRow<D>[];
  rows: DatatableRow<D>[];
  rowsById: { [key: string]: DatatableRow<D> };
}

export type DatatableHeaderGroup<D> = Omit<HeaderGroup<D>, 'headers'> & {
  headers: DatatableHeader<D>[];
};

interface CustomState {
  showColumnSettings: boolean;
}
export type DatatableInitialState = InitialTableState & CustomState;
export type DatatableState = TableState & CustomState;

export interface ParsedDatatableOptions<D>
  extends Omit<Partial<TableOptions<D>>, 'data' | 'columns'> {
  columns: DatatableOptions<D>['columns'];
  data: DatatableOptions<D>['data'];
  defaultDisplayColumn?: Partial<DatatableColumnDef<D>> & {
    columnDefType: 'display';
  };
  enableColumnActions?: DatatableOptions<D>['enableColumnActions'];
  enableColumnOrdering?: DatatableOptions<D>['enableColumnOrdering'];
  enablePagination?: DatatableOptions<D>['enablePagination'];
  enableRowsPerPage?: DatatableOptions<D>['enableRowsPerPage'];
  enableSelectAll?: DatatableOptions<D>['enableSelectAll'];
  initialState?: DatatableOptions<D>['initialState'];
  onShowColumnSettings?: DatatableOptions<D>['onShowColumnSettings'];
  renderRowSelectionActions?: DatatableOptions<D>['renderRowSelectionActions'];
  rowCount?: DatatableOptions<D>['rowCount'];
  rowsPerPageOptions?: DatatableOptions<D>['rowsPerPageOptions'];
  selectAllMode?: DatatableOptions<D>['selectAllMode'];
  state?: DatatableOptions<D>['state'];
}

export interface DatatableInstance<D>
  extends Omit<
    Partial<Table<D>>,
    | 'getAllLeafColumns'
    | 'getLeftLeafColumns'
    | 'getRightLeafColumns'
    | 'getCenterLeafColumns'
    | 'getHeaderGroups'
    | 'getRowModel'
    | 'getState'
    | 'options'
  > {
  getRowModel: () => DatatableRowModel<D>;
  getHeaderGroups: () => DatatableHeaderGroup<D>[];
  getAllLeafColumns: () => DatatableColumn<D>[];
  getCenterLeafColumns: () => DatatableColumn<D>[];
  getLeftLeafColumns: () => DatatableColumn<D>[];
  getRightLeafColumns: () => DatatableColumn<D>[];
  getState: () => DatatableState;
  options: ParsedDatatableOptions<D>;
  setShowColumnSettings: Dispatch<SetStateAction<boolean>>;
}

export interface DatatableOptions<D>
  extends Omit<
    Partial<TableOptions<D>>,
    | 'columnResizeMode'
    | 'columns'
    | 'data'
    | 'enablePinning'
    | 'initialState'
    | 'state'
    | 'groupedColumnMode'
    | 'onGroupingChange'
    | 'getGroupedRowModel'
    | 'enableGrouping'
    | 'manualGrouping'
    | 'aggregationFns'
    | 'filterFns'
    | 'filterFromLeafRows'
    | 'getFilteredRowModel'
    | 'enableFilters'
    | 'globalFilterFn'
    | 'manualFiltering'
    | 'onColumnFiltersChange'
    | 'onGlobalFilterChange'
    | 'maxLeafRowFilterDepth'
    | 'enableColumnFilters'
    | 'enableGlobalFilter'
    | 'getColumnCanGlobalFilter'
    | 'onRowPinningChange'
    | 'enableRowPinning'
    | 'keepPinnedRows'
    | 'getSubRows'
    | 'enableSubRowSelection'
  > {
  data: D[];
  columns: DatatableColumnDef<D>[];
  initialState?: Partial<DatatableInitialState>;
  state?: Partial<DatatableState>;

  /**
   * @default false
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
   * @default false
   */
  enableRowsPerPage?: boolean;
  rowsPerPageOptions?: number[];
  rowCount?: number;

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
  enableHiding?: boolean;

  /**
   * @default true
   */
  enableColumnPinning?: boolean;

  /**
   * @default true
   */
  enableColumnActions?: boolean;

  /**
   * @default true
   */
  enableColumnResizing?: boolean;

  /**
   * @default true
   */
  enableColumnOrdering?: boolean;

  onShowColumnSettings?: Dispatch<SetStateAction<boolean>>;
}
