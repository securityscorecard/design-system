import { Cell, flexRender } from '@tanstack/react-table';
import React from 'react';

const BodyCell = <D, T = unknown>({ cell }: { cell: Cell<D, T> }) => {
  return (
    <td className="ds-table-body-cell ds-table-cell">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default BodyCell;
