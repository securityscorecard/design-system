import { flexRender } from '@tanstack/react-table';
import React from 'react';

import { getCommonCellStyles } from '../columns.utils';
import { DatatableCell, DatatableInstance } from '../Datatable.types';

const BodyCell = <D,>({
  cell,
  table,
}: {
  cell: DatatableCell<D>;
  table: DatatableInstance<D>;
}) => {
  const { column } = cell;

  return (
    <td
      className="ds-table-body-cell ds-table-cell"
      style={getCommonCellStyles({
        table,
        column,
      })}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default BodyCell;
