import React from 'react';

import { DatatableInstance, DatatableRow } from '../Datatable.types';
import DetailPanel from '../panels/DetailPanel';
import BodyCell from './BodyCell';

const BodyRow = <D,>({
  row,
  table,
}: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    options: { renderDetailPanel },
  } = table;
  const { getVisibleCells, getIsExpanded } = row;
  return (
    <>
      <tr className="ds-table-body-row ds-table-row">
        {getVisibleCells().map((cell) => (
          <BodyCell key={cell.id} cell={cell} table={table} />
        ))}
      </tr>
      {renderDetailPanel && getIsExpanded() && (
        <DetailPanel row={row} table={table} />
      )}
    </>
  );
};

export default BodyRow;
