import type { Column, SortingRule } from 'react-table';
import type {
  PrimaryKey,
  RowAction,
} from '../_internal/BaseTable/BaseTable.types';
import type { ElementType } from 'react';

export interface TableProps<D extends Record<string, unknown>> {
  /**
   * Flag to determine wheter data is currently loading
   */
  isDataLoading?: boolean;
  /**
   * Enables pagination for the table
   */
  hasPagination?: boolean;
  /**
   * Number of row displayed per page
   */
  defaultPageSize?: number;
  /**
   * Initial page index (zero-based)
   */
  defaultPageIndex?: number;
  /**
   * Enables columns sorting
   */
  hasSorting?: boolean;
  /**
   * Initial sorting state
   */
  defaultSortBy?: SortingRule<D>[];
  /**
   * Component rendered when table have no data
   */
  NoDataComponent?: ElementType;
  /**
   * Callback called when pagination is clicked
   */
  onPageChange?: (page: number) => void;
  /**
   * Callback called when sorting is clicked
   */
  onSortChange?: (sort: SortingRule<D>[]) => void;
  /**
   * Name of column used as table primary key or function to retrieve the key
   *
   * Return value is used as id for selected rows
   */
  dataPrimaryKey?: PrimaryKey<D>;
  /**
   * List of actions available on single table row, shows last column with actions dropdown
   */
  rowActions?: RowAction<D>[];
  /**
   * Table data you want to display
   */
  data: D[];
  /**
   * Settings for each table column.
   *
   * Extends: https://react-table.tanstack.com/docs/api/useTable#column-options
   */
  columns: Column<D>[];
  /**
   * Total size of data
   */
  dataSize: number;
}
