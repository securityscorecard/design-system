import type { Column, SortingRule } from 'react-table';
import type { PrimaryKey } from '../_internal/BaseTable/BaseTable.types';
import type { Filter } from '../Filters/Filters.types';
import type { ControlsConfig } from './ControlsModule/ControlsModule.types';
import type { TableConfig } from './Table/Table.types';
import type { Action } from './types/Action.types';

type OnDataFetchArgs<D> = {
  pageSize: number;
  pageIndex: number;
  sortBy: SortingRule<D>[];
  filters: Filter[];
  query: string;
};

export type BatchActionArgs = [string[], boolean, () => void];

export type OnDataFetchFn<D> = ({
  pageSize,
  pageIndex,
  sortBy,
  filters,
  query,
}: OnDataFetchArgs<D>) => void;

export interface DatatableProps<D extends Record<string, unknown>> {
  id?: string;
  /**
   * Table data you want to display
   */
  data: D[];
  /**
   * Total size of data
   */
  dataSize: number;
  /**
   * Settings for each table column.
   *
   * Extends: https://react-table.tanstack.com/docs/api/useTable#column-options
   */
  columns: Column<D>[];
  /**
   * Flag to determine wheter data is currently loading
   */
  isDataLoading?: boolean;
  /**
   * Cancel function called upon request cancellation.
   */
  onCancelLoading?: () => void;
  /**
   * Data fetch function called upon pagination, sorting, filtering and searching
   */
  onDataFetch?: OnDataFetchFn<D>;
  /**
   * List of available batch actions for table
   *
   * See: [action.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/types/action.types.ts)
   */
  batchActions?: Action<BatchActionArgs>[];
  /**
   * Name of column used as table primary key or function to retrieve the key
   *
   * Return value is used as id for selected rows
   */
  dataPrimaryKey?: PrimaryKey<D>;
  /**
   * Flag to enable/disable top controls module
   */
  isControlsEnabled?: boolean;
  /**
   * Flag to enable/disable batch actions module with element counter
   */
  isBatchModuleEnabled?: boolean;
  /**
   * Config object for controls module
   *
   * See: [ControlsModule.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/ControlsModule/ControlsModule.types.ts)
   */
  controlsConfig?: Partial<ControlsConfig<D>>;
  /**
   * Config object for table
   *
   * See: [Table.types.ts](https://github.com/securityscorecard/design-system/blob/main/src/components/Datatable/Table/Table.types.ts)
   */
  tableConfig?: Partial<TableConfig<D>>;
  /**
   * Function that allow storing selection reset function in the parent component
   */
  resetSelectionFn?: (resetFn: () => void) => void;
}
