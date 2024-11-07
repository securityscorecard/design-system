/* eslint-disable react/boolean-prop-naming */
import type {
  InitialTableState,
  Table,
  TableOptions,
  TableState,
} from '@tanstack/react-table';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { RowAction } from '../_internal/buttons/RowActionsButton';

type CustomState = {
  isLoading: boolean;
  activeRowId: string;
};
type ListViewInitialState = Pick<
  InitialTableState,
  'pagination' | 'rowSelection'
> &
  Omit<CustomState, 'isLoading'>;
type ListViewState = Pick<TableState, 'pagination' | 'rowSelection'> &
  CustomState;

export type ListViewOptions<D> = {
  /**
   * List data that will be displayed.
   */
  data: D[];
  /**
   * Enables/disables selection of multiple rows in the list. If this is `false` radio buttons will
   * be displayed instead of checkboxes.
   *
   * @default true
   */
  enableMultiRowSelection?: TableOptions<D>['enableMultiRowSelection'];
  /**
   * Enables/disables pagination.
   *
   * @default true
   */
  enablePagination?: boolean;
  /**
   * Enables/disables row selection.
   *
   * @default false
   */
  enableRowSelection?: TableOptions<D>['enableRowSelection'];
  /**
   * Enables/disables rows per page selector. This property REQUIRES `enablePagination` to be true.
   *
   * @default false
   */
  enableRowsPerPage?: boolean;
  /**
   * This optional function is used to derive a unique ID for any given row. If not provided the
   * rows index is used. If you need to identify individual rows that are originating from any s
   * erver-side operations, it's suggested you use this function to return an ID that makes sense
   * regardless of network IO/ambiguity eg. a userId, taskId, database ID field, etc.
   */
  getRowId?: TableOptions<D>['getRowId'];
  /**
   * Default state of the lits. This is used when list is initialized and is used when state is
   * restored to default.
   */
  initialState?: Partial<ListViewInitialState>;
  /**
   * Enables manual pagination. If this option is set to `true`, the list will not automatically
   * paginate rows using `getPaginationRowModel()` and instead will expect you to manually paginate
   * the rows before passing them to the list. This is useful if you are doing server-side pagination.
   */
  manualPagination?: boolean;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.activeRowId`
   * changes. This overrides the default internal state management, so you are expected to manage
   * this state on your own. You can pass the managed state back to the list via the
   * `listOptions.state.activeRowId` option.
   */
  onActiveRowIdChange?: Dispatch<SetStateAction<string>>;
  /**
   * If this function is provided, it will be called when the pagination state changes and you will
   * be expected to manage the state yourself. You can pass the managed state back to the list via
   * the `listOptions.state.pagination` option.
   */
  onPaginationChange?: TableOptions<D>['onPaginationChange'];
  /**
   * Callback that is called when user clicks anywhere in the row area. Clicking on the selection
   * checkbox, row expand button and the row actions stops event propagation and does not trigger
   * the row click callback. We are passing argmuments into the callback:
   *  - `row` - current row data
   */
  onRowClick?: (props: { row: D }) => void;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.rowSelection` changes.
   * This overrides the default internal state management, so you will need to persist the state
   * change either fully or partially outside of the list.
   */
  onRowSelectionChange?: TableOptions<D>['onRowSelectionChange'];
  /**
   * Component that will be rendered as content for each row. This content shoudn't contain any
   * interactive elements to prevent accessibility violations. If you need to provide interaction
   * use either row click (`onRowClick`) or row actions (`rowActions`). We are passing argmuments
   * into the callback:
   * - `row` - current row data
   */
  renderListViewRow: (props: { row: D }) => JSX.Element;
  /**
   * You can provide your own implementation of the row actions container. This property accepts
   * React component with properties:
   *  - `selectedRows` - array of currently selected rows
   *  - `totalRowCount` - count of all rows in the list
   *  - `table` - current instance of the list
   */
  renderRowSelectionActions?: (props: {
    selectedRows: D[];
    totalRowCount: number;
    table: Table<D>;
  }) => ReactNode;
  /**
   * List of actions available on the row data. Actions will be rendered at the end of the list item.
   * If only one action is provided it will be rendered directly If multiple actions are provided
   * actions will be rendered in dropdown menu.
   */
  rowActions?: RowAction<D>[];
  /**
   * When manually controlling pagination, you can supply a total `rowCount` value to the list if
   * you know it. The `pageCount` can be calculated from this value and the `pageSize`.
   */
  rowCount?: number;
  /**
   * List of options for the row count displayed on the current page.
   *
   * default: `[10, 25, 50, 100]`
   */
  rowsPerPageOptions?: number[];
  /**
   * Current state of the list. Used when you need to manage list state on your own.
   */
  state?: Partial<ListViewState>;
};
export type ParsedListViewOptions<D> = TableOptions<D> &
  ListViewOptions<D> & {
    rowActionsCount: number;
  };
export type ListViewInstance<D> = Omit<Table<D>, 'options' | 'getState'> & {
  options: ParsedListViewOptions<D>;
  setActiveRowId: Dispatch<SetStateAction<string>>;
  getState: () => ListViewState;
};
