/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';

import { DatatableOptions, ParsedDatatableOptions } from '../Datatable.types';

export const useOptions = <D>({
  columns,
  data,
  defaultColumn,
  enableBatchRowSelection = true,
  enableColumnActions = true,
  enableColumnOrdering = true,
  enableColumnPinning = true,
  enableColumnResizing = true,
  enableExpandAll = false,
  enableExpanding = false,
  enableFullScreenMode = true,
  enableHiding = true,
  enableMultiRowSelection = true,
  enableMultiSort = false,
  enablePagination = true,
  enableRowSelection = true,
  enableRowsPerPage = false,
  enableSelectAll = true,
  enableSelectionToolbar = true,
  enableSorting = true,
  enableSortingRemoval = true,
  enableTopToolbar = true,
  manualPagination,
  manualSorting,
  renderNoDataFallback,
  renderRowSelectionActions,
  rowsPerPageOptions = [10, 25, 50, 100],
  rowSelectionMode = 'single-page',
  selectAllMode = 'page',
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
  let __manualSorting = manualSorting;

  if (manualPagination === undefined && enablePagination === false) {
    __manualPagination = true;
  }

  if (manualSorting === undefined && enableSorting === false) {
    __manualSorting = true;
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
    enableBatchRowSelection,
    enableColumnActions,
    enableColumnOrdering,
    enableColumnPinning,
    enableColumnResizing,
    enableExpandAll,
    enableExpanding,
    enableFullScreenMode,
    enableHiding,
    enableMultiRowSelection,
    enableMultiSort,
    enablePagination,
    enableRowSelection,
    enableRowsPerPage,
    enableSelectAll,
    enableSelectionToolbar,
    enableSorting,
    enableSortingRemoval,
    enableTopToolbar,
    manualPagination: __manualPagination,
    manualSorting: __manualSorting,
    renderNoDataFallback,
    renderRowSelectionActions,
    rowsPerPageOptions,
    rowSelectionMode,
    selectAllMode,
    ...restDatatableOptions,
    columnResizeMode: 'onChange',
    paginateExpandedRows: false,
  };
};
