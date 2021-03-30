import { Store, registerInDevtools } from 'pullstate';
import { SortingRule } from 'react-table';

import { Filter } from '../Filters/Filters.types';

type DatatableStoreShape<D> = {
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
};

export const DatatableStore = new Store<
  DatatableStoreShape<Record<string, unknown>>
>(datatableInitialState);

if (process.env.STORYBOOK) {
  registerInDevtools({ datatable: DatatableStore });
}
