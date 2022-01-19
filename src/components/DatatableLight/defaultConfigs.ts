import { mergeDeepRight } from 'ramda';

import { TableConfig } from './Table/Table.types';
import { NoData } from '../Datatable/Table/NoData';

export const defaultTableConfig: TableConfig<Record<string, unknown>> = {
  isDataLoading: true,
  hasPagination: true,
  defaultPageSize: 50,
  defaultPageIndex: 0,
  hasSorting: true,
  defaultSortBy: [],
  defaultColumnOrder: [],
  // defaultHiddenColumns: [],
  rowActions: [],
  NoDataComponent: NoData,
};
export const mergeTableConfig = mergeDeepRight(defaultTableConfig);
