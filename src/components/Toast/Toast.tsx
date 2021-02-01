import React from 'react';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { createPaddingSpacing, getColor, pxToRem } from '../../utils/helpers';
import { FlexContainer } from '../FlexContainer';
import { Icon } from '../Icon';
import { Paragraph } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { ToastProps } from './Toast.types';

const ToastFromTop = keyframes`
  from {
    top: ${pxToRem(-100)};
    opacity: 0;
  }
  to {
    top: ${pxToRem(70)};
    opacity: 1;
  }
`;

const ToastContainer = styled(FlexContainer)`
  position: fixed;
  z-index: 9999;
  top: ${pxToRem(70)};
  right: ${pxToRem(20)};
  width: ${pxToRem(370)};
  max-height: ${pxToRem(240)};
  background-color: ${getColor('graphite5H')};
  color: ${getColor('graphite4B')};
  text-align: left;
  ${createPaddingSpacing({
    top: 0.75,
    bottom: 0.75,
    right: 0.6,
    left: 0.75,
  })};
  box-shadow: 0px 2px 6px 0px ${transparentize(0.85, '#000')};
  animation: ${ToastFromTop} 0.5s;
`;

const ToastContent = styled(Paragraph)`
  text-decoration: none;
  text-align: left;

  button:last-child {
    margin-bottom: -10px;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  flex-shrink: 0;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  margin-left: ${pxToRem(15)};
  color: ${getColor('graphite2B')};

  &:hover {
    color: ${getColor('graphiteB')};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: ${pxToRem(16)};
`;

const stopPropagation = (event) => event?.stopPropagation();

const Toast: React.FC<ToastProps> = ({ onClose, children }) => (
  <ToastContainer
    alignItems="flex-start"
    justifyContent="space-between"
    onClick={stopPropagation}
  >
    <ToastContent as="div" margin="none" size={TextSizes.md}>
      {children}
    </ToastContent>
    <CloseButton aria-label="Close" onClick={onClose}>
      <StyledIcon name={SSCIconNames.times} />
    </CloseButton>
  </ToastContainer>
);

Toast.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Toast;
