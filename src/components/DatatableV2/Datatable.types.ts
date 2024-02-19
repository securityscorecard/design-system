import type {
  AccessorFn,
  Cell,
  Column,
  ColumnDef,
  ColumnDefTemplate,
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
import type {
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  SetStateAction,
} from 'react';
import type { Types as SSCIconTypes, SSCIcons } from '../Icon';

export type DatatableColumnDef<D, V = unknown> = Omit<
  ColumnDef<D, V>,
  'accessorFn' | 'accessorFn' | 'cell' | 'header'
> & {
  /**
   * You can use this to compose cell value from multiple keys in data object.
   *
   * Example:
   * If your data looks like:
   * ```
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   * ```
   *
   * You can extract full name with:
   * ```
   * {
   *   header: 'fullname'
   *   accessorFn: row => `${row.firstName} ${row.lastName}
   * }
   */
  accessorFn?: AccessorFn<D, V>;
  /**
   * Points cell value to single key in your data object.
   *
   * Example:
   * ```
   * type Person = {
   *   firstName: string;
   *   lastName: string;
   *   age: number;
   * }
   *
   * {
   *   header: 'age'
   *   accessorKey: 'age
   * }
   */
  accessorKey?: DeepKeys<D> | (string & Record<string, unknown>);
  /**
   * `header` is used as a readable column name on multiple places withing the table UI.
   *
   *  If you want to render custom JSX in that table header cell use `headerComponent` property.
   */
  header: string;
  /**
   * Provide custom implementation for showing column header.
   */
  headerComponent?:
    | ((props: {
        column: DatatableColumn<D, V>;
        header: DatatableHeader<D>;
        table: DatatableInstance<D>;
      }) => ReactElement)
    | ReactElement;
  /**
   * Provide custom implementation for showing column value.
   */
  cell?: ColumnDefTemplate<{
    cell: DatatableCell<D, V>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }>;
  /**
   * Defines column purpose. If this is left empty table will consider the column to be `data` type.
   * If the column is meant to display non-tabular data (e.g. buttons) you need to set this property
   * to `display`. This will filter out the column from column ordering and disables table functions
   * (pinning, sizing, sorting, etc).
   *
   * @default data
   */
  columnDefType?: 'display' | 'data';
  /**
   * Enables/disables actions menu in header for given column.
   */
  enableColumnActions?: boolean;
  /**
   * Enables/disables ordering for given column.
   */
  enableOrdering?: boolean;
  /**
   * You can provide your own implementation of the column header tooltip. This property accepts
   * React component with properties:
   *  - `column` - current column object
   *  - `header` - current header object
   *  - `table` - current instance of the table
   */
  renderHeaderTooltip?: (props: {
    column: DatatableColumn<D, V>;
    header: DatatableHeader<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
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

export type DatatableCell<D, V = unknown> = Omit<
  Cell<D, unknown>,
  'column' | 'getContext'
> & {
  column: DatatableColumn<D>;
  getContext: () => {
    cell: DatatableCell<D, V>;
    column: DatatableColumn<D, V>;
    getValue: Getter<V>;
    renderValue: Getter<V | null>;
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  };
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

export type DatatableRowAction<D> = null | {
  label: string;
  /* eslint-disable @typescript-eslint/ban-types */
  iconName: SSCIcons | (string & {});
  iconType?: SSCIconTypes | (string & {});
  /* eslint-enable @typescript-eslint/ban-types */
  onClick(props: {
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }): (event: Event) => void;
  isDisabled?:
    | boolean
    | ((props: {
        row: DatatableRow<D>;
        table: DatatableInstance<D>;
      }) => boolean);
};

interface CustomState {
  showColumnSettings: boolean;
  isLoading: boolean;
  showProgress: boolean;
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
  enableExpandAll?: DatatableOptions<D>['enableExpandAll'];
  enablePagination?: DatatableOptions<D>['enablePagination'];
  enableRowActions?: DatatableOptions<D>['enableRowActions'];
  enableRowsPerPage?: DatatableOptions<D>['enableRowsPerPage'];
  enableSelectAll?: DatatableOptions<D>['enableSelectAll'];
  initialState?: DatatableOptions<D>['initialState'];
  onShowColumnSettings?: DatatableOptions<D>['onShowColumnSettings'];
  renderDetailPanel?: DatatableOptions<D>['renderDetailPanel'];
  renderNoDataFallback?: DatatableOptions<D>['renderNoDataFallback'];
  renderRowSelectionActions?: DatatableOptions<D>['renderRowSelectionActions'];
  rowActions?: DatatableOptions<D>['rowActions'];
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
  getState: () => DatatableState & { width: number };
  options: ParsedDatatableOptions<D>;
  setShowColumnSettings: Dispatch<SetStateAction<boolean>>;
  refs: {
    tableRef: MutableRefObject<HTMLTableElement>;
  };
}

export interface DatatableOptions<D>
  extends Omit<
    Partial<TableOptions<D>>,
    | 'aggregationFns'
    | 'columnResizeMode'
    | 'columns'
    | 'data'
    | 'enableColumnFilters'
    | 'enableFilters'
    | 'enableGlobalFilter'
    | 'enableGrouping'
    | 'enablePinning'
    | 'enableRowPinning'
    | 'enableSubRowSelection'
    | 'filterFns'
    | 'filterFromLeafRows'
    | 'getColumnCanGlobalFilter'
    | 'getCoreRowModel'
    | 'getExpandedRowModel'
    | 'getFacetedMinMaxValues'
    | 'getFacetedRowModel'
    | 'getFacetedUniqueValues'
    | 'getFilteredRowModel'
    | 'getGroupedRowModel'
    | 'getIsRowExpanded'
    | 'getPaginationRowModel'
    | 'getRowCanExpand'
    | 'getSortedRowModel'
    | 'getSubRows'
    | 'globalFilterFn'
    | 'groupedColumnMode'
    | 'initialState'
    | 'keepPinnedRows'
    | 'manualFiltering'
    | 'manualGrouping'
    | 'maxLeafRowFilterDepth'
    | 'onColumnFiltersChange'
    | 'onGlobalFilterChange'
    | 'onGroupingChange'
    | 'onRowPinningChange'
    | 'state'
    | 'mergeOptions'
    | 'paginateExpandedRows'
    | 'sortingFns'
  > {
  /**
   * Definition of the table columns. Each column definition is REQUIRED to have `header` property
   * set. If you define a column that is not used for displaing row data (e.g. have button...),
   * please provide `columnDefType: 'display'`. Setting this property will disable some unnecessary
   * functionalities and filter out the column from column orderdering.
   */
  columns: DatatableColumnDef<D>[];
  /**
   * Table data that will be displayed.
   */
  data: D[];
  /**
   * Enables/disables actions menu in column header with column-related actions.
   *
   * @default true
   */
  enableColumnActions?: boolean;
  /**
   * Enables/disables column ordering for the table.
   * Controlled in table column settings panel accessible through the column actions menu.
   *
   * @default true
   */
  enableColumnOrdering?: boolean;
  /**
   * Enables/disables column pinning for the table. Controlled in the column actions menu or table
   * column settings panel accessible through the column actions menu.
   *
   * @default true
   */
  enableColumnPinning?: boolean;
  /**
   * Enables/disables column resizing for the table. Columns can be resized by dragging handler in
   * the column header.
   *
   * @default true
   */
  enableColumnResizing?: boolean;
  /**
   * Enables/disables button in the table header that expands all detail panels at once.
   */
  enableExpandAll?: boolean;
  /**
   * Enables/disables column hiding for the table. Controlled in the column actions menu or table
   * column settings panel accessible through the column actions menu.
   *
   * @default true
   */
  enableHiding?: boolean;
  /**
   * Enables/disables selection of multiple rows in the table. If this is `false` radio buttons will
   * be displayed instead of checkboxes and there will be no select all option in the table header.
   *
   * @default true
   */
  enableMultiRowSelection?: TableOptions<D>['enableMultiRowSelection'];
  /**
   * @default false
   */
  enableMultiSort?: boolean;
  /**
   * Enables/disables pagination for the table.
   *
   * @default true
   */
  enablePagination?: boolean;
  /**
   * Enables/disables storing table state into LocalStorage. This will automatically store pinned
   * and hidden columns, columns order and size and sorting. This property REQUIRES 'id' prop to be
   * set. The state will be stored in LS with key in format `sscds_dt_<id>`.
   *
   * @default true
   */
  enablePersistentState?: boolean;
  /**
   * Enables/disables row actions column for the table.
   *
   * @default false
   */
  enableRowActions?: boolean;
  /**
   * Enables/disables row selection for the table.
   *
   * @default true
   */
  enableRowSelection?: TableOptions<D>['enableRowSelection'];
  /**
   * Enables/disables rows per page selector for the table. This property REQUIRES
   * `enablePagination` to be true.
   *
   * @default false
   */
  enableRowsPerPage?: boolean;
  /**
   * Enables/disables checkbox in the table header that selects all rows at once.
   *
   * @default true
   */
  enableSelectAll?: boolean;
  /**
   * @default true
   */
  enableSorting?: boolean;
  /**
   * @default true
   */
  enableSortingRemoval?: boolean;
  /**
   * Unique table identifier. Used as id for storing table state to LocalStorage when enablePersistentState is enabled
   */
  id: string;
  /**
   * Default state of the table. This is used when table is initialized and is used when state is
   * restored to default.
   */
  initialState?: Partial<DatatableInitialState>;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.showColumnSetting`
   * changes. This overrides the default internal state management, so you are expected to manage
   * this state on your own. You can pass the managed state back to the table via the
   * `tableOptions.state.showColumnSettings` option.
   *
   */
  onShowColumnSettings?: Dispatch<SetStateAction<boolean>>;
  /**
   * Provide your own implementation of row details panel. This property accepts React component\
   * with properties:
   *  - `row`: current row, row data are accessible through `row.original`
   *  - `table` - current instance of the table
   */
  renderDetailPanel?: (props: {
    row: DatatableRow<D>;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * You can provide your own implementation of the state when there are no data in the table. This
   * property accepts React component with one property `table` which holds current instance of the
   * table.
   */
  renderNoDataFallback?: (props: { table: DatatableInstance<D> }) => ReactNode;
  /**
   * You can provide your own implementation of the row actions container. This property accepts
   * React component with properties:
   *  - `selectedRows` - array of currently selected rows
   *  - `totalRowCount` - count of all rows in the table
   *  - `table` - current instance of the table
   */
  renderRowSelectionActions?: (props: {
    selectedRows: D[];
    totalRowCount: number;
    table: DatatableInstance<D>;
  }) => ReactNode;
  /**
   * List of actions available on the row data. Actions will be rendered as last column of the table.
   * If only one action is provided it will be rendered directly in the column. If multiple actions
   * are provided actions will be rendered in dropdown menu.
   */
  rowActions?: DatatableRowAction<D>[];
  /**
   * Expected number of rows in the dataset which is used for displaying pagination correctly when
   * pagination is not managed internally. This property is REQUIRED for the manual (managed,
   * server-side) pagination.
   */
  rowCount?: number;
  /**
   * List of options for the row count displayed on the current page.
   *
   * default: `[10, 25, 50, 100]`
   */
  rowsPerPageOptions?: number[];
  /**
   * Switch mode for the select all checkbox in the table header. When `page` is set checkbox will
   * select all rows in the current page. When `all` is set checkbox will select all rows in the
   * table.
   *
   * @default page
   */
  selectAllMode?: 'page' | 'all';
  /**
   * Current state of the table. Used when you need to manage table state on your own.
   */
  state?: Partial<DatatableState>;
}
