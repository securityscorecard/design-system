import React from 'react';
import { ColumnPinningPosition } from '@tanstack/react-table';

import { ControlledDropdown } from '../../Dropdown';
import { DatatableHeader, DatatableInstance } from '../Datatable.types';

const MenuItem = ({ children, onClick, isDisabled = false }) => (
  <button
    disabled={isDisabled}
    style={{ display: 'block' }}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

const ColumnActionsMenu = <D,>({
  buttonRef,
  setButtonRef,
  header,
  table,
}: {
  buttonRef: HTMLButtonElement | null;
  setButtonRef: (anchorEl: HTMLButtonElement | null) => void;
  header: DatatableHeader<D>;
  table: DatatableInstance<D>;
}) => {
  const {
    getState,
    options: {
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
    setButtonRef(null);
  };
  const handleClearSort = () => {
    column.clearSorting();
    setButtonRef(null);
  };
  const handleHideColumn = () => {
    column.toggleVisibility(false);
    setButtonRef(null);
  };
  const handlePinColumn = (dir: ColumnPinningPosition) => {
    column.pin(dir);
    setButtonRef(null);
  };
  const handleResetColumnSize = () => {
    setColumnSizingInfo((old) => ({
      ...old,
      isResizingColumn: false,
    }));
    column.resetSize();
    setButtonRef(null);
  };
  const handleColumnSettings = () => {
    setShowColumnSettings((old) => !old);
    setButtonRef(null);
  };

  const columnActionsMenu = [
    ...(enableSorting && column.getCanSort()
      ? [
          <MenuItem
            key="col-action-sort-asc"
            isDisabled={column.getIsSorted() === 'asc'}
            onClick={() => handleSort(false)}
          >
            🔼 Ascending sort
          </MenuItem>,
          <MenuItem
            key="col-action-sort-desc"
            isDisabled={column.getIsSorted() === 'desc'}
            onClick={() => handleSort(true)}
          >
            🔽 Descending sort
          </MenuItem>,
          enableSortingRemoval !== false && (
            <MenuItem
              key="col-action-sort-reset"
              isDisabled={!column.getIsSorted()}
              onClick={handleClearSort}
            >
              ❌ Clear sort
            </MenuItem>
          ),
        ]
      : []),
    ...(enableHiding && column.getCanHide()
      ? [
          <MenuItem key="col-action-hide-col" onClick={handleHideColumn}>
            👀 Hide column
          </MenuItem>,
        ]
      : []),
    ...(enableColumnPinning && column.getCanPin()
      ? [
          <MenuItem
            key="col-action-pin-left"
            isDisabled={column.getIsPinned() === 'left'}
            onClick={() => handlePinColumn('left')}
          >
            📌 Pin column
          </MenuItem>,
          // <MenuItem
          //   key="col-action-pin-right"
          //   isDisabled={column.getIsPinned() === 'right'}
          //   onClick={() => handlePinColumn('right')}
          // >
          //   📌 Pin column to right
          // </MenuItem>,
          <MenuItem
            key="col-action-pin-reset"
            isDisabled={!column.getIsPinned()}
            onClick={() => handlePinColumn(false)}
          >
            ❌ Unpin column
          </MenuItem>,
        ]
      : []),
    ...(enableColumnResizing && column.getCanResize()
      ? [
          <MenuItem
            key="col-action-size-reset"
            isDisabled={!columnSizing[column.id]}
            onClick={() => handleResetColumnSize()}
          >
            ❌ Reset column size
          </MenuItem>,
        ]
      : []),
    ...(enableHiding || enableColumnPinning
      ? [
          <MenuItem key="col-action-settings" onClick={handleColumnSettings}>
            ⚙️ Column settings
          </MenuItem>,
        ]
      : []),
  ].filter(Boolean);

  return (
    <ControlledDropdown
      innerPaddingSize="sm"
      isOpen={buttonRef !== null}
      maxPaneWidth={200}
      triggerEl={buttonRef}
      onClickOut={() => {
        setButtonRef(null);
      }}
    >
      {columnActionsMenu}
    </ControlledDropdown>
  );
};
export default ColumnActionsMenu;
