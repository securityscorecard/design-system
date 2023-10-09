import { isEmptyArray } from 'ramda-adjunct';

import { DatatableStore } from '../../../Datatable.store';

export const useColumnVisibility = (): {
  hiddenColumns: string[];
  isInDefaultVisibility: boolean;
} => {
  const { hiddenColumns } = DatatableStore.useState((s) => ({
    hiddenColumns: s.hiddenColumns,
  }));

  const isInDefaultVisibility = isEmptyArray(hiddenColumns);

  return {
    hiddenColumns,
    isInDefaultVisibility,
  };
};
