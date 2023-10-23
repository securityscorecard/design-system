import React from 'react';

import { abbreviateNumber } from '../../../utils';
import { DatatableInstance } from '../Datatable.types';

const Pagination = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    getPrePaginationRowModel,
    getState,
    nextPage,
    options: { enableRowsPerPage, rowsCount, rowsPerPageOptions },
    previousPage,
    setPageIndex,
    setPageSize,
  } = table;
  const { pagination } = getState();
  const { pageIndex, pageSize } = pagination;

  const currentPage = pageIndex + 1;
  const lastPage = getPageCount() - 1;
  const totalRowCount = rowsCount ?? getPrePaginationRowModel().rows.length;
  const firstRowIndex = pageIndex * pageSize;
  const lastRowIndex = Math.min(pageIndex * pageSize + pageSize, totalRowCount);

  return (
    <div className="ds-table-pagination-toolbar">
      {enableRowsPerPage && (
        <div className="ds-table-pagination-rows-per-page-wrapper">
          <label
            className="ds-table-pagination-rows-per-page-label"
            htmlFor="rowsPerPageSelect"
          >
            Number of rows
          </label>
          <select
            className="ds-table-pagination-rows-per-page-select"
            id="rowsPerPageSelect"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {rowsPerPageOptions.map((size) => (
              <option
                key={size}
                className="ds-table-pagination-rows-per-page-option"
                value={size}
              >
                {size}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="ds-table-pagination-item-count">
        Showing {(firstRowIndex + 1).toLocaleString('en-US')}-
        {lastRowIndex.toLocaleString('en-US')} of{' '}
        <abbr title={totalRowCount.toString()}>
          {abbreviateNumber(totalRowCount)}
        </abbr>{' '}
        total items
      </div>
      <div className="ds-table-pagination-buttons-wrapper">
        <span className="ds-table-pagination-buttons-current-page">
          Page {currentPage}
        </span>
        <button
          aria-label="Go to the first page of table"
          className="ds-table-pagination-buttons-first-button ds-table-pagination-buttons-button"
          disabled={!getCanPreviousPage()}
          type="button"
          onClick={() => setPageIndex(0)}
        >
          First
        </button>
        <button
          aria-label="Go to the previous page of table"
          className="ds-table-pagination-buttons-prev-button ds-table-pagination-buttons-button"
          disabled={!getCanPreviousPage()}
          type="button"
          onClick={() => previousPage()}
        >
          Prev
        </button>
        <button
          aria-label="Go to the next page of table"
          className="ds-table-pagination-buttons-next-button ds-table-pagination-buttons-button"
          disabled={!getCanNextPage()}
          type="button"
          onClick={() => nextPage()}
        >
          Next
        </button>
        <button
          aria-label="Go to the last page of table"
          className="ds-table-pagination-buttons-last-button ds-table-pagination-buttons-button"
          disabled={!getCanNextPage()}
          type="button"
          onClick={() => setPageIndex(lastPage)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
