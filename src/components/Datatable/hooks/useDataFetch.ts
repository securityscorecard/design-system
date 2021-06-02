import { useEffect } from 'react';

import { DatatableStore } from '../Datatable.store';
import { OnDataFetchFn } from '../Datatable.types';

export const useDataFetch = <D>(onDataFetch: OnDataFetchFn<D>): void => {
  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => ({
        pageIndex: s.pageIndex,
        pageSize: s.pageSize,
        sortBy: s.sortBy,
        filters: s.filters,
        query: s.query,
        isCanceled: s.isCanceled,
      }),
      ({ isCanceled, ...params }) => {
        if (!isCanceled) onDataFetch(params);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [onDataFetch]);
};
