import type { CSSProperties } from 'react';

import styled from 'styled-components';

export const TableStyles = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: auto;
  border: 1px solid lightgray;

  table {
    width: 100%;
    border-spacing: 0px;
  }
  thead th,
  tfoot th {
    font-weight: 700;
  }
  table,
  th,
  td {
    position: relative;
  }
  th,
  td {
    padding: 4px;
  }
  tr[data-index='even'] {
    background-color: #f3f3f3;
  }
  th button,
  .border {
    border: 1px solid;
  }
  button,
  [role='button'] {
    &:focus-visible {
      outline: 2px solid blue;
    }
  }
  .resizer {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background: rgba(0, 0, 0, 0.5);
    cursor: col-resize;
    user-select: none;
    touch-action: none;
  }

  .resizer.isResizing {
    background: blue;
    opacity: 1;
  }

  @media (hover: hover) {
    .resizer {
      opacity: 0;
    }

    *:hover > .resizer {
      opacity: 1;
    }
  }
`;

const getTotalRight = (table, column) => {
  return table
    .getRightLeafHeaders()
    .slice(column.getPinnedIndex() + 1)
    .reduce((acc, col) => acc + col.getSize(), 0);
};
const getIsLastLeftPinnedColumn = (table, column) => {
  return (
    column.getIsPinned() === 'left' &&
    table.getLeftLeafHeaders().length - 1 === column.getPinnedIndex()
  );
};

const getIsFirstRightPinnedColumn = (column) => {
  return column.getIsPinned() === 'right' && column.getPinnedIndex() === 0;
};

export const stickyStyle = (
  table,
  column,
  index = undefined,
): CSSProperties => {
  if (!column.getIsPinned()) {
    return {};
  }
  const style = {
    position: column.columnDef.columnDefType !== 'group' ? 'sticky' : undefined,
    right:
      column.getIsPinned() === 'right'
        ? `${getTotalRight(table, column)}px`
        : undefined,
    left:
      column.getIsPinned() === 'left'
        ? `${column.getStart('left')}px`
        : undefined,
    zIndex: 2,
    backgroundColor: index === 'even' ? '#f3f3f3' : 'white',
    boxShadow: getIsLastLeftPinnedColumn(table, column)
      ? 'rgba(0, 0, 0, 0.2) -4px 0px 8px -6px inset'
      : getIsFirstRightPinnedColumn(column)
      ? 'rgba(0, 0, 0, 0.2) 4px 0px 8px -6px inset'
      : undefined,
  } as CSSProperties;

  return style;
};
