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
    getState,
    options: { renderDetailPanel, onRowClick },
    setActiveRowId,
  } = table;
  const { getVisibleCells, getIsExpanded, getIsSelected, id } = row;
  const { activeRowId } = getState();
  const hasOnRowClick = typeof onRowClick === 'function';
  const handleRowClick = () => {
    if (hasOnRowClick) {
      setActiveRowId(id);
      onRowClick({ row, table });
    }
  };

  return (
    <>
      <tr
        tabIndex={hasOnRowClick ? 0 : null}
        className="ds-table-body-row ds-table-row"
        data-active={hasOnRowClick ? id === activeRowId : undefined}
        data-selected={getIsSelected()}
        onClick={handleRowClick}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleRowClick();
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
