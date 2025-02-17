import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

import { pxToRem } from '../../utils';
import Paragraph from '../Paragraph/Paragraph';
import { ToastProps } from './Toast.types';
import { Inline, Surface } from '../layout';
import { Padbox } from '../layout/Padbox';
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

const ToastContainer = styled(Surface)<{ $width?: ToastProps['width'] }>`
  width: ${({ $width }) => pxToRem($width)};
  max-height: ${pxToRem(240)};
  color: var(--sscds-color-text-default);
  text-align: left;
  animation: ${ToastFromTop} 0.5s;
  overflow: hidden;
`;

const ToastContent = styled(Paragraph)`
  text-decoration: none;
  text-align: left;

  &&& button.sscds-button {
    margin-bottom: -10px;
  }
`;

const stopPropagation = (event) => event?.stopPropagation();

const ToastAreaContainer = ({
  children,
  isStandalone,
}: {
  isStandalone: boolean;
  children: ReactNode;
}) => {
  // eslint-disable-next-line
  return isStandalone ? <ToastArea>{children}</ToastArea> : <>{children}</>;
};

const Toast = ({
  onClose,
  children,
  width = 400,
  variant,
  isStandalone = true,
}: ToastProps) => {
  return (
    <ToastAreaContainer isStandalone={isStandalone}>
      <ToastContainer
        $width={width}
        className={CLX_COMPONENT}
        elevation={2}
        radius="sm"
        hasBorder
        onClick={stopPropagation}
      >
        <BaseToastBanner paddingType="stretch" variant={variant}>
          <Inline justify="space-between">
            <Padbox paddingSize="md">
              <ToastContent as="div">{children}</ToastContent>
            </Padbox>
            <CloseButton
              aria-label="Close"
              marginCompensation="none"
              onClose={onClose}
            />
          </Inline>
        </BaseToastBanner>
      </ToastContainer>
    </ToastAreaContainer>
  );
};

Toast.displayName = 'Toast';

export default Toast;
