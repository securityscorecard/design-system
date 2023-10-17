import React from 'react';

import { DatatableInstance } from '../Datatable.types';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Pagination = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const lastPage = table.getPageCount() - 1;

  return (
    <div>
      <span>Page {currentPage}</span>
      <button
        aria-label="Go to the first page of table"
        disabled={!table.getCanPreviousPage()}
        type="button"
        onClick={() => table.setPageIndex(0)}
      >
        First
      </button>
      <button
        aria-label="Go to the previous page of table"
        disabled={!table.getCanPreviousPage()}
        type="button"
        onClick={() => table.previousPage()}
      >
        Prev
      </button>
      <button
        aria-label="Go to the next page of table"
        disabled={!table.getCanNextPage()}
        type="button"
        onClick={() => table.nextPage()}
      >
        Next
      </button>
      <button
        aria-label="Go to the last page of table"
        disabled={!table.getCanNextPage()}
        type="button"
        onClick={() => table.setPageIndex(lastPage)}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
