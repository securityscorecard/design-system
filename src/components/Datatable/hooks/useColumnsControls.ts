import type { Column, IdType } from 'react-table';

import { useEffect } from 'react';
import { allPass, reduce } from 'ramda';
import { isNotFunction, isNotUndefined } from 'ramda-adjunct';
import { useDeepCompareEffect } from 'use-deep-compare';

import { DatatableStore } from '../Datatable.store';

const normalizeColumns = (acc, { id, accessor, Header }) => ({
  ...acc,
  [allPass([isNotFunction, isNotUndefined])(accessor) ? accessor : id]: {
    label: Header,
  },
});

export const useColumnsControls = <D extends Record<string, unknown>>(
  onColumnOrderChange: (columnOrder: IdType<D>[]) => void,
  onColumnVisibilityChange: (hiddenColumns: IdType<D>[]) => void,
  columns: Column<D>[],
  defaultColumnOrder: IdType<D>[] = [],
  defaultHiddenColumns: IdType<D>[] = [],
): void => {
  useDeepCompareEffect(() => {
    DatatableStore.update((s) => {
      s.columns = reduce(normalizeColumns, {}, columns);
    });
  }, [columns]);

  useDeepCompareEffect(() => {
    DatatableStore.update((s) => {
      s.columnOrder = defaultColumnOrder;
    });
  }, [defaultColumnOrder]);

  useDeepCompareEffect(() => {
    DatatableStore.update((s) => {
      s.hiddenColumns = defaultHiddenColumns;
    });
  }, [defaultHiddenColumns]);

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

  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => s.hiddenColumns,
      (hiddenColumns) => {
        onColumnVisibilityChange(hiddenColumns);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [onColumnVisibilityChange]);
};
