import { Store } from 'pullstate';
import { IdType, SortingRule } from 'react-table';
import { Filter } from '../Filters/Filters.types';
export declare type DatatableStoreShape<D extends Record<string, unknown> = Record<string, unknown>> = {
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
    columns: Record<string, {
        label: string;
    }>;
    isCanceled: boolean;
};
export declare const datatableInitialState: {
    pageIndex: number;
    pageSize: number;
    sortBy: any[];
    filters: any[];
    hasAppliedFilters: boolean;
    query: string;
    isDataLoading: boolean;
    isCanceled: boolean;
    selectedIds: any[];
    hasExclusiveSelection: boolean;
    shouldResetSelectedRows: boolean;
    columns: {};
    columnOrder: any[];
    hiddenColumns: any[];
};
export declare const DatatableStore: Store<DatatableStoreShape<Record<string, unknown>>>;
