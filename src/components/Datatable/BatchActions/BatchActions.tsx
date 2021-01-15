import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { pxToRem } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { Button } from '../../Button';
import { ButtonVariants } from '../../Button/Button.enums';
import {
  AbsoluteLinkActionKind,
  ActionPropType,
  ActionWithSubactions,
  RelativeLinkActionKind,
} from '../types/Action.types';
import { BatchActionsProps } from './BatchActions.types';
import { Dropdown } from '../Dropdown';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../Icon/Icon.enums';
import { ColorTypes } from '../../../theme/colors.enums';

const BatchActionButton = styled(Button).attrs((props) => ({
  variant: ButtonVariants.text,
  ...props,
}))`
  padding: ${pxToRem(9.5, 16)};
  line-height: ${pxToRem(13)};
  height: ${pxToRem(32)};
`;

const BatchActions: React.FC<BatchActionsProps> = ({ actions }) => (
  <FlexContainer>
    {actions.map((action) => {
      if (isNotUndefined((action as ActionWithSubactions).subActions)) {
        return (
          <Dropdown
            key={action.name}
            actions={(action as ActionWithSubactions).subActions}
          >
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
          onClick={action.onClick}
        >
          {action.label}
        </BatchActionButton>
      );
    })}
  </FlexContainer>
);

BatchActions.propTypes = {
  actions: PropTypes.arrayOf(ActionPropType),
};

export default BatchActions;
