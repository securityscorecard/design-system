import { Column, SortingRule } from 'react-table';

import { Filter } from '../Filters/Filters.types';
import { ControlsConfig } from './ControlsModule/ControlsModule.types';
import { PrimaryKey, TableConfig } from './Table/Table.types';
import { Action } from './types/Action.types';

type OnDataFetchArgs<D> = {
  pageSize: number;
  pageIndex: number;
  sortBy: SortingRule<D>[];
  filters: Filter[];
  query: string;
};
export type OnDataFetchFn<D> = ({
  pageSize,
  pageIndex,
  sortBy,
  filters,
  query,
}: OnDataFetchArgs<D>) => void;

export interface DatatableProps<D extends Record<string, unknown>> {
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
   * Data fetch function called upon pagination, sorting, filtering and searching
   */
  onDataFetch?: OnDataFetchFn<D>;
  /**
   * List of available batch actions for table
   *
   * See: [Action.types.ts](https://github.com/securityscorecard/design-system/blob/alpha/src/components/Datatable/types/Action.types.ts)
   */
  batchActions?: Action[];
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
   * Config object for controls module
   *
   * See: [ControlsModule.types.ts](https://github.com/securityscorecard/design-system/blob/alpha/src/components/Datatable/ControlsModule/ControlsModule.types.ts)
   */
  controlsConfig?: Partial<ControlsConfig<D>>;
  /**
   * Config object for table
   *
   * See: [Table.types.ts](https://github.com/securityscorecard/design-system/blob/alpha/src/components/Datatable/Table/Table.types.ts)
   */
  tableConfig?: Partial<TableConfig<D>>;
}
