/* eslint-disable no-underscore-dangle */
import { T } from 'ramda';

import { DatatableOptions, ParsedDatatableOptions } from '../Datatable.types';

export const useOptions = <D>({
  hasMultiRowSelection = true,
  hasMultiSort = true,
  hasPagination = true,
  hasRowSelection = false,
  hasRowsPerPage = true,
  hasSelectAll = true,
  hasSorting = true,
  hasSortingRemoval = true,
  manualPagination,
  rowsPerPageOptions = [10, 25, 50, 100],
  selectAllMode = 'all',
  ...restDatatableOptions
}: Partial<DatatableOptions<D>>): ParsedDatatableOptions<D> => {
  let __manualPagination = manualPagination;

  if (manualPagination === undefined && hasPagination === false) {
    __manualPagination = true;
  }

  return {
    defaultDisplayColumn: {
      columnDefType: 'display',
      enableSorting: false,
    },
    enableMultiRowSelection: hasMultiRowSelection,
    enableMultiSort: hasMultiSort,
    enablePagination: hasPagination,
    enableRowSelection: hasRowSelection,
    enableRowsPerPage: hasRowsPerPage,
    enableSelectAll: hasSelectAll,
    enableSorting: hasSorting,
    enableSortingRemoval: hasSortingRemoval,
    isMultiSortEvent: T,
    manualPagination: __manualPagination,
    rowsPerPageOptions,
    selectAllMode,
    ...restDatatableOptions,
  };
};
