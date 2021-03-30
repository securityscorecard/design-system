import { useEffect } from 'react';
import { IdType } from 'react-table';

import { DatatableStore } from '../Datatable.store';
import { OnSelectFn } from '../Table/Table.types';

export function useTableRowSelect<D>(
  onSelect: OnSelectFn<D>,
  defaultSelectedRowIds: IdType<D>[],
): void {
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
}
