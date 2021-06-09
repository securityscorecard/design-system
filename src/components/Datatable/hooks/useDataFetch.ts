import { useEffect } from 'react';
import { pick, propEq, when } from 'ramda';

import { DatatableStore } from '../Datatable.store';
import { OnDataFetchFn } from '../Datatable.types';

export const useDataFetch = <D>(onDataFetch: OnDataFetchFn<D>): void => {
  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      pick([
        'pageIndex',
        'pageSize',
        'sortBy',
        'filters',
        'query',
        'isCanceled',
      ]),
      when(propEq('isCanceled', false), onDataFetch),
    );

    return () => {
      unsubscribe();
    };
  }, [onDataFetch]);
};
