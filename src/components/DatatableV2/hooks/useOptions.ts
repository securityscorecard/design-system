/* eslint-disable no-underscore-dangle */
import { T } from 'ramda';

import { DatatableOptions, ParsedDatatableOptions } from '../Datatable.types';

export const useOptions = <D>({
  hasMultiSort = true,
  hasPagination = true,
  hasSorting = true,
  hasSortingRemoval = true,
  manualPagination,
  ...restDatatableOptions
}: Partial<DatatableOptions<D>>): ParsedDatatableOptions<D> => {
  let __manualPagination = manualPagination;

  if (manualPagination === undefined && hasPagination === false) {
    __manualPagination = true;
  }

  return {
    enableMultiSort: hasMultiSort,
    enablePagination: hasPagination,
    enableSorting: hasSorting,
    enableSortingRemoval: hasSortingRemoval,
    isMultiSortEvent: T,
    manualPagination: __manualPagination,
    ...restDatatableOptions,
  };
};
