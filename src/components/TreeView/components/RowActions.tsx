import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '../../_internal/BaseDropdownMenu/menuElements';
import { Inline } from '../../layout';
import { RowAction, TreeViewRow } from '../TreeView.types';
import IconButton from '../../ButtonV2/IconButton';

function RowActions<D>({
  rowActions,
  row,
}: {
  rowActions: RowAction<D>[];
  row: TreeViewRow<D>;
}) {
  if (rowActions.length <= 2) {
    return (
      <Inline>
        {rowActions.map((action) => {
          if (action === null) {
            return null;
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
            typeof label === 'function' ? label({ row }) : label;
          const resolvedIconName =
            typeof iconName === 'function' ? iconName({ row }) : iconName;
          const resolvedIconType =
            typeof iconType === 'function' ? iconType({ row }) : iconType;
          const resolvedIsDisabled =
            typeof isDisabled === 'function' ? isDisabled({ row }) : isDisabled;

          return (
            <IconButton
              key={`row-actions-${resolvedLabel}`}
              iconName={resolvedIconName}
              iconType={resolvedIconType}
              isDisabled={resolvedIsDisabled}
              label={resolvedLabel}
              size="sm"
              variant={isDestructive ? 'danger-ghost' : 'ghost'}
              onClick={(e) => {
                e.stopPropagation();
                onClick({ row })(e as unknown as MouseEvent);
              }}
            >
              {resolvedLabel}
            </IconButton>
          );
        })}
      </Inline>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton
          iconName="ellipsis-v"
          label="Row Actions"
          size="sm"
          variant="ghost"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <MenuContent align="end" collisionPadding={10} sideOffset={5}>
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
              typeof label === 'function' ? label({ row }) : label;
            const resolvedIconName =
              typeof iconName === 'function' ? iconName({ row }) : iconName;
            const resolvedIconType =
              typeof iconType === 'function' ? iconType({ row }) : iconType;
            const resolvedIsDisabled =
              typeof isDisabled === 'function'
                ? isDisabled({ row })
                : isDisabled;

            return (
              <MenuItem
                key={`row-actions-${resolvedLabel}`}
                iconName={resolvedIconName}
                iconType={resolvedIconType}
                isDestructive={isDestructive}
                isDisabled={resolvedIsDisabled}
                onClick={onClick({ row })}
              >
                {resolvedLabel}
              </MenuItem>
            );
          })}
        </MenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default RowActions;
