import React from 'react';
import { Header, flexRender } from '@tanstack/react-table';

import HeaderCellSortLabel from './HeaderCellSortLabel';
import { DatatableInstance } from '../Datatable.types';

const HeaderCell = <D,>({
  header,
  table,
}: {
  header: Header<D, unknown>;
  table: DatatableInstance<D>;
}) => {
  return (
    <th key={header.id}>
      {/* I know what I'm doing here */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <span onClick={header.column.getToggleSortingHandler()}>
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
      </span>
      {header.column.getCanSort() ? (
        <HeaderCellSortLabel
          direction={header.column.getIsSorted()}
          header={header}
          table={table}
        />
      ) : null}
    </th>
  );
};

export default HeaderCell;
