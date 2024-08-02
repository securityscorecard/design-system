import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { SpaceSizes } from '../../theme';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { PillBorders, PillColors, PillColorsEnums } from './Pill.enums';
import { PillWrapperProps, StyledPillWrapperProps } from './Pill.types';

const StyledPillWrapper = styled(Padbox)<StyledPillWrapperProps>`
  display: inline-block;
  min-width: 0;
  border-radius: var(--sscds-radii-pill);
  ${({ $color }) =>
    css`
      background-color: var(${PillColors[$color][0]});
    `}

  ${({ $isClickable, $color }) =>
    $isClickable &&
    css`
      cursor: pointer;
      box-shadow: inset 0 0 0 1px var(${PillBorders[$color][0]});
      &:hover {
        background-color: var(${PillColors[$color][1]});
        box-shadow: inset 0 0 0 1px var(${PillBorders[$color][1]});
      }
    `}
`;

const PillWrapper = ({
  children,
  isClickable,
  color,
  ...props
}: PillWrapperProps) => (
  <StyledPillWrapper
    $color={color || PillColorsEnums.gray}
    $isClickable={isClickable}
    {...props}
    paddingSize={SpaceSizes.sm}
    paddingType={PaddingTypes.squish}
  >
    <Inline align="center" gap={SpaceSizes.xs}>
      {children}
    </Inline>
  </StyledPillWrapper>
);

PillWrapper.propTypes = {
  isClickable: PropTypes.bool.isRequired,
  color: PropTypes.oneOf(Object.values(PillColorsEnums)).isRequired,
};

export default PillWrapper;
