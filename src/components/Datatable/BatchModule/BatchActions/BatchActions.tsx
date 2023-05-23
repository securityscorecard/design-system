import type {
  AbsoluteLinkActionKind,
  ActionKinds,
  ActionWithSubactions,
  HandlerActionKind,
  RelativeLinkActionKind,
} from '../../../../types/action.types';
import type { BatchActionsProps } from './BatchActions.types';
import type { BatchActionArgs } from '../../Datatable.types';

import { useCallback } from 'react';
import styled from 'styled-components';
import { map, pipe } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';

import { SpaceSizes } from '../../../../theme';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { getFormStyle, pxToRem } from '../../../../utils';
import { Inline } from '../../../layout';
import { BaseButton } from '../../../_internal/BaseButton';
import { ButtonVariants } from '../../../Button/Button.enums';
import { Icon } from '../../../Icon';
import { DropdownMenu } from '../../../_internal/BaseDropdownMenu';
import { DatatableStore } from '../../Datatable.store';
import { Tooltip } from '../../../Tooltip';

const BatchActionButton = styled(BaseButton)`
  padding: ${pxToRem(9.5, 16)};
  line-height: ${pxToRem(13)};
  height: ${pipe(getFormStyle('fieldHeight'), pxToRem)};
`;

const renderSubactions = ({
  action,
  handleSubactionClick,
}: {
  action: ActionWithSubactions<BatchActionArgs>;
  handleSubactionClick: (
    onClick: HandlerActionKind<BatchActionArgs>['onClick'],
  ) => void;
}) => {
  const augmentedSubActions = map(
    (subAction) => ({
      ...subAction,
      onClick: () => handleSubactionClick(subAction.onClick),
    }),
    action.subActions,
  );

  return (
    <DropdownMenu
      key={action.name}
      actions={augmentedSubActions}
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
};
const renderAction = ({
  handleActionClick,
  action,
}: {
  action: ActionKinds<BatchActionArgs>;
  handleActionClick: (
    onClick: HandlerActionKind<BatchActionArgs>['onClick'],
  ) => void;
}) => {
  const { name, label, to, href, onClick } = action;
  return (
    <BatchActionButton
      key={name}
      href={href as AbsoluteLinkActionKind<BatchActionArgs>['href']}
      name={name}
      to={to as RelativeLinkActionKind<BatchActionArgs>['to']}
      variant={ButtonVariants.text}
      onClick={() => handleActionClick(onClick)}
    >
      {label}
    </BatchActionButton>
  );
};

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
        const element = isNotUndefined(action.subActions)
          ? renderSubactions({
              action: action as ActionWithSubactions<BatchActionArgs>,
              handleSubactionClick: handleOnActionClick,
            })
          : renderAction({
              action: action as ActionKinds<BatchActionArgs>,
              handleActionClick: handleOnActionClick,
            });
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
