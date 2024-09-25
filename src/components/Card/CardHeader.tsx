import React from 'react';
import styled, { css } from 'styled-components';
import { any } from 'ramda';
import { isNotNil, isNotUndefined } from 'ramda-adjunct';

import { DropdownMenu } from '../_internal/BaseDropdownMenu';
import { Inline, Stack } from '../layout';
import { CardHeaderProps } from './Card.types';
import { CardContainer } from './Card';
import { Text } from '../Text';
import { Heading } from '../Heading';
import IconButton from '../ButtonV2/IconButton';
import { IconButtonProps } from '../ButtonV2/types';
import { HintTooltip } from '../HintTooltip';

export const CardIconButton = (
  props: Omit<IconButtonProps<'button'>, 'variant' | 'size'>,
) => <IconButton {...props} size="sm" variant="ghost" />;

/* stylelint-disable */
const LineTruncation = css<{ numberOfLines: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.numberOfLines || 'unset'};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
/* stylelint-enable */

const TitleArea = styled.div`
  padding-top: var(--sscds-space-1x);
`;
const Title = styled(Heading).attrs({
  size: 'h5',
})`
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
      leftAdornment,
      helpTooltip,
      maxTitleLinesCount,
      maxSubtitleLinesCount,
    }: CardHeaderProps,
    ref,
  ) => {
    const hasHelp = any(isNotUndefined, [helpTooltip]);

    return (
      <CardContainer $horizontalPadding="6x" $verticalPadding="4x">
        <Inline ref={ref} gap="sm" stretch={leftAdornment ? 2 : 1}>
          {isNotNil(leftAdornment) && <div>{leftAdornment}</div>}
          <TitleArea>
            <Stack gap="xs">
              <Title
                numberOfLines={maxTitleLinesCount}
                title={isNotUndefined(maxTitleLinesCount) ? title : undefined}
              >
                {title}
              </Title>
              <Subtitle
                numberOfLines={maxSubtitleLinesCount}
                title={
                  isNotUndefined(maxSubtitleLinesCount) ? subtitle : undefined
                }
              >
                {subtitle}
              </Subtitle>
            </Stack>
          </TitleArea>
          <Inline className="ds-cardheader-buttonarea">
            {hasHelp && (
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  display: 'grid',
                  placeContent: 'center',
                }}
              >
                <HintTooltip flow="block">{helpTooltip}</HintTooltip>
              </div>
            )}
            {isNotUndefined(actions) && (
              <DropdownMenu actions={actions} placement="bottom-end">
                <CardIconButton
                  data-interactive="true"
                  iconName="ellipsis-h"
                  label={actionsButtonLabel}
                  style={{
                    marginInlineEnd: 'var(--sscds-button-padding-compensation)',
                  }}
                />
              </DropdownMenu>
            )}
          </Inline>
        </Inline>
      </CardContainer>
    );
  },
);

export default CardHeader;
