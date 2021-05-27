import { ActionType, IdType, SortingRule, TableState } from 'react-table';

type StateReducerFn<D extends Record<string, unknown>> = (
  newState: TableState<D>,
  action: ActionType & { id?: IdType<D> },
) => TableState<D>;

export const actions = {
  deselectAllRows: 'deselectAllRows',
  toggleSingleRowSelected: 'toggleSingleRowSelected',
};

export const tableActionsReducer = <D extends Record<string, unknown>>({
  collectFetchParams,
}: {
  collectFetchParams: (
    pageIndex: number,
    pageSize: number,
    sortBy: SortingRule<D>[],
  ) => void;
}): StateReducerFn<D> => (newState, action): TableState<D> => {
  const { pageSize, sortBy } = newState;

  switch (action.type) {
    case 'toggleSortBy':
      collectFetchParams(0, pageSize, sortBy);
      break;
    case actions.deselectAllRows:
      return { ...newState, selectedRowIds: {} };
    case actions.toggleSingleRowSelected:
      return {
        ...newState,
        selectedRowIds: {
          [action.id]: true,
        } as TableState<D>['selectedRowIds'],
      };
    default:
      break;
  }

  return newState;
};
