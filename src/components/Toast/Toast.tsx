import React from 'react';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';
import { isNotNilOrEmpty } from 'ramda-adjunct';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getFontSize, pxToRem } from '../../utils';
import { Icon } from '../Icon';
import { Paragraph } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { ToastProps } from './Toast.types';
import { Inline } from '../layout/Inline';
import { SpaceSizes } from '../../theme/space.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { Padbox } from '../layout/Padbox';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { ToastVariants } from './Toast.enums';
import { FlexContainer } from '../FlexContainer';
import { ColorTypes } from '../../theme/colors.enums';

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
  background-color: ${getColor('graphite5H')};
  color: ${getColor('graphite4B')};
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
  color: ${getColor('graphite2B')};

  &:hover {
    color: ${getColor('graphiteB')};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: ${getFontSize('lg')};
`;

const colorVariants = {
  [ToastVariants.info]: ColorTypes.info500,
  [ToastVariants.warn]: ColorTypes.warning500,
  [ToastVariants.error]: ColorTypes.error500,
  [ToastVariants.success]: ColorTypes.success500,
};

const iconVariants = {
  [ToastVariants.info]: SSCIconNames.infoCircle,
  [ToastVariants.warn]: SSCIconNames.exclTriangleSolid,
  [ToastVariants.error]: SSCIconNames.errorSolid,
  [ToastVariants.success]: SSCIconNames.checkCircleSolid,
};

const iconPxSizesVariants = {
  [ToastVariants.info]: 16,
  [ToastVariants.warn]: 14,
  [ToastVariants.error]: 16,
  [ToastVariants.success]: 16,
};

const ToastIconPadbox = styled(Padbox)<{ $variant?: ToastProps['variant'] }>`
  background-color: ${({ $variant }) => getColor(colorVariants[$variant])};
  display: flex;
  align-items: center;
`;

const ToastIconWrapper = styled(FlexContainer)`
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
`;

const ToastStyledIcon = styled(Icon)<{ $variant?: ToastProps['variant'] }>`
  color: ${getColor('neutral.0')};
  font-size: ${({ $variant }) => pxToRem(iconPxSizesVariants[$variant])};
`;

const stopPropagation = (event) => event?.stopPropagation();

const Toast: React.FC<ToastProps> = ({
  onClose,
  children,
  width = 400,
  variant,
}) => (
  <ToastContainer $width={width} onClick={stopPropagation}>
    <Inline stretch={StretchEnum.start}>
      {isNotNilOrEmpty(variant) && (
        <ToastIconPadbox
          $variant={variant}
          paddingSize={SpaceSizes.sm}
          paddingType={PaddingTypes.squish}
        >
          <ToastIconWrapper alignItems="center">
            <ToastStyledIcon
              $variant={variant}
              name={iconVariants[variant]}
              type={IconTypes.ssc}
            />
          </ToastIconWrapper>
        </ToastIconPadbox>
      )}
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
  variant: PropTypes.oneOf(Object.values(ToastVariants)),
};

export default Toast;
