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
    getState,
    options: { renderDetailPanel, onRowClick },
    setActiveRowId,
  } = table;
  const { getVisibleCells, getIsExpanded, getIsSelected, id } = row;
  const { activeRowId } = getState();
  const hasOnRowClick = typeof onRowClick === 'function';

  return (
    <>
      <tr
        className="ds-table-body-row ds-table-row"
        data-active={hasOnRowClick ? id === activeRowId : undefined}
        data-selected={getIsSelected()}
        onClick={() => {
          if (hasOnRowClick) {
            setActiveRowId(id);
            onRowClick({ row, table });
          }
        }}
      >
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
