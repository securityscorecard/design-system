import { To } from 'history';
import { Column, IdType } from 'react-table';

import { SearchBarProps } from '../forms/SearchBar/SearchBar.types';
import { FiltersProps } from '../Filters/Filters.types';
import {
  OnDataFetchFn,
  PrimaryKey,
  RowAction,
  TableConfig,
} from './Table/Table.types';
import { Action } from './types/Action.types';
import { SpacingProps } from '../../types/spacing.types';

export type CustomColumnProps<D> = {
  nullCondition?: (value: unknown) => boolean;
  nullConditionValue?: string;
  onClick?: (value: unknown, rowData: D) => void;
  hrefComposer?: (value: unknown, rowData: D) => string;
  toComposer?: (value: unknown, rowData: D) => To;
  displayLimit?: number;
};

export type FiltersConfig = Omit<FiltersProps, 'isLoading'>;

type ToolsActions = {
  onToolActivate: React.MouseEventHandler;
  onToolDeactivate: React.MouseEventHandler;
};

export type ControlsConfig<D> = {
  isControlsEnabled?: boolean;

  // Search section
  hasSearch?: boolean;
  searchConfig?: SearchBarProps;

  // Tools actions
  columnVisibilityActions?: ToolsActions;
  filteringActions?: ToolsActions;
  groupingActions?: ToolsActions;
  customViewsActions?: ToolsActions;

  // == Currently not implemented ==
  // Column Visibility section
  hasColumnVisibility?: boolean;
  defaultHiddenColumns?: IdType<D>[];
  // Column Ordering section
  hasColumnOrdering?: boolean;
  defaultColumnOrder?: IdType<D>[];
  // Grouping section
  hasGrouping?: boolean;
  defaultGroups?: IdType<D>[];
  // User Views section
  hasCustomViews?: boolean;
  defaultCustomView?: IdType<D>[];

  hasFiltering: boolean;
  filtersConfig?: FiltersConfig;
  defaultIsFilteringOpen?: boolean;
};

export type ExtendedTableConfig<D> = TableConfig<D> & {
  rowActions?: RowAction<D>[];
};

export interface DatatableProps<D extends Record<string, unknown>>
  extends SpacingProps {
  data: D[];
  totalDataSize: number;
  dataPrimaryKey?: PrimaryKey<D>;
  onDataFetch?: OnDataFetchFn<D>;
  isDataLoading?: boolean;
  columns: Column<D>[];
  tableConfig?: ExtendedTableConfig<D>;
  controlsConfig: ControlsConfig<D>;
  batchActions?: Action[];
}
