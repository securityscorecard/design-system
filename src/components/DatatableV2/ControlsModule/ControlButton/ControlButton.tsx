import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  pxToRem,
} from '../../../../utils/helpers';
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
  border-radius: 50em;

  font-family: ${getFontFamily('base')};
  font-weight: ${getFontWeight('medium')};
  font-size: ${getFontSize('md')};

  &,
  &:not([href]):not([tabindex]) {
    color: ${getColor('graphite3B')};

    &:hover,
    &.hover {
      color: ${getColor('graphite4B')};
    }

    ${({ $isActive }) =>
      $isActive &&
      css`
        background-color: ${getColor('graphite5H')};
        color: ${getColor('blueberryClassic')};
        border-color: ${getColor('blueberryClassic')};

        &:hover,
        &.hover {
          color: ${getColor('radiantBlueberry')};
          border-color: ${getColor('radiantBlueberry')};
        }
      `}

    ${({ $isApplied }) =>
      $isApplied &&
      css`
        ${ButtonIcon} {
          color: ${getColor('blueberryClassic')};
        }

        &:hover,
        &.hover {
          ${ButtonIcon} {
            color: ${getColor('radiantBlueberry')};
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
  return (
    <Button
      $isActive={isActive}
      $isApplied={isApplied}
      className={className}
      type="button"
      onClick={onClick}
    >
      <ButtonIcon margin={{ right: 0.4 }} name={iconName} />
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
