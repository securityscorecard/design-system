import { ColumnPinningPosition } from '@tanstack/react-table';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DatatableHeader, DatatableInstance } from '../Datatable.types';
import {
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '../../_internal/BaseDropdownMenu/menuElements';
import { getHidableColumns } from '../columns.utils';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';

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
  } = table;
  const { column } = header;
  const { columnSizing, isFullscreenMode } = getState();
  const { t } = useSafeTranslation();

  const hidableColumns = getHidableColumns(table);

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
            {t('sscds|datatable.columnActions.sort.ascending')}
          </MenuItem>,
          <MenuItem
            key="col-action-sort-desc"
            className="ds-table-column-actions-menu-item"
            iconName="sort-down"
            isDisabled={column.getIsSorted() === 'desc'}
            onClick={() => handleSort(true)}
          >
            {t('sscds|datatable.columnActions.sort.descending')}
          </MenuItem>,
          enableSortingRemoval !== false && (
            <MenuItem
              key="col-action-sort-reset"
              className="ds-table-column-actions-menu-item"
              iconName="times"
              isDisabled={!column.getIsSorted()}
              onClick={handleClearSort}
            >
              {t('sscds|datatable.columnActions.sort.clear')}
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
            isDisabled={hidableColumns.length === 1}
            onClick={handleHideColumn}
          >
            {t('sscds|datatable.columnActions.hideColumn')}
          </MenuItem>,
          !enableHiding && !enableColumnPinning && !enableColumnOrdering ? (
            <MenuSeparator key="col-action-sep-02" />
          ) : undefined,
        ]
      : []),
    ...(enableColumnPinning && column.getCanPin()
      ? [
          <MenuItem
            key="col-action-pin-left"
            className="ds-table-column-actions-menu-item"
            iconName="thumbtack"
            isDisabled={column.getIsPinned() === 'left'}
            onClick={() => handlePinColumn('left')}
          >
            {t('sscds|datatable.columnActions.pinning.pin')}
          </MenuItem>,
          <MenuItem
            key="col-action-pin-reset"
            className="ds-table-column-actions-menu-item"
            iconName="times"
            isDisabled={!column.getIsPinned()}
            onClick={() => handlePinColumn(false)}
          >
            {t('sscds|datatable.columnActions.pinning.unpin')}
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
            {t('sscds|datatable.columnActions.resetSize')}
          </MenuItem>,
        ]
      : []),
  ].filter(Boolean);

  return (
    <DropdownMenu.Portal>
      <MenuContent
        $isFullscreen={isFullscreenMode}
        align="start"
        className="ds-table-column-actions-menu-content"
        collisionPadding={10}
        sideOffset={5}
      >
        {columnActionsMenu}
      </MenuContent>
    </DropdownMenu.Portal>
  );
};
export default ColumnActionsMenu;
