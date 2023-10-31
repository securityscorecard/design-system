/* eslint-disable no-underscore-dangle */
import { DatatableOptions, ParsedDatatableOptions } from '../Datatable.types';

export const useOptions = <D>({
  columns,
  data,
  enableColumnActions = true,
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
  let __manualPagination = manualPagination;

  if (manualPagination === undefined && enablePagination === false) {
    __manualPagination = true;
  }

  return {
    columns,
    data,
    defaultDisplayColumn: {
      columnDefType: 'display',
      enableColumnActions: false,
      enableHiding: false,
      enableSorting: false,
    },
    enableColumnActions,
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
  };
};
