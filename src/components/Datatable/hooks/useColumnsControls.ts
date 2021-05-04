import { useEffect } from 'react';
import { allPass, reduce } from 'ramda';
import { Column, IdType } from 'react-table';
import { isNotFunction, isNotUndefined } from 'ramda-adjunct';

import { DatatableStore } from '../Datatable.store';

const normalizeColumns = (acc, { id, accessor, Header }) => ({
  ...acc,
  [allPass([isNotFunction, isNotUndefined])(accessor) ? accessor : id]: {
    label: Header,
  },
});

export const useColumnsControls = <D extends Record<string, unknown>>(
  onColumnOrderChange: (columnOrder: IdType<D>[]) => void,
  columns: Column<D>[],
  defaultColumnOrder: IdType<D>[] = [],
): void => {
  useEffect(() => {
    DatatableStore.update((s) => {
      s.columns = reduce(normalizeColumns, {}, columns);
    });
  }, [columns]);

  useEffect(() => {
    DatatableStore.update((s) => {
      s.columnOrder = defaultColumnOrder;
    });
  }, [defaultColumnOrder]);

  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => s.columnOrder,
      (columnOrder) => {
        onColumnOrderChange(columnOrder);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [onColumnOrderChange]);
};
