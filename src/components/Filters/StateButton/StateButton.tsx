import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../Icon';
import { IconTypes } from '../../Icon/Icon.enums';
import { Text } from '../../typography/Text';
import { FlexContainer } from '../../FlexContainer';
import {
  getBorderRadius,
  getColor,
  getDepth,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';
import { StateButtonProps } from './StateButton.types';
import { useStateButtonIcon } from '../hooks/useStateButton';

const Popup = styled(FlexContainer)`
  position: absolute;
  visibility: hidden;
  z-index: ${getDepth('tooltip')};
  padding: ${pxToRem(8.5, 0, 8.5, 10)};
  background: ${getColor('strawberry')};
  border-top-left-radius: ${getBorderRadius};
  border-bottom-left-radius: ${getBorderRadius};
  opacity: 0;
  right: calc(100%);
  top: 50%;
  transform: translateY(-50%);
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${pxToRem(8, 5.5)};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  &:hover {
    background-color: ${({ disabled }) => !disabled && getColor('strawberry')};
    border-top-right-radius: ${getBorderRadius};
    border-bottom-right-radius: ${getBorderRadius};
  }
  &:hover ${Popup} {
    visibility: visible;
    opacity: 1;
  }
`;

const LightText = styled(Text)`
  color: ${getColor('graphite5H')};
  line-height: ${getLineHeight('md')};
  font-weight: ${getFontWeight('medium')};
`;

const StateButton: React.FC<StateButtonProps> = ({
  index,
  onClick,
  isApplied = false,
  isDisabled,
}) => {
  const {
    iconColor,
    iconName,
    handleMouseOut,
    handleMouseOver,
  } = useStateButtonIcon(isApplied, isDisabled);
  return (
    <RemoveButton
      disabled={isDisabled}
      onClick={onClick(index)}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <Icon
        color={iconColor}
        name={iconName}
        type={IconTypes.ssc}
        hasFixedWidth
      />
      {!isDisabled && (
        <Popup alignItems="center" justifyContent="center">
          <LightText>Remove</LightText>
        </Popup>
      )}
    </RemoveButton>
  );
};

export default StateButton;

StateButton.propTypes = {
  index: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isApplied: PropTypes.bool,
};
