import React from 'react';
import { SortDirection } from '@tanstack/react-table';
import styled from 'styled-components';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import { Icon } from '../../Icon';
import { getColor, getRadii } from '../../../utils';

const HeaderCellSortButtonRoot = styled.button`
  display: flex;
  cursor: pointer;
  color: ${getColor('neutral.500')};
  transition: var(--sscds-transition);
  border-radius: ${getRadii('default')};
  padding: 0.25rem;
  outline-offset: -2px;

  &:hover {
    color: ${getColor('text.primary')};
  }
  &:active {
    color: ${getColor('text.primary')};
  }
`;

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

  const columnName = columnDef.header;
  const label =
    direction === 'desc'
      ? `Sorted by ${columnName} descending`
      : direction === 'asc'
      ? `Sorted by ${columnName} ascending`
      : 'Unsorted';
  const sortedIndex = sorting.length > 1 ? column.getSortIndex() + 1 : 0;

  return (
    <HeaderCellSortButtonRoot
      aria-label={label}
      className="ds-table-header-cell-sort-button"
      type="button"
      onClick={column.getToggleSortingHandler()}
    >
      {direction === 'desc' ? (
        <Icon name="sort-down" />
      ) : direction === 'asc' ? (
        <Icon name="sort-up" />
      ) : (
        <Icon name="sort" />
      )}
      {sortedIndex > 0 ? ` ${sortedIndex}` : null}
    </HeaderCellSortButtonRoot>
  );
};

export default HeaderCellSortButton;
