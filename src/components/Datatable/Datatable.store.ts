import type { IdType, SortingRule } from 'react-table';
import type { Filter } from '../Filters/Filters.types';

import { Store, registerInDevtools } from 'pullstate';

export type DatatableStoreShape<
  D extends Record<string, unknown> = Record<string, unknown>,
> = {
  pageIndex: number;
  pageSize: number;
  sortBy: SortingRule<D>[];
  filters: Filter[];
  hasAppliedFilters: boolean;
  query: string;
  isDataLoading: boolean;
  selectedIds: string[];
  hasExclusiveSelection: boolean;
  shouldResetSelectedRows: boolean;
  columnOrder: IdType<D>[];
  hiddenColumns: IdType<D>[];
  columns: Record<string, { label: string }>;
  isCanceled: boolean;
};

export const datatableInitialState = {
  pageIndex: 0,
  pageSize: 50,
  sortBy: [],
  filters: [],
  hasAppliedFilters: false,
  query: '',
  isDataLoading: false,
  isCanceled: false,
  selectedIds: [],
  hasExclusiveSelection: false,
  shouldResetSelectedRows: false,
  columns: {},
  columnOrder: [],
  hiddenColumns: [],
};

export const DatatableStore = new Store<DatatableStoreShape>(
  datatableInitialState,
);

if (process.env.STORYBOOK) {
  registerInDevtools({ datatable: DatatableStore });
}
