import React from 'react';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getFontSize, pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { Paragraph } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { ToastProps } from './Toast.types';
import { Inline } from '../layout/Inline';
import { SpaceSizes } from '../../theme/space.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { Padbox } from '../layout/Padbox';

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

const ToastContainer = styled.div<{ $width?: ToastProps['width'] }>`
  position: fixed;
  z-index: 9999;
  top: ${pxToRem(70)};
  right: ${pxToRem(20)};
  width: ${({ $width }) => pxToRem($width)};
  max-height: ${pxToRem(240)};
  background-color: ${getColor('neutral.0')};
  color: ${getColor('neutral.900')};
  text-align: left;
  box-shadow: 0px 2px 6px 0px ${transparentize(0.85, '#000')};
  animation: ${ToastFromTop} 0.5s;
`;

const ToastContent = styled(Paragraph)`
  text-decoration: none;
  text-align: left;

  &&& button {
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
  color: ${getColor('neutral.700')};

  &:hover {
    color: ${getColor('neutral.600')};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: ${getFontSize('lg')};
`;

const stopPropagation = (event) => event?.stopPropagation();

const Toast: React.FC<ToastProps> = ({ onClose, children, width = 400 }) => (
  <ToastContainer $width={width} onClick={stopPropagation}>
    <Inline stretch={StretchEnum.start}>
      <Padbox paddingSize={SpaceSizes.md}>
        <ToastContent as="div" margin="none" size={TextSizes.md}>
          {children}
        </ToastContent>
      </Padbox>
      <Padbox paddingSize={SpaceSizes.sm}>
        <CloseButton aria-label="Close" onClick={onClose}>
          <StyledIcon name={SSCIconNames.times} />
        </CloseButton>
      </Padbox>
    </Inline>
  </ToastContainer>
);

Toast.propTypes = {
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
};

export default Toast;
