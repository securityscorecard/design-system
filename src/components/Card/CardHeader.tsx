import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { ActionKindsPropType } from '../../types/action.types';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { SpaceSizes } from '../../theme';
import { getColor, getRadii, getSpace } from '../../utils';
import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { Inline, InlineEnums, Stack } from '../layout';
import { Heading, Text } from '../typographyLegacy';
import { Icon } from '../Icon';
import { CardHeaderProps } from './Card.types';

const ActionsWrapper = styled.div`
  && {
    margin-top: calc(${getSpace(SpaceSizes.xs)} * -1);
    margin-right: calc(${getSpace(SpaceSizes.xs)} * -1);
  }
`;

const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${getRadii('default')};
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  box-sizing: content-box;
  font-size: 1rem;
  padding: ${getSpace(SpaceSizes.xs)};
  color: ${getColor('neutral.800')};

  &:hover
    ${/* sc-selector */ IconWrapper},
    &:focus
    ${/* sc-selector */ IconWrapper} {
    background-color: ${getColor('primary.50')};
  }
`;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ actions, actionsButtonLabel = 'Actions menu', title, subtitle }, ref) => (
    <Inline
      ref={ref}
      gap={SpaceSizes.md}
      stretch={InlineEnums.StretchEnum.start}
    >
      <Stack gap={SpaceSizes.xs}>
        <Heading size="h4">{title}</Heading>
        <Text variant="secondary">{subtitle}</Text>
      </Stack>
      {isNotUndefined(actions) && (
        <ActionsWrapper>
          <DropdownMenu actions={actions} placement="bottom-end">
            <ActionButton
              aria-label={actionsButtonLabel}
              title={actionsButtonLabel}
            >
              <IconWrapper>
                <Icon name={SSCIconNames.ellipsisV} />
              </IconWrapper>
            </ActionButton>
          </DropdownMenu>
        </ActionsWrapper>
      )}
    </Inline>
  ),
);

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  actions: PropTypes.arrayOf(ActionKindsPropType),
  actionsButtonLabel: PropTypes.string,
};

export default CardHeader;
