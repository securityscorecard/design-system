import React from 'react';
import { SortDirection } from '@tanstack/react-table';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';

const HeaderCellSortButton = <D,>({
  direction,
  header,
  table,
}: {
  direction: SortDirection | false;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const { column } = header;
  const { columnDef } = column;
  const { sorting } = table.getState();

  const columnName =
    typeof columnDef.header === 'function'
      ? columnDef.header(header.getContext())
      : columnDef.header;
  const label =
    direction === 'desc'
      ? `Sorted by ${columnName} descending`
      : direction === 'asc'
      ? `Sorted by ${columnName} ascending`
      : 'Unsorted';
  const sortedIndex = sorting.length > 1 ? column.getSortIndex() + 1 : 0;

  return (
    <button
      aria-label={label}
      className="ds-table-header-cell-sort-button"
      type="button"
      onClick={column.getToggleSortingHandler()}
    >
      {direction === 'desc' ? '🔽' : direction === 'asc' ? '🔼' : ' '}
      {sortedIndex > 0 ? sortedIndex : null}
    </button>
  );
};

export default HeaderCellSortButton;
