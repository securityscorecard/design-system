import { Row } from '@tanstack/react-table';
import React from 'react';

import BodyCell from './BodyCell';

const BodyRow = <D,>({ row }: { row: Row<D> }) => {
  return (
    <tr className="ds-table-body-row ds-table-row">
      {row.getVisibleCells().map((cell) => (
        <BodyCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
};

export default BodyRow;
