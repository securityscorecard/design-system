import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '../../_internal/BaseDropdownMenu/menuElements';
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
          const {
            iconName,
            iconType,
            label,
            onClick,
            isDisabled,
            isDestructive,
          } = action;

          const resolvedLabel =
            typeof label === 'function' ? label({ row, table }) : label;
          const resolvedIconName =
            typeof iconName === 'function'
              ? iconName({ row, table })
              : iconName;
          const resolvedIconType =
            typeof iconType === 'function'
              ? iconType({ row, table })
              : iconType;
          const resolvedIsDisabled =
            typeof isDisabled === 'function'
              ? isDisabled({ row, table })
              : isDisabled;

          return (
            <MenuItem
              key={`row-actions-${resolvedLabel}`}
              className="ds-table-row-actions-menu-item"
              iconName={resolvedIconName}
              iconType={resolvedIconType}
              isDestructive={isDestructive}
              isDisabled={resolvedIsDisabled}
              onClick={onClick({ row, table })}
            >
              {resolvedLabel}
            </MenuItem>
          );
        })}
      </MenuContent>
    </DropdownMenu.Portal>
  );
};

export default RowActionsMenu;
