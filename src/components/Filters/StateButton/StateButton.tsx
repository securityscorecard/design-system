import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IconTypes } from '../../../theme/icons/icons.enums';
import { Icon } from '../../Icon';
import { Text } from '../../typographyLegacy/Text';
import { Spinner } from '../../Spinner';
import { Padbox } from '../../layout';
import {
  getColor,
  getDepth,
  getFontFamily,
  getFontWeight,
  getRadii,
  pxToRem,
} from '../../../utils';
import { StateButtonProps } from './StateButton.types';
import { useStateButtonIcon } from '../hooks/useStateButton';

const Popup = styled(Padbox)`
  display: flex;
  position: absolute;
  visibility: hidden;
  z-index: ${getDepth('tooltip')};
  padding: ${pxToRem(8, 0, 8, 10)};
  background: ${getColor('error.500')};
  border-top-left-radius: ${getRadii('default')};
  border-bottom-left-radius: ${getRadii('default')};
  opacity: 0;
  right: calc(100%);
  top: 50%;
  transform: translateY(-50%);
`;

const RemoveButton = styled.button`
  background: transparent;
  font-family: ${getFontFamily('base')};
  height: ${pxToRem(32)};
  flex: 0 0 ${pxToRem(32)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  margin: 0;

  cursor: ${({ disabled }) => !disabled && 'pointer'};

  &:hover {
    background-color: ${({ disabled }) => !disabled && getColor('error.500')};
    border-top-right-radius: ${getRadii('default')};
    border-bottom-right-radius: ${getRadii('default')};
  }

  &:hover ${Popup} {
    visibility: visible;
    opacity: 1;
  }
`;

const LightText = styled(Text)`
  color: ${getColor('neutral.0')};
  line-height: 1rem;
  font-weight: ${getFontWeight('medium')};
`;

const StateButton: React.FC<StateButtonProps> = ({
  index,
  onClick,
  isApplied = false,
  isLoading = false,
}) => {
  const { iconColor, iconName, handleMouseOut, handleMouseOver } =
    useStateButtonIcon(isApplied);
  return (
    <RemoveButton
      aria-label="remove"
      onClick={onClick(index)}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      {isLoading ? (
        <Spinner borderWidth={2} height={20} width={20} dark />
      ) : (
        <Icon
          color={iconColor}
          name={iconName}
          type={IconTypes.ssc}
          hasFixedWidth
        />
      )}
      <Popup alignItems="center" justifyContent="center">
        <LightText>Remove</LightText>
      </Popup>
    </RemoveButton>
  );
};

export default StateButton;

StateButton.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isApplied: PropTypes.bool,
  isLoading: PropTypes.bool,
};
