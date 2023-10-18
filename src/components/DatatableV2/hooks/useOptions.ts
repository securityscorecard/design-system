/* eslint-disable no-underscore-dangle */
import { T } from 'ramda';

import { DatatableOptions, ParsedDatatableOptions } from '../Datatable.types';

export const useOptions = <D>({
  hasMultiSort = true,
  hasPagination = true,
  hasRowsPerPage = true,
  hasSorting = true,
  hasSortingRemoval = true,
  manualPagination,
  rowsPerPageOptions = [10, 25, 50, 100],
  ...restDatatableOptions
}: Partial<DatatableOptions<D>>): ParsedDatatableOptions<D> => {
  let __manualPagination = manualPagination;

  if (manualPagination === undefined && hasPagination === false) {
    __manualPagination = true;
  }

  return {
    enableMultiSort: hasMultiSort,
    enablePagination: hasPagination,
    enableRowsPerPage: hasRowsPerPage,
    enableSorting: hasSorting,
    enableSortingRemoval: hasSortingRemoval,
    isMultiSortEvent: T,
    manualPagination: __manualPagination,
    rowsPerPageOptions,
    ...restDatatableOptions,
  };
};
