import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { SpaceSizes } from '../../theme';
import { getColor, getRadii } from '../../utils';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { PillSizes, PillVariants } from './Pill.enums';
import { PillWrapperProps, StyledPillWrapperProps } from './Pill.types';

const PillSolid = css`
  background-color: ${getColor('neutral.300')};
`;

const PillOutline = css`
  background-color: ${getColor('neutral.0')};
  box-shadow: inset 0 0 0 1px ${getColor('neutral.500')};
`;

const pillVariants = {
  [PillVariants.solid]: PillSolid,
  [PillVariants.outline]: PillOutline,
};

const StyledPillWrapper = styled(Padbox)<StyledPillWrapperProps>`
  display: inline-block;
  min-width: 0;
  border-radius: ${getRadii('default')};
  ${({ $variant }) => pillVariants[$variant]};

  ${({ $isClickable }) =>
    $isClickable &&
    css`
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: ${getColor('primary.50')};
        outline: none;
      }
    `}
`;

const PillWrapper: React.FC<PillWrapperProps> = ({
  children,
  variant,
  size,
  isClickable,
  ...props
}) => (
  <StyledPillWrapper
    $isClickable={isClickable}
    $variant={variant}
    {...props}
    paddingSize={size === PillSizes.sm ? SpaceSizes.xs : SpaceSizes.sm}
    paddingType={PaddingTypes.square}
  >
    <Inline align="center" gap={SpaceSizes.xs}>
      {children}
    </Inline>
  </StyledPillWrapper>
);

PillWrapper.propTypes = {
  variant: PropTypes.oneOf(Object.values(PillVariants)).isRequired,
  size: PropTypes.oneOf(Object.values(PillSizes)).isRequired,
  isClickable: PropTypes.bool.isRequired,
};

export default PillWrapper;
