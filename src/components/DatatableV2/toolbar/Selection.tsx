import React from 'react';
import { pluck } from 'ramda';

import { abbreviateNumber } from '../../../utils';
import { DatatableInstance } from '../Datatable.types';

const Selection = <D,>({ table }: { table: DatatableInstance<D> }) => {
  const {
    options: { renderRowSelectionActions, rowsCount },
    getPrePaginationRowModel,
    getSelectedRowModel,
    toggleAllRowsSelected,
  } = table;

  const selectedRows = getSelectedRowModel().rows;
  const selectedRowsCount = selectedRows.length;
  const totalRowCount = rowsCount ?? getPrePaginationRowModel().rows.length;

  if (selectedRowsCount === 0) {
    return null;
  }

  return (
    <div className="ds-table-selection-toolbar">
      <div className="ds-table-selection-overview">
        <strong className="ds-table-selection-currently-selected">
          {selectedRowsCount.toLocaleString('en-US')}
        </strong>{' '}
        of{' '}
        <abbr title={totalRowCount.toString()}>
          {abbreviateNumber(totalRowCount)}
        </abbr>{' '}
        {totalRowCount === 1 ? 'item' : 'items'} selected
        <button
          className="ds-table-selection-clear-button"
          type="button"
          onClick={() => toggleAllRowsSelected(false)}
        >
          Clear selection
        </button>
      </div>
      <div className="ds-table-selection-actions-container">
        {renderRowSelectionActions?.({
          selectedRows: pluck('original', selectedRows),
          totalRowCount,
          table,
        })}
      </div>
    </div>
  );
};

export default Selection;
