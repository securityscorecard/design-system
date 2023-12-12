import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import IconButton from './IconButton';
import { DatatableInstance, DatatableRow } from '../Datatable.types';
import RowActionsMenu from '../menus/RowActionsMenu';

const RowActionsButton = <D,>({
  row,
  table,
}: {
  row?: DatatableRow<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    options: { rowActions = [] },
  } = table;

  if (rowActions.length > 1) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <IconButton
            className="ds-table-header-cell-row-actions-button"
            iconName="ellipsis-h"
            label="Row actions"
          />
        </DropdownMenu.Trigger>
        <RowActionsMenu row={row} rowActions={rowActions} table={table} />
      </DropdownMenu.Root>
    );
  }

  if (rowActions.length === 1) {
    const { label, iconName, onClick, isDisabled, iconType } = rowActions[0];
    return (
      <IconButton
        className="ds-table-header-cell-row-actions-button"
        iconName={iconName}
        iconProps={{ type: iconType }}
        isDisabled={
          typeof isDisabled === 'function'
            ? isDisabled({ row, table })
            : isDisabled
        }
        label={label}
        onClick={(e) => onClick({ row, table })(e as unknown as MouseEvent)}
      />
    );
  }

  return null;
};

export default RowActionsButton;
