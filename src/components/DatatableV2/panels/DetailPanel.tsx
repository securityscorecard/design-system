import React from 'react';

import { DatatableInstance, DatatableRow } from '../Datatable.types';

const DetailPanel = <D,>({
  table,
  row,
}: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    options: { renderDetailPanel },
    getState,
  } = table;
  const { width } = getState();

  return (
    <tr className="ds-table-body-row ds-table-row ds-table-detail-panel">
      <td
        className="ds-table-detail-panel-cell"
        colSpan={row.getVisibleCells().length}
        style={{ width }}
      >
        {renderDetailPanel({ table, row })}
      </td>
    </tr>
  );
};

export default DetailPanel;
