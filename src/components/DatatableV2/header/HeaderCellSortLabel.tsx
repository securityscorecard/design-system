import React from 'react';
import { Header, SortDirection, Table } from '@tanstack/react-table';

const HeaderCellSortLabel = <D,>({
  direction,
  header,
  table,
}: {
  direction: SortDirection | false;
  header: Header<D, unknown>;
  table: Table<D>;
}) => {
  const { column } = header;
  const { columnDef } = column;
  const { sorting } = table.getState();

  const columnName =
    typeof columnDef.header === 'string'
      ? columnDef.header
      : columnDef.header(header.getContext());
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
      type="button"
      onClick={column.getToggleSortingHandler()}
    >
      {direction === 'desc' ? '🔽' : direction === 'asc' ? '🔼' : ' '}
      {sortedIndex > 0 ? sortedIndex : null}
    </button>
  );
};

export default HeaderCellSortLabel;
