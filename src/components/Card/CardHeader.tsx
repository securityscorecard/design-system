import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { ActionKindsPropType } from '../../types/action.types';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { SpaceSizes } from '../../theme';
import { getColor, getRadii } from '../../utils';
import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { Inline, Padbox, Stack } from '../layout';
import { Heading, Text } from '../typographyLegacy';
import { Icon } from '../Icon';
import { CardHeaderProps } from './Card.types';
import { CardContainer } from './Card';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';

export const IconAdornmentWrapper = styled(Padbox)`
  border-radius: ${getRadii('default')};
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  box-sizing: content-box;
  color: ${getColor('neutral.800')};
  display: flex;

  &:hover
    ${/* sc-selector */ IconAdornmentWrapper},
    &:focus
    ${/* sc-selector */ IconAdornmentWrapper} {
    background-color: ${getColor('primary.50')};
  }
`;

/* stylelint-disable */
const LineTruncation = css<{ numberOfLines: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.numberOfLines || 'unset'};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
/* stylelint-enable */

const Title = styled(Heading).attrs({
  size: 'h4',
})`
  margin-top: 0px;
  margin-bottom: 0px;
  ${LineTruncation}
`;

const Subtitle = styled(Text).attrs({
  size: 'md',
  variant: 'secondary',
})`
  ${LineTruncation}
`;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      actions,
      actionsButtonLabel = 'Actions menu',
      title,
      subtitle,
      leftAdornment = null,
      onHelpClick,
      maxTitleLinesCount,
      maxSubtitleLinesCount,
    },
    ref,
  ) => (
    <CardContainer
      horizontalPadding={SpaceSizes.mdPlus}
      verticalPadding={SpaceSizes.md}
    >
      <Inline ref={ref} gap={SpaceSizes.sm} stretch={leftAdornment ? 2 : 1}>
        {leftAdornment}
        <Stack gap={SpaceSizes.xs}>
          <Title numberOfLines={maxTitleLinesCount}>{title}</Title>
          <Subtitle numberOfLines={maxSubtitleLinesCount}>{subtitle}</Subtitle>
        </Stack>
        {onHelpClick && (
          <ActionButton onClick={onHelpClick}>
            <IconAdornmentWrapper paddingSize={SpaceSizes.sm}>
              <Icon color="neutral.800" name="question-circle" />
            </IconAdornmentWrapper>
          </ActionButton>
        )}
        {isNotUndefined(actions) && (
          <DropdownMenu actions={actions} placement="bottom-end">
            <ActionButton
              aria-label={actionsButtonLabel}
              title={actionsButtonLabel}
            >
              <IconAdornmentWrapper
                paddingSize={SpaceSizes.md}
                paddingType={PaddingTypes.squish}
              >
                <Icon name={SSCIconNames.ellipsisV} rotation={90} />
              </IconAdornmentWrapper>
            </ActionButton>
          </DropdownMenu>
        )}
      </Inline>
    </CardContainer>
  ),
);

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  actions: PropTypes.arrayOf(ActionKindsPropType),
  actionsButtonLabel: PropTypes.string,
  leftAdornment: PropTypes.node,
  maxTitleLinesCount: PropTypes.number,
  maxSubtitleLinesCount: PropTypes.number,
  onHelpClick: PropTypes.func,
};

export default CardHeader;
