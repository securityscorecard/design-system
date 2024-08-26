import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DatatableInstance, DatatableRow } from '../Datatable.types';
import RowActionsMenu from '../menus/RowActionsMenu';
import IconButton from '../../ButtonV2/IconButton';

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
            size="sm"
            variant="ghost"
          />
        </DropdownMenu.Trigger>
        <RowActionsMenu row={row} rowActions={rowActions} table={table} />
      </DropdownMenu.Root>
    );
  }

  if (rowActions.length === 1) {
    const { label, iconName, iconType, onClick, isDisabled, isDestructive } =
      rowActions[0];

    const resolvedLabel =
      typeof label === 'function' ? label({ row, table }) : label;
    const resolvedIconName =
      typeof iconName === 'function' ? iconName({ row, table }) : iconName;
    const resolvedIconType =
      typeof iconType === 'function' ? iconType({ row, table }) : iconType;
    const resolvedIsDisabled =
      typeof isDisabled === 'function'
        ? isDisabled({ row, table })
        : isDisabled;

    return (
      <IconButton
        className="ds-table-header-cell-row-actions-button"
        iconName={resolvedIconName}
        iconType={resolvedIconType}
        isDisabled={resolvedIsDisabled}
        label={resolvedLabel}
        size="sm"
        variant={isDestructive ? 'danger-ghost' : 'ghost'}
        onClick={(e) => {
          e.stopPropagation();
          onClick({ row, table })(e as unknown as MouseEvent);
        }}
      />
    );
  }

  return null;
};

export default RowActionsButton;
