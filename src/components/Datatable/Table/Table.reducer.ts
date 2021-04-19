import { ActionType, SortingRule, TableState } from 'react-table';

type StateReducerFn<D extends Record<string, unknown>> = (
  newState: TableState<D>,
  action: ActionType,
) => TableState<D>;

export const actions = {
  deselectAllRows: 'deselectAllRows',
};

export const tableActionsReducer = <D extends Record<string, unknown>>({
  collectFetchParams,
  scrollToTableTop,
}: {
  collectFetchParams: (
    pageIndex: number,
    pageSize: number,
    sortBy: SortingRule<D>[],
  ) => void;
  scrollToTableTop: () => void;
}): StateReducerFn<D> => (newState, action) => {
  const { pageIndex, pageSize, sortBy } = newState;

  switch (action.type) {
    case 'gotoPage':
      scrollToTableTop();
      collectFetchParams(pageIndex, pageSize, sortBy);
      break;
    case 'toggleSortBy':
      collectFetchParams(pageIndex, pageSize, sortBy);
      break;
    case actions.deselectAllRows:
      return { ...newState, selectedRowIds: {} };
    default:
      break;
  }

  return newState;
};
