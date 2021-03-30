import { useEffect } from 'react';

import { DatatableStore } from '../Datatable.store';
import { OnDataFetchFn } from '../Datatable.types';

export function useDataFetch<D>(onDataFetch: OnDataFetchFn<D>): void {
  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => ({
        pageIndex: s.pageIndex,
        pageSize: s.pageSize,
        sortBy: s.sortBy,
        filters: s.filters,
        query: s.query,
      }),
      (params) => {
        onDataFetch(params);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [onDataFetch]);
}
