import { Store, registerInDevtools } from 'pullstate';
import { IdType, SortingRule } from 'react-table';

import { Filter } from '../Filters/Filters.types';

export type DatatableStoreShape<
  D extends Record<string, unknown> = Record<string, unknown>
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
  columns: Record<string, { label: string }>;
};

export const datatableInitialState = {
  pageIndex: 0,
  pageSize: 50,
  sortBy: [],
  filters: [],
  hasAppliedFilters: false,
  query: '',
  isDataLoading: false,
  selectedIds: [],
  hasExclusiveSelection: false,
  shouldResetSelectedRows: false,
  columns: {},
  columnOrder: [],
};

export const DatatableStore = new Store<DatatableStoreShape>(
  datatableInitialState,
);

if (process.env.STORYBOOK) {
  registerInDevtools({ datatable: DatatableStore });
}
