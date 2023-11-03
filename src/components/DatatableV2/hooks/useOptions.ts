/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';

import { DatatableOptions, ParsedDatatableOptions } from '../Datatable.types';

export const useOptions = <D>({
  columns,
  data,
  defaultColumn,
  enableColumnActions = true,
  enableColumnPinning = true,
  enableColumnResizing = true,
  enableHiding = true,
  enableMultiRowSelection = true,
  enableMultiSort = true,
  enablePagination = true,
  enableRowSelection = false,
  enableRowsPerPage = true,
  enableSelectAll = true,
  enableSorting = true,
  enableSortingRemoval = true,
  manualPagination,
  renderRowSelectionActions,
  rowsPerPageOptions = [10, 25, 50, 100],
  selectAllMode = 'all',
  ...restDatatableOptions
}: Partial<DatatableOptions<D>>): ParsedDatatableOptions<D> => {
  const __defaultColumn = useMemo(
    () => ({
      minSize: 40,
      size: 150,
      maxSize: 800,
      ...defaultColumn,
    }),
    [defaultColumn],
  );
  let __manualPagination = manualPagination;

  if (manualPagination === undefined && enablePagination === false) {
    __manualPagination = true;
  }

  return {
    columns,
    data,
    defaultColumn: __defaultColumn,
    defaultDisplayColumn: {
      columnDefType: 'display',
      enableColumnActions: false,
      enableHiding: false,
      enablePinning: false,
      enableResizing: false,
      enableSorting: false,
    },
    enableColumnActions,
    enableColumnPinning,
    enableColumnResizing,
    enableHiding,
    enableMultiRowSelection,
    enableMultiSort,
    enablePagination,
    enableRowSelection,
    enableRowsPerPage,
    enableSelectAll,
    enableSorting,
    enableSortingRemoval,
    manualPagination: __manualPagination,
    renderRowSelectionActions,
    rowsPerPageOptions,
    selectAllMode,
    ...restDatatableOptions,
    columnResizeMode: 'onChange',
  };
};
