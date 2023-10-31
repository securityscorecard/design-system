import type { PillWrapperProps, StyledPillWrapperProps } from './Pill.types';

import styled, { css } from 'styled-components';
import { forwardRef } from 'react';

import { SpaceSizes } from '../../theme';
import { getRadii, getSpace } from '../../utils';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { PillColors, PillColorsEnums } from './Pill.enums';

const StyledPillWrapper = styled(Padbox)<StyledPillWrapperProps>`
  display: inline-block;
  min-width: 0;
  border-radius: ${getRadii('round')};
  padding-right: ${getSpace('sm')};
  padding-left: ${getSpace('sm')};
  ${({ $color }) =>
    css`
      background-color: ${PillColors[$color][0]};
    `}
  ${({ $isClickable, $color }) =>
    $isClickable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${PillColors[$color][1]};
      }
    `}
`;

const PillWrapper = forwardRef<HTMLSpanElement, PillWrapperProps>(
  ({ children, color, isClickable, ...props }, ref) => (
    <StyledPillWrapper
      ref={ref}
      $color={color || PillColorsEnums.gray}
      $isClickable={isClickable}
      {...props}
      paddingSize={SpaceSizes.xs}
      paddingType={PaddingTypes.square}
    >
      <Inline align="center" gap={SpaceSizes.xs}>
        {children}
      </Inline>
    </StyledPillWrapper>
  ),
);

export default PillWrapper;
