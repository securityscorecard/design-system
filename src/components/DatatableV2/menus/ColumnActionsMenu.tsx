import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ColumnPinningPosition } from '@tanstack/react-table';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import { MenuContent, MenuItem, MenuSeparator } from './menuElements';

const ColumnActionsMenu = <D,>({
  header,
  table,
}: {
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    getState,
    options: {
      enableColumnOrdering,
      enableColumnPinning,
      enableColumnResizing,
      enableHiding,
      enableSorting,
      enableSortingRemoval,
    },
    setColumnSizingInfo,
    setShowColumnSettings,
  } = table;
  const { column } = header;
  const { columnSizing } = getState();

  const handleSort = (isDesc: boolean) => {
    column.toggleSorting(isDesc);
  };
  const handleClearSort = () => {
    column.clearSorting();
  };
  const handleHideColumn = () => {
    column.toggleVisibility(false);
  };
  const handlePinColumn = (dir: ColumnPinningPosition) => {
    column.pin(dir);
  };
  const handleResetColumnSize = () => {
    setColumnSizingInfo((old) => ({
      ...old,
      isResizingColumn: false,
    }));
    column.resetSize();
  };
  const handleColumnSettings = () => {
    setShowColumnSettings((old) => !old);
  };

  const columnActionsMenu = [
    ...(enableSorting && column.getCanSort()
      ? [
          <MenuItem
            key="col-action-sort-asc"
            className="ds-table-column-actions-menu-item"
            iconName="sort-up"
            isDisabled={column.getIsSorted() === 'asc'}
            onClick={() => handleSort(false)}
          >
            Ascending sort
          </MenuItem>,
          <MenuItem
            key="col-action-sort-desc"
            className="ds-table-column-actions-menu-item"
            iconName="sort-down"
            isDisabled={column.getIsSorted() === 'desc'}
            onClick={() => handleSort(true)}
          >
            Descending sort
          </MenuItem>,
          enableSortingRemoval !== false && (
            <MenuItem
              key="col-action-sort-reset"
              className="ds-table-column-actions-menu-item"
              iconName="times"
              isDisabled={!column.getIsSorted()}
              onClick={handleClearSort}
            >
              Clear sort
            </MenuItem>
          ),
          enableHiding && column.getCanHide() ? (
            <MenuSeparator key="col-action-sep-01" />
          ) : undefined,
        ]
      : []),
    ...(enableHiding && column.getCanHide()
      ? [
          <MenuItem
            key="col-action-hide-col"
            className="ds-table-column-actions-menu-item"
            iconName="eye-slash"
            onClick={handleHideColumn}
          >
            Hide column
          </MenuItem>,
          !enableHiding && !enableColumnPinning && !enableColumnOrdering ? (
            <MenuSeparator key="col-action-sep-02" />
          ) : undefined,
        ]
      : []),
    ...(enableHiding || enableColumnPinning || enableColumnOrdering
      ? [
          <MenuItem
            key="col-action-settings"
            className="ds-table-column-actions-menu-item"
            iconName="columns-3"
            onClick={handleColumnSettings}
          >
            Column settings
          </MenuItem>,
          enableColumnPinning && column.getCanPin() ? (
            <MenuSeparator key="col-action-sep-03" />
          ) : undefined,
        ]
      : []),
    ...(enableColumnPinning && column.getCanPin()
      ? [
          <MenuItem
            key="col-action-pin-left"
            className="ds-table-column-actions-menu-item"
            iconName="thumbstack"
            isDisabled={column.getIsPinned() === 'left'}
            onClick={() => handlePinColumn('left')}
          >
            Pin column
          </MenuItem>,
          // <MenuItem
          //   className="ds-table-column-actions-menu-item"
          //   key="col-action-pin-right"
          //   isDisabled={column.getIsPinned() === 'right'}
          //   onClick={() => handlePinColumn('right')}
          // >
          //   📌 Pin column to right
          // </MenuItem>,
          <MenuItem
            key="col-action-pin-reset"
            className="ds-table-column-actions-menu-item"
            iconName="times"
            isDisabled={!column.getIsPinned()}
            onClick={() => handlePinColumn(false)}
          >
            Unpin column
          </MenuItem>,
          enableColumnResizing && column.getCanResize() ? (
            <MenuSeparator key="col-action-sep-04" />
          ) : undefined,
        ]
      : []),
    ...(enableColumnResizing && column.getCanResize()
      ? [
          <MenuItem
            key="col-action-size-reset"
            className="ds-table-column-actions-menu-item"
            iconName="times"
            isDisabled={!columnSizing[column.id]}
            onClick={() => handleResetColumnSize()}
          >
            Reset column size
          </MenuItem>,
        ]
      : []),
  ].filter(Boolean);

  return (
    <DropdownMenu.Portal>
      <MenuContent
        align="start"
        className="ds-table-column-actions-menu-content"
        collisionPadding={10}
      >
        {columnActionsMenu}
      </MenuContent>
    </DropdownMenu.Portal>
  );
};
export default ColumnActionsMenu;
