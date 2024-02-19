import type { DatatableInstance, DatatableRow } from '../Datatable.types';

import BodyCell from './BodyCell';

const BodyRow = <D,>({
  row,
  table,
}: {
  row: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => {
  return (
    <tr className="ds-table-body-row ds-table-row">
      {row.getVisibleCells().map((cell) => (
        <BodyCell key={cell.id} cell={cell} table={table} />
      ))}
    </tr>
  );
};

export default BodyRow;
