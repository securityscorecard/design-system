import { useEffect, useState } from 'react';
import { comparator, keys, lt, sort } from 'ramda';
import deepEqual from 'fast-deep-equal';

import { DatatableStore, DatatableStoreShape } from '../../../Datatable.store';

export const compare = (order: string[]) => (a: string, b: string): number => {
  const index1 = order.indexOf(a);
  const index2 = order.indexOf(b);

  if (index1 === -1 && index2 >= 0) {
    return 1;
  }
  if (index1 >= 0 && index2 === -1) {
    return -1;
  }

  return comparator(lt)(index1, index2);
};

export const sortColumns = (
  order: string[],
  columns: DatatableStoreShape['columns'],
): string[] => {
  const compareColumns = compare(order);
  const columnKeys = keys(columns);

  return sort(compareColumns, columnKeys);
};

export const useColumnOrder = (): {
  orderedColumns: string[];
  setLocalColumnOrder: React.Dispatch<React.SetStateAction<string[]>>;
  storeOrderedColumns: () => void;
  reinitializeOrderedColumns: () => void;
  resetOrderedColumns: () => void;
  isInDefaultOrder: boolean;
} => {
  const { columns, columnOrder } = DatatableStore.useState((s) => ({
    columns: s.columns,
    columnOrder: s.columnOrder,
  }));
  const [localColumnOrder, setLocalColumnOrder] = useState(
    sortColumns(columnOrder, columns),
  );

  useEffect(() => {
    const unsubscribe = DatatableStore.subscribe(
      (s) => ({ order: s.columnOrder, allColumns: s.columns }),
      ({ order, allColumns }) => {
        setLocalColumnOrder(sortColumns(order, allColumns));
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const storeOrderedColumns = () => {
    const isInDefaultOrder = deepEqual(localColumnOrder, keys(columns));
    DatatableStore.update((s) => {
      s.columnOrder = isInDefaultOrder ? [] : localColumnOrder;
    });
  };
  const resetOrderedColumns = () => {
    setLocalColumnOrder(keys(columns));
  };
  const reinitializeOrderedColumns = () => {
    setLocalColumnOrder(sortColumns(columnOrder, columns));
  };

  return {
    orderedColumns: localColumnOrder,
    setLocalColumnOrder,
    storeOrderedColumns,
    reinitializeOrderedColumns,
    resetOrderedColumns,
    isInDefaultOrder: deepEqual(localColumnOrder, keys(columns)),
  };
};
