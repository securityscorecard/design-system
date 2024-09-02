import styled, { css } from 'styled-components';

import { SpaceSizes } from '../../theme';
import { Inline } from '../layout';
import { PillWrapperProps, StyledPillWrapperProps } from './Pill.types';

const StyledPillWrapper = styled.div<StyledPillWrapperProps>`
  display: inline-block;
  min-width: 0;
  border-radius: var(--sscds-radii-rounded);
  padding-inline: var(--sscds-pill-padding-inline, var(--sscds-space-2x));
  background-color: var(
    --sscds-pill-color-background,
    var(--sscds-color-background-pill-gray-default)
  );
  width: fit-content;

  ${({ $isClickable }) =>
    $isClickable &&
    css`
      cursor: pointer;
      box-shadow: inset 0 0 0 1px
        var(
          --sscds-pill-color-border,
          var(--sscds-color-border-pill-gray-default)
        );
      &:hover {
        background-color: var(
          --sscds-pill-color-background-hover,
          var(--sscds-color-background-pill-gray-hover)
        );
        box-shadow: inset 0 0 0 1px
          var(
            --sscds-pill-color-border-hover,
            var(--sscds-color-border-pill-gray-hover)
          );
      }
    `};
`;

const PillWrapper = ({ children, isClickable, ...props }: PillWrapperProps) => (
  <StyledPillWrapper $isClickable={isClickable} {...props}>
    <Inline align="center" gap={SpaceSizes.xs}>
      {children}
    </Inline>
  </StyledPillWrapper>
);

export default PillWrapper;
