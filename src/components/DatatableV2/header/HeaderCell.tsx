import React from 'react';
import { flexRender } from '@tanstack/react-table';

import HeaderCellSortButton from './HeaderCellSortButton';
import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import HeaderCellColumnActionsButton from './HeaderCellColumnActionsButton';

const HeaderCell = <D,>({
  header,
  table,
}: {
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    options: { enableColumnActions },
  } = table;
  const {
    column: { columnDef, getCanSort, getIsSorted, getToggleSortingHandler },
    getContext,
    id,
    isPlaceholder,
  } = header;

  const showColumnActions =
    (enableColumnActions || columnDef?.enableColumnActions) &&
    columnDef?.enableColumnActions !== false;

  return (
    <th key={id} className="ds-table-header-cell ds-table-cell">
      {/* I know what I'm doing here */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <span
        className="ds-table-header-cell-label"
        onClick={getToggleSortingHandler()}
      >
        {isPlaceholder ? null : flexRender(columnDef.header, getContext())}
      </span>
      {getCanSort() && (
        <HeaderCellSortButton
          direction={getIsSorted()}
          header={header}
          table={table}
        />
      )}
      {showColumnActions && (
        <HeaderCellColumnActionsButton header={header} table={table} />
      )}
    </th>
  );
};

export default HeaderCell;
