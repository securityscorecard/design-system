import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getRadii,
  pxToRem,
} from '../../../../utils';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { Icon } from '../../../Icon';
import { SSCIcons } from '../../../Icon/Icon.types';
import {
  ControlButtonProps,
  StyledControlButtonProps,
} from './ControlButton.types';

const ButtonIcon = styled(Icon)`
  font-size: ${pxToRem(12)};
`;

const Button = styled.button<StyledControlButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  height: ${pxToRem(32)};
  padding: ${pxToRem(0, 10)};
  border: 2px solid transparent;
  border-radius: ${getRadii('round')};

  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('medium')};
  font-size: ${getFontSize('md')};

  &:focus {
    outline: none;
  }

  &,
  &:not([href]):not([tabindex]) {
    color: ${getColor('neutral.800')};

    &:hover,
    &.hover,
    &:focus {
      color: ${getColor('neutral.900')};
    }

    ${({ $isActive }) =>
      $isActive &&
      css`
        background-color: ${getColor('neutral.0')};
        color: ${getColor('primary.500')};
        border-color: ${getColor('primary.500')};

        &:hover,
        &.hover,
        &:focus {
          color: ${getColor('primary.400')};
          border-color: ${getColor('primary.400')};
        }
      `}

    ${({ $isApplied }) =>
      $isApplied &&
      css`
        ${ButtonIcon} {
          color: ${getColor('primary.500')};
        }

        &:hover,
        &.hover,
        &:focus {
          ${ButtonIcon} {
            color: ${getColor('primary.400')};
          }
        }
      `}
  }
`;

const ControlButton: React.FC<ControlButtonProps> = ({
  label,
  iconName,
  isActive = false,
  isApplied = false,
  className = '',
  onClick,
}) => {
  const bottomMargin = iconName === 'reorder' ? 0.1 : 0;
  return (
    <Button
      $isActive={isActive}
      $isApplied={isApplied}
      className={className}
      type="button"
      onClick={onClick}
    >
      <ButtonIcon
        margin={{ right: 0.4, bottom: bottomMargin }}
        name={iconName}
      />
      {label}
    </Button>
  );
};

ControlButton.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  isApplied: PropTypes.bool,
  className: PropTypes.string,
};

export default ControlButton;
