import { useCallback } from 'react';
import styled from 'styled-components';
import { map } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';

import { SpaceSizes } from '../../../../theme';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { pxToRem } from '../../../../utils';
import { Inline } from '../../../layout';
import { BaseButton } from '../../../_internal/BaseButton';
import { ButtonVariants } from '../../../Button/Button.enums';
import { Icon } from '../../../Icon';
import {
  AbsoluteLinkActionKind,
  ActionWithSubactions,
  RelativeLinkActionKind,
} from '../../../../types/action.types';
import { DropdownMenu } from '../../../_internal/BaseDropdownMenu';
import { BatchActionsProps } from './BatchActions.types';
import { DatatableStore } from '../../Datatable.store';
import { BatchActionArgs } from '../../Datatable.types';
import { Tooltip } from '../../../Tooltip';

const BatchActionButton = styled(BaseButton)`
  padding: ${pxToRem(9.5, 16)};
  line-height: ${pxToRem(13)};
  height: 2.25rem;
`;

const BatchActions = ({ actions }: BatchActionsProps) => {
  const { selectedIds, hasExclusiveSelection } = DatatableStore.useState(
    (s) => ({
      selectedIds: s.selectedIds,
      hasExclusiveSelection: s.hasExclusiveSelection,
    }),
  );

  const handleResetSelection = () => {
    DatatableStore.update((s) => {
      s.shouldResetSelectedRows = true;
    });
  };

  const handleOnActionClick = useCallback(
    (onClick) => {
      onClick(selectedIds, hasExclusiveSelection, handleResetSelection);
    },
    [selectedIds, hasExclusiveSelection],
  );

  return (
    <Inline>
      {actions.map((action) => {
        let element;
        if (
          isNotUndefined(
            (action as ActionWithSubactions<BatchActionArgs>).subActions,
          )
        ) {
          const subActions = map(
            (subAction) => ({
              ...subAction,
              onClick: () => handleOnActionClick(subAction.onClick),
            }),
            (action as ActionWithSubactions<BatchActionArgs>).subActions,
          );

          element = (
            <DropdownMenu
              key={action.name}
              actions={subActions}
              paneWidth={140}
              placement="bottom-end"
            >
              <BatchActionButton
                name={action.name}
                variant={ButtonVariants.text}
                onClick={action.onClick}
              >
                <Inline align="center" gap={SpaceSizes.xs}>
                  <span>{action.label}</span>
                  <Icon margin={{ left: 0.25 }} name={SSCIconNames.angleDown} />
                </Inline>
              </BatchActionButton>
            </DropdownMenu>
          );
        } else {
          element = (
            <BatchActionButton
              key={action.name}
              href={(action as AbsoluteLinkActionKind<BatchActionArgs>).href}
              name={action.name}
              to={(action as RelativeLinkActionKind<BatchActionArgs>).to}
              variant={ButtonVariants.text}
              onClick={() => handleOnActionClick(action.onClick)}
            >
              {action.label}
            </BatchActionButton>
          );
        }

        return (
          <Tooltip key={action.name} popup={action.tooltip}>
            {element}
          </Tooltip>
        );
      })}
    </Inline>
  );
};

export default BatchActions;
