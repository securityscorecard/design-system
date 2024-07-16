import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import BaseHandle from '../../_internal/BaseHandle/BaseHandle';
import {
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '../../_internal/BaseDropdownMenu/menuElements';
import { Inline } from '../../layout';
import { RowAction, TreeViewRow } from '../TreeView.types';

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
            <BaseHandle
              key={`row-actions-${resolvedLabel}`}
              iconProps={{
                name: resolvedIconName,
                type: resolvedIconType,
              }}
              isDestructive={isDestructive}
              isDisabled={resolvedIsDisabled}
              onClick={(e) => {
                e.stopPropagation();
                onClick({ row })(e as unknown as MouseEvent);
              }}
            >
              {resolvedLabel}
            </BaseHandle>
          );
        })}
      </Inline>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <BaseHandle iconProps={{ name: 'ellipsis-v' }} label="Row Actions" />
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
