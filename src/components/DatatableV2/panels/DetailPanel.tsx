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
  } = table;
  return (
    <tr className="ds-table-body-row ds-table-row ds-table-detail-panel">
      <td colSpan={row.getVisibleCells().length} style={{ flexGrow: 1 }}>
        {renderDetailPanel({ table, row })}
      </td>
    </tr>
  );
};

export default DetailPanel;
