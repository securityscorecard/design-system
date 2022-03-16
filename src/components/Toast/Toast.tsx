import React from 'react';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';

import { getColor, pxToRem } from '../../utils';
import { Paragraph } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { ToastProps } from './Toast.types';
import { SpaceSizes } from '../../theme/space.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { Padbox } from '../layout/Padbox';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { ToastVariants } from './Toast.enums';
import { CloseButton } from '../CloseButton';
import { BaseToastBanner } from '../_internal/BaseToastBanner';

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

const iconPxSizesVariants = {
  [ToastVariants.info]: 16,
  [ToastVariants.warn]: 14,
  [ToastVariants.error]: 16,
  [ToastVariants.success]: 16,
};

const stopPropagation = (event) => event?.stopPropagation();

const Toast: React.FC<ToastProps> = ({
  onClose,
  children,
  width = 400,
  variant,
}) => (
  <ToastContainer $width={width} onClick={stopPropagation}>
    <BaseToastBanner
      iconPxSizesVariants={iconPxSizesVariants}
      iconSize={16}
      paddingSize={SpaceSizes.sm}
      paddingType={PaddingTypes.squish}
      stretch={StretchEnum.start}
      variant={variant}
    >
      <Padbox paddingSize={SpaceSizes.md}>
        <ToastContent as="div" margin="none" size={TextSizes.md}>
          {children}
        </ToastContent>
      </Padbox>
      <CloseButton
        aria-label="Close"
        marginCompensation={SpaceSizes.none}
        onClose={onClose}
      />
    </BaseToastBanner>
  </ToastContainer>
);

Toast.propTypes = {
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  variant: PropTypes.oneOf(Object.values(ToastVariants)),
};

export default Toast;
