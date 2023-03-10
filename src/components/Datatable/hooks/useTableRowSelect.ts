import type { IdType } from 'react-table';
import type { OnSelectFn } from '../Table/Table.types';

import { useEffect } from 'react';

import { DatatableStore } from '../Datatable.store';

export const useTableRowSelect = <D>(
  onSelect: OnSelectFn<D>,
  defaultSelectedRowIds: IdType<D>[],
): void => {
  useEffect(
    () =>
      DatatableStore.update((s) => {
        s.selectedIds = defaultSelectedRowIds;
      }),
    [defaultSelectedRowIds],
  );
  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => ({
        ids: s.selectedIds,
        hasExclusiveSelection: s.hasExclusiveSelection,
      }),
      ({ ids, hasExclusiveSelection }) => {
        onSelect(ids, hasExclusiveSelection);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [onSelect]);
};
