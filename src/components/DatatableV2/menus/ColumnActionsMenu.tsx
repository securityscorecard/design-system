import type { ColumnPinningPosition } from '@tanstack/react-table';
import type { DatatableHeader, DatatableInstance } from '../Datatable.types';
import type { SSCIcons } from '../../Icon';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

import { getRadii, getToken } from '../../../utils';
import { Inline, Padbox } from '../../layout';
import { Icon } from '../../Icon';
import { Text } from '../../typographyLegacy';

const MenuContent = styled(DropdownMenu.Content)`
  border: 1px solid rgba(0 0 0/15%);
  border-radius: ${getRadii('default')};
  background: white;
  padding: 0.5rem 0;
`;

const MenuItemRoot = styled(DropdownMenu.Item)`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:not(:disabled):hover {
    background: ${getToken('color-action-background-primary-focus')};
    outline: none;
  }
`;
const MenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: rgba(0 0 0/15%);
  margin: 0.5rem 0;
`;

const MenuItem = ({
  children,
  onClick,
  isDisabled = false,
  icon,
}: {
  children: string;
  icon: SSCIcons;
  onClick: () => void;
  isDisabled?: boolean;
}) => (
  <MenuItemRoot
    className="ds-table-column-actions-menu-item"
    disabled={isDisabled}
    onSelect={onClick}
  >
    <Padbox paddingSize="md" paddingType="squish">
      <Inline align="center" gap="md">
        <Icon color="neutral.700" name={icon} hasFixedWidth />
        <Text>{children}</Text>
      </Inline>
    </Padbox>
  </MenuItemRoot>
);

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
            icon="sort-up"
            isDisabled={column.getIsSorted() === 'asc'}
            onClick={() => handleSort(false)}
          >
            Ascending sort
          </MenuItem>,
          <MenuItem
            key="col-action-sort-desc"
            icon="sort-down"
            isDisabled={column.getIsSorted() === 'desc'}
            onClick={() => handleSort(true)}
          >
            Descending sort
          </MenuItem>,
          enableSortingRemoval !== false && (
            <MenuItem
              key="col-action-sort-reset"
              icon="times"
              isDisabled={!column.getIsSorted()}
              onClick={handleClearSort}
            >
              Clear sort
            </MenuItem>
          ),
          enableHiding && column.getCanHide() ? (
            <MenuSeparator key="sep-01" />
          ) : undefined,
        ]
      : []),
    ...(enableHiding && column.getCanHide()
      ? [
          <MenuItem
            key="col-action-hide-col"
            icon="eye-slash"
            onClick={handleHideColumn}
          >
            Hide column
          </MenuItem>,
          !enableHiding && !enableColumnPinning && !enableColumnOrdering ? (
            <MenuSeparator key="sep-02" />
          ) : undefined,
        ]
      : []),
    ...(enableHiding || enableColumnPinning || enableColumnOrdering
      ? [
          <MenuItem
            key="col-action-settings"
            icon="columns-3"
            onClick={handleColumnSettings}
          >
            Column settings
          </MenuItem>,
          enableColumnPinning && column.getCanPin() ? (
            <MenuSeparator key="sep-03" />
          ) : undefined,
        ]
      : []),
    ...(enableColumnPinning && column.getCanPin()
      ? [
          <MenuItem
            key="col-action-pin-left"
            icon="thumbstack"
            isDisabled={column.getIsPinned() === 'left'}
            onClick={() => handlePinColumn('left')}
          >
            Pin column
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
            icon="times"
            isDisabled={!column.getIsPinned()}
            onClick={() => handlePinColumn(false)}
          >
            Unpin column
          </MenuItem>,
          enableColumnResizing && column.getCanResize() ? (
            <MenuSeparator key="sep-04" />
          ) : undefined,
        ]
      : []),
    ...(enableColumnResizing && column.getCanResize()
      ? [
          <MenuItem
            key="col-action-size-reset"
            icon="times"
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
