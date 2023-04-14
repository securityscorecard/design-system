import type { FC } from 'react';
import type { PillWrapperProps, StyledPillWrapperProps } from './Pill.types';

import styled, { css } from 'styled-components';

import { SpaceSizes } from '../../theme';
import { getRadii, getSpace } from '../../utils';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { PillColors, PillColorsEnums } from './Pill.enums';

const StyledPillWrapper = styled(Padbox)<StyledPillWrapperProps>`
  display: inline-block;
  min-width: 0;
  border-radius: ${getRadii('round')};
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
  padding-right: ${getSpace('sm')};
  padding-left: ${getSpace('sm')};
`;

const PillWrapper: FC<PillWrapperProps> = ({
  children,
  isClickable,
  color,
  ...props
}) => (
  <StyledPillWrapper
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
);

export default PillWrapper;
