import type { ActionType, IdType, SortingRule, TableState } from 'react-table';

type TableRecord = Record<string, unknown>;

type CancelableTableState<D extends TableRecord> = TableState<D> & {
  previousState: TableState<D> | null;
};

type StateReducerFn<D extends TableRecord> = (
  newState: CancelableTableState<D>,
  action: ActionType & { id?: IdType<D> },
) => TableState<D>;

export const actions = {
  deselectAllRows: 'deselectAllRows',
  toggleSingleRowSelected: 'toggleSingleRowSelected',
  cancelLoading: 'cancelLoading',
  preserveState: 'preserveState',
};

export const tableActionsReducer =
  <D extends TableRecord>({
    collectFetchParams,
  }: {
    collectFetchParams: (
      pageIndex: number,
      pageSize: number,
      sortBy: SortingRule<D>[],
    ) => void;
  }): StateReducerFn<D> =>
  (newState, action): CancelableTableState<D> => {
    const { pageSize, sortBy, previousState } = newState;

    switch (action.type) {
      case actions.preserveState:
        return { ...newState, previousState: newState };
      case actions.cancelLoading:
        return previousState ? { previousState, ...previousState } : newState;
      case 'toggleSortBy':
        setTimeout(() => {
          collectFetchParams(0, pageSize, sortBy);
        }, 0);
        return { ...newState, pageIndex: 0 };
        break;
      case actions.deselectAllRows:
        return { ...newState, selectedRowIds: {} };
      case actions.toggleSingleRowSelected:
        return {
          ...newState,
          selectedRowIds: {
            ...(!(action.id in newState.selectedRowIds)
              ? { [action.id]: true }
              : {}),
          } as TableState<D>['selectedRowIds'],
        };
      default:
        break;
    }

    return newState;
  };
