import React from 'react';

import { DatatableColumn, DatatableInstance } from '../Datatable.types';

const SettingsItem = <D,>({
  column,
  table,
}: {
  column: DatatableColumn<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    options: { enableColumnPinning, enableHiding },
  } = table;
  return (
    <div>
      <span>{column.columnDef.header}</span>
      {enableHiding && (
        <input
          aria-label={`${column.getIsVisible() ? 'Hide' : 'Show'} ${
            column.columnDef.header
          } column`}
          checked={column.getIsVisible()}
          disabled={!column.getCanHide()}
          type="checkbox"
          onChange={(e) => column.toggleVisibility(e.target.checked)}
        />
      )}
      {enableColumnPinning && (
        <input
          aria-label={`${column.getIsPinned() !== false ? 'Unpin' : 'Pin'} ${
            column.columnDef.header
          } column`}
          checked={column.getIsPinned() !== false}
          disabled={!column.getCanPin()}
          type="checkbox"
          onChange={(e) => column.pin(e.target.checked ? 'left' : false)}
        />
      )}
    </div>
  );
};

export default SettingsItem;
