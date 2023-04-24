import type { FC } from 'react';
import type { ToastProps } from './Toast.types';

import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';

import { getColor, getRadii, pxToRem } from '../../utils';
import { Paragraph } from '../typographyLegacy';
import { TextSizes } from '../typographyLegacy/Text/Text.enums';
import { SpaceSizes } from '../../theme/space.enums';
import { Inline } from '../layout';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { Padbox } from '../layout/Padbox';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { ToastVariants } from './Toast.enums';
import { CloseButton } from '../CloseButton';
import { BaseToastBanner } from '../_internal/BaseToastBanner';
import { CLX_COMPONENT } from '../../theme/constants';

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

export const ToastArea = styled.div`
  position: fixed;
  z-index: 9999;
  top: ${pxToRem(70)};
  right: ${pxToRem(20)};
`;

const ToastContainer = styled.div<{ $width?: ToastProps['width'] }>`
  width: ${({ $width }) => pxToRem($width)};
  max-height: ${pxToRem(240)};
  background-color: ${getColor('neutral.0')};
  color: ${getColor('neutral.900')};
  text-align: left;
  box-shadow: 0 2px 6px 0 ${transparentize(0.85, '#000')};
  animation: ${ToastFromTop} 0.5s;
  border: 1px solid ${getColor('neutral.500')};
  border-radius: ${getRadii('default')};
  overflow: hidden;
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

const ToastAreaContainer: FC<{
  isStandalone: boolean;
}> = ({ children, isStandalone }) => {
  // eslint-disable-next-line
  return isStandalone ? <ToastArea>{children}</ToastArea> : <>{children}</>;
};

const Toast: FC<ToastProps> = ({
  onClose,
  children,
  width = 400,
  variant,
  isStandalone = true,
}) => {
  return (
    <ToastAreaContainer isStandalone={isStandalone}>
      <ToastContainer
        $width={width}
        className={CLX_COMPONENT}
        onClick={stopPropagation}
      >
        <BaseToastBanner
          iconAlign="center"
          iconPxSizesVariants={iconPxSizesVariants}
          iconSize={16}
          paddingSize={SpaceSizes.sm}
          paddingType={PaddingTypes.squish}
          stretch={StretchEnum.end}
          variant={variant}
        >
          <Inline justify="space-between">
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
          </Inline>
        </BaseToastBanner>
      </ToastContainer>
    </ToastAreaContainer>
  );
};

export default Toast;
