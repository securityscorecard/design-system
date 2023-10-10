import { useState } from 'react';
import { isEmptyArray } from 'ramda-adjunct';
import { useDeepCompareEffect } from 'use-deep-compare';

import { DatatableStore } from '../../../Datatable.store';

export const useColumnVisibility = (): {
  hiddenColumns: string[];
  setHiddenColumn: (id: string, value: boolean) => void;
  storeVisibleColumns: () => void;
  reinitializeVisibleColumns: () => void;
  resetVisisbleColumns: () => void;
  isInDefaultVisibility: boolean;
} => {
  const hiddenColumns = DatatableStore.useState((s) => s.hiddenColumns);
  const [localHiddenColumns, setLocalHiddenColumns] = useState(hiddenColumns);

  useDeepCompareEffect(() => {
    setLocalHiddenColumns(hiddenColumns);
  }, [hiddenColumns]);
  const setHiddenColumn = (id, value) => {
    if (value === true) {
      setLocalHiddenColumns((prev) => prev.filter((col) => col !== id));
    } else {
      setLocalHiddenColumns((prev) => [...prev, id]);
    }
  };
  const isInDefaultVisibility = isEmptyArray(localHiddenColumns);
  const storeVisibleColumns = () => {
    DatatableStore.update((s) => {
      s.hiddenColumns = localHiddenColumns;
    });
  };

  const resetVisisbleColumns = () => {
    setLocalHiddenColumns([]);
  };
  const reinitializeVisibleColumns = () => {
    setLocalHiddenColumns(hiddenColumns);
  };

  return {
    hiddenColumns: localHiddenColumns,
    setHiddenColumn,
    storeVisibleColumns,
    reinitializeVisibleColumns,
    resetVisisbleColumns,
    isInDefaultVisibility,
  };
};
