import { ActionType, IdType, SortingRule, TableState } from 'react-table';
declare type TableRecord = Record<string, unknown>;
declare type CancelableTableState<D extends TableRecord> = TableState<D> & {
    previousState: TableState<D> | null;
};
declare type StateReducerFn<D extends TableRecord> = (newState: CancelableTableState<D>, action: ActionType & {
    id?: IdType<D>;
}) => TableState<D>;
export declare const actions: {
    deselectAllRows: string;
    toggleSingleRowSelected: string;
    cancelLoading: string;
    preserveState: string;
};
export declare const tableActionsReducer: <D extends TableRecord>({ collectFetchParams, }: {
    collectFetchParams: (pageIndex: number, pageSize: number, sortBy: SortingRule<D>[]) => void;
}) => StateReducerFn<D>;
export {};
