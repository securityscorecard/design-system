import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';

import { ColorTypes } from '../../../../theme/colors.enums';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { pxToRem } from '../../../../utils/helpers';
import { FlexContainer } from '../../../FlexContainer';
import { Button } from '../../../Button';
import { ButtonVariants } from '../../../Button/Button.enums';
import { Icon } from '../../../Icon';
import {
  AbsoluteLinkActionKind,
  ActionPropType,
  ActionWithSubactions,
  RelativeLinkActionKind,
} from '../../types/Action.types';
import { Dropdown } from '../../Dropdown';
import { BatchActionsProps } from './BatchActions.types';
import { DatatableStore } from '../../Datatable.store';

const BatchActionButton = styled(Button).attrs((props) => ({
  variant: ButtonVariants.text,
  ...props,
}))`
  padding: ${pxToRem(9.5, 16)};
  line-height: ${pxToRem(13)};
  height: ${pxToRem(32)};
`;

const BatchActions: React.FC<BatchActionsProps> = ({ actions }) => {
  const { selectedIds, hasExclusiveSelection } = DatatableStore.useState(
    (s) => ({
      selectedIds: s.selectedIds,
      hasExclusiveSelection: s.hasExclusiveSelection,
    }),
  );

  const handleOnActionClick = useCallback(
    (onClick) => {
      onClick(selectedIds, hasExclusiveSelection);
    },
    [selectedIds, hasExclusiveSelection],
  );

  return (
    <FlexContainer>
      {actions.map((action) => {
        if (isNotUndefined((action as ActionWithSubactions).subActions)) {
          const subActions = map((subAction) => ({
            ...subAction,
            onClick: () => handleOnActionClick(subAction.onClick),
          }))((action as ActionWithSubactions).subActions);

          return (
            <Dropdown key={action.name} actions={subActions}>
              <BatchActionButton name={action.name} onClick={action.onClick}>
                {action.label}{' '}
                <Icon
                  color={ColorTypes.graphite2B}
                  margin={{ left: 0.25 }}
                  name={SSCIconNames.caretDown}
                />
              </BatchActionButton>
            </Dropdown>
          );
        }

        return (
          <BatchActionButton
            key={action.name}
            href={(action as AbsoluteLinkActionKind).href}
            name={action.name}
            to={(action as RelativeLinkActionKind).to}
            onClick={() => handleOnActionClick(action.onClick)}
          >
            {action.label}
          </BatchActionButton>
        );
      })}
    </FlexContainer>
  );
};

BatchActions.propTypes = {
  actions: PropTypes.arrayOf(ActionPropType).isRequired,
};

export default BatchActions;
