import { Column } from 'react-table';

import { PrimaryKey, TableConfig } from './Table/Table.types';

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
   * Name of column used as table primary key or function to retrieve the key
   *
   * Return value is used as id for selected rows
   */
  dataPrimaryKey?: PrimaryKey<D>;
  /**
   * Config object for table
   *
   * See: [Table.types.ts](https://github.com/securityscorecard/design-system/blob/alpha/src/components/DatatableLight/Table/Table.types.ts)
   */
  tableConfig?: Partial<TableConfig<D>>;
}
