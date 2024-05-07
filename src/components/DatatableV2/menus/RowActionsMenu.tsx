import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { MenuContent, MenuItem, MenuSeparator } from './menuElements';
import {
  DatatableInstance,
  DatatableRow,
  DatatableRowAction,
} from '../Datatable.types';

const RowActionsMenu = <D,>({
  row,
  table,
  rowActions,
}: {
  row?: DatatableRow<D>;
  table: DatatableInstance<D>;
  rowActions: DatatableRowAction<D>[];
}) => {
  const { getState } = table;
  const { isFullscreenMode } = getState();
  return (
    <DropdownMenu.Portal>
      <MenuContent
        $isFullscreen={isFullscreenMode}
        align="end"
        collisionPadding={10}
        sideOffset={5}
      >
        {rowActions.map((action, i) => {
          if (action === null) {
            // eslint-disable-next-line react/no-array-index-key
            return <MenuSeparator key={`row-actions-separator-${i}`} />;
          }
          const { iconName, iconType, label, onClick, isDisabled } = action;
          return (
            <MenuItem
              key={`row-actions-${label}`}
              className="ds-table-row-actions-menu-item"
              iconName={iconName}
              iconType={iconType}
              isDisabled={
                typeof isDisabled === 'function'
                  ? isDisabled({ row, table })
                  : isDisabled
              }
              onClick={onClick({ row, table })}
            >
              {label}
            </MenuItem>
          );
        })}
      </MenuContent>
    </DropdownMenu.Portal>
  );
};

export default RowActionsMenu;
