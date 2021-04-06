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
  data: D[];
  dataSize: number;
  columns: Column<D>[];
  isDataLoading?: boolean;
  onDataFetch?: OnDataFetchFn<D>;
  batchActions?: Action[];
  dataPrimaryKey?: PrimaryKey<D>;
  isControlsEnabled?: boolean;
  controlsConfig?: Partial<ControlsConfig>;
  tableConfig?: Partial<TableConfig<D>>;
}
