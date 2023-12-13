/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';

import { DatatableOptions, ParsedDatatableOptions } from '../Datatable.types';

export const useOptions = <D>({
  columns,
  data,
  defaultColumn,
  enableColumnActions = true,
  enableColumnOrdering = true,
  enableColumnPinning = true,
  enableColumnResizing = true,
  enableExpandAll = false,
  enableExpanding = false,
  enableHiding = true,
  enableMultiRowSelection = true,
  enableMultiSort = false,
  enablePagination = true,
  enableRowSelection = true,
  enableRowsPerPage = false,
  enableSelectAll = true,
  enableSorting = true,
  enableSortingRemoval = true,
  manualPagination,
  manualSorting,
  renderNoDataFallback,
  renderRowSelectionActions,
  rowsPerPageOptions = [10, 25, 50, 100],
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
      enableOrdering: false,
      enablePinning: false,
      enableResizing: false,
      enableSorting: false,
    },
    enableColumnActions,
    enableColumnOrdering,
    enableColumnPinning,
    enableColumnResizing,
    enableExpandAll,
    enableExpanding,
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
    manualSorting: __manualSorting,
    renderNoDataFallback,
    renderRowSelectionActions,
    rowsPerPageOptions,
    selectAllMode,
    ...restDatatableOptions,
    columnResizeMode: 'onChange',
    paginateExpandedRows: false,
  };
};
