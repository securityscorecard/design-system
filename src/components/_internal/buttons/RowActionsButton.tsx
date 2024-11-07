import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { Row, TableState } from '@tanstack/react-table';

import IconButton from '../../ButtonV2/IconButton';
import { useSafeTranslation } from '../../../hooks/useSafeTranslation';
import {
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '../BaseDropdownMenu/menuElements';
import type { IconNames, RegularIconTypes } from '../../Icon';

export type Instance<Data> = {
  getState: () => Pick<TableState, 'pagination' | 'rowSelection'> & {
    isFullscreenMode?: boolean;
  };
  options: {
    rowActions?: RowAction<Data>[];
  };
};
type RowActionCallbackUnion<Data, Type> =
  | Type
  | ((props: { row: Row<Data>; table: Instance<Data> }) => Type);

export type RowAction<Data> = null | {
  label: RowActionCallbackUnion<Data, string>;
  iconName: RowActionCallbackUnion<Data, IconNames>;
  iconType?: RowActionCallbackUnion<Data, RegularIconTypes>;
  onClick(props: {
    row: Row<Data>;
    table: Instance<Data>;
  }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<Data, boolean>;
  isDestructive?: boolean;
};

function RowActionsMenu<Data>({
  row,
  instance,
  rowActions,
}: {
  row?: Row<Data>;
  instance: Instance<Data>;
  rowActions: RowAction<Data>[];
}) {
  const { getState } = instance;
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
            typeof label === 'function'
              ? label({ row, table: instance })
              : label;
          const resolvedIconName =
            typeof iconName === 'function'
              ? iconName({ row, table: instance })
              : iconName;
          const resolvedIconType =
            typeof iconType === 'function'
              ? iconType({ row, table: instance })
              : iconType;
          const resolvedIsDisabled =
            typeof isDisabled === 'function'
              ? isDisabled({ row, table: instance })
              : isDisabled;

          return (
            <MenuItem
              key={`row-actions-${resolvedLabel}`}
              iconName={resolvedIconName}
              iconType={resolvedIconType}
              isDestructive={isDestructive}
              isDisabled={resolvedIsDisabled}
              onClick={onClick({ row, table: instance })}
            >
              {resolvedLabel}
            </MenuItem>
          );
        })}
      </MenuContent>
    </DropdownMenu.Portal>
  );
}
RowActionsMenu.displayName = 'RowActionsMenu';

function RowActionsButton<Data>({
  row,
  instance,
}: {
  row?: Row<Data>;
  instance: Instance<Data>;
}) {
  const {
    options: { rowActions = [] },
  } = instance;
  const { t } = useSafeTranslation();
  const filteredRowActions = rowActions.filter(Boolean);

  if (rowActions.length === 0) {
    return null;
  }

  if (filteredRowActions.length > 1) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <IconButton
            iconName="ellipsis-h"
            label={t('sscds|datatable.rowActions.trigger')}
            size="sm"
            variant="ghost"
          />
        </DropdownMenu.Trigger>
        <RowActionsMenu instance={instance} row={row} rowActions={rowActions} />
      </DropdownMenu.Root>
    );
  }

  const { label, iconName, iconType, onClick, isDisabled, isDestructive } =
    filteredRowActions[0];

  const resolvedLabel =
    typeof label === 'function' ? label({ row, table: instance }) : label;
  const resolvedIconName =
    typeof iconName === 'function'
      ? iconName({ row, table: instance })
      : iconName;
  const resolvedIconType =
    typeof iconType === 'function'
      ? iconType({ row, table: instance })
      : iconType;
  const resolvedIsDisabled =
    typeof isDisabled === 'function'
      ? isDisabled({ row, table: instance })
      : isDisabled;

  return (
    <IconButton
      iconName={resolvedIconName}
      iconType={resolvedIconType}
      isDisabled={resolvedIsDisabled}
      label={resolvedLabel}
      size="sm"
      variant={isDestructive ? 'danger-ghost' : 'ghost'}
      onClick={(e) => {
        e.stopPropagation();
        onClick({ row, table: instance })(e as unknown as MouseEvent);
      }}
    />
  );
}

RowActionsButton.displayName = 'RowActionsButton';

export default RowActionsButton;
