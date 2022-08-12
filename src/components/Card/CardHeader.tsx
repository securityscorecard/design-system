import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { any } from 'ramda';
import { isNotNil, isNotUndefined } from 'ramda-adjunct';

import { ActionKindsPropType } from '../../types/action.types';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { SpaceSizes } from '../../theme';
import { getColor, getRadii, getSpace } from '../../utils';
import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { Inline, Padbox, Stack } from '../layout';
import { Heading, Text } from '../typographyLegacy';
import { Icon } from '../Icon';
import { CardHeaderProps } from './Card.types';
import { CardContainer } from './Card';
import { Tooltip } from '../Tooltip';

export const CardIconButton = styled.button<{
  as?: string;
  $isActive?: boolean;
}>`
  background-color: ${({ $isActive }) =>
    $isActive ? getColor('primary.50') : 'transparent'};
  border: none;
  box-sizing: content-box;
  color: ${getColor('neutral.800')};
  display: flex;
  border-radius: ${getRadii('default')};
  padding: ${getSpace(SpaceSizes.sm)};
  ${(props) =>
    props.as !== 'div' &&
    css`
      cursor: pointer;
      &:hover,
      &:focus-visible {
        background-color: ${getColor('primary.50')};
      }
      &:focus {
        outline: none;
      }
    `}
`;
export const CardIconWrapper = styled(Padbox)`
  display: flex;
`;

/* stylelint-disable */
const LineTruncation = css<{ numberOfLines: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.numberOfLines || 'unset'};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
/* stylelint-enable */

const TitleArea = styled.div`
  padding-top: ${getSpace(SpaceSizes.xs)};
`;
const Title = styled(Heading).attrs({
  size: 'h4',
})`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 2px;
  ${LineTruncation}
`;

const Subtitle = styled(Text).attrs({
  size: 'md',
  variant: 'secondary',
})`
  ${LineTruncation}
`;
const ButtonsArea = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: calc(${getSpace(SpaceSizes.sm)} * -1) !important;
`;
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      actions,
      actionsButtonLabel = 'Actions menu',
      title,
      subtitle,
      leftAdornment,
      onHelpClick,
      helpTooltip,
      maxTitleLinesCount,
      maxSubtitleLinesCount,
    },
    ref,
  ) => {
    const hasHelp = any(isNotUndefined, [onHelpClick, helpTooltip]);

    return (
      <CardContainer
        horizontalPadding={SpaceSizes.mdPlus}
        verticalPadding={SpaceSizes.md}
      >
        <Inline ref={ref} gap={SpaceSizes.sm} stretch={leftAdornment ? 2 : 1}>
          {isNotNil(leftAdornment) && <div>{leftAdornment}</div>}
          <TitleArea>
            <Stack gap={SpaceSizes.xs}>
              <Title numberOfLines={maxTitleLinesCount}>{title}</Title>
              <Subtitle numberOfLines={maxSubtitleLinesCount}>
                {subtitle}
              </Subtitle>
            </Stack>
          </TitleArea>
          <ButtonsArea>
            {hasHelp && (
              <Tooltip popup={helpTooltip}>
                <CardIconButton
                  as={isNotUndefined(onHelpClick) ? 'button' : 'div'}
                  onClick={onHelpClick}
                >
                  <Icon color="neutral.800" name="question-circle" />
                </CardIconButton>
              </Tooltip>
            )}
            {isNotUndefined(actions) && (
              <DropdownMenu actions={actions} placement="bottom-end">
                {(isActive) => (
                  <CardIconButton
                    $isActive={isActive}
                    aria-label={actionsButtonLabel}
                    title={actionsButtonLabel}
                  >
                    <Icon
                      name={SSCIconNames.ellipsisV}
                      rotation={90}
                      style={{ width: '1em' }}
                    />
                  </CardIconButton>
                )}
              </DropdownMenu>
            )}
          </ButtonsArea>
        </Inline>
      </CardContainer>
    );
  },
);

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  actions: PropTypes.arrayOf(ActionKindsPropType),
  actionsButtonLabel: PropTypes.string,
  leftAdornment: PropTypes.node,
  maxTitleLinesCount: PropTypes.number,
  maxSubtitleLinesCount: PropTypes.number,
  helpTooltip: PropTypes.node,
  onHelpClick: PropTypes.func,
};

export default CardHeader;
