import React from 'react';

import { DatatableInstance } from '../Datatable.types';

const Pagination = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
    getPrePaginationRowModel,
    getState,
    nextPage,
    options,
    previousPage,
    setPageIndex,
    setPageSize,
  } = table;
  const { pagination } = getState();
  const { pageIndex, pageSize } = pagination;

  const currentPage = pageIndex + 1;
  const lastPage = getPageCount() - 1;
  const totalRowCount =
    options.rowsCount ?? getPrePaginationRowModel().rows.length;
  const firstRowIndex = pageIndex * pageSize;
  const lastRowIndex = Math.min(pageIndex * pageSize + pageSize, totalRowCount);

  return (
    <div>
      {options.enableRowsPerPage && (
        <div>
          <label htmlFor="rowsPerPageSelect">Number of rows</label>
          <select
            id="rowsPerPageSelect"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {options.rowsPerPageOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        Showing {firstRowIndex + 1}-{lastRowIndex} of {totalRowCount} total
        items
      </div>
      <div>
        <span>Page {currentPage}</span>
        <button
          aria-label="Go to the first page of table"
          disabled={!getCanPreviousPage()}
          type="button"
          onClick={() => setPageIndex(0)}
        >
          First
        </button>
        <button
          aria-label="Go to the previous page of table"
          disabled={!getCanPreviousPage()}
          type="button"
          onClick={() => previousPage()}
        >
          Prev
        </button>
        <button
          aria-label="Go to the next page of table"
          disabled={!getCanNextPage()}
          type="button"
          onClick={() => nextPage()}
        >
          Next
        </button>
        <button
          aria-label="Go to the last page of table"
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
