import React from 'react';

import { ControlledDropdown } from '../../Dropdown';
import { DatatableHeader, DatatableInstance } from '../Datatable.types';

const MenuItem = ({ children, onClick, isDisabled }) => (
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
    options: { enableSorting, enableSortingRemoval },
  } = table;
  const { column } = header;

  const handleSortAsc = () => {
    column.toggleSorting(false);
    setButtonRef(null);
  };
  const handleSortDesc = () => {
    column.toggleSorting(true);
    setButtonRef(null);
  };
  const handleClearSort = () => {
    column.clearSorting();
    setButtonRef(null);
  };

  const columnActionsMenu = [
    ...(enableSorting && column.getCanSort()
      ? [
          <MenuItem
            key={0}
            isDisabled={column.getIsSorted() === 'asc'}
            onClick={handleSortAsc}
          >
            🔼 Ascending sort
          </MenuItem>,
          <MenuItem
            key={1}
            isDisabled={column.getIsSorted() === 'desc'}
            onClick={handleSortDesc}
          >
            🔽 Descending sort
          </MenuItem>,
          enableSortingRemoval !== false && (
            <MenuItem
              key={2}
              isDisabled={!column.getIsSorted()}
              onClick={handleClearSort}
            >
              ❌ Clear sort
            </MenuItem>
          ),
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
