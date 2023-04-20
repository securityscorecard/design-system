import type { FC } from 'react';
import type { WizardModalProps } from './WizardModal.types';

import { forwardRef } from 'react';
import styled from 'styled-components';

import { usePortal } from '../../hooks/usePortal';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { getColor, getDepth, getRadii } from '../../utils';
import { Padbox } from '../layout';

const BlurredOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(0 0 0 / 25%);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${getDepth('modal')};
`;
const BaseModal = styled(Padbox)`
  max-height: 66vh;
  width: 100%;
  max-width: 900px;
  border-radius: ${getRadii('default')};
  background-color: ${getColor('neutral.0')};
  overflow: auto;

  > * {
    height: 100%;
  }
`;

const WizardModal: FC<WizardModalProps> = forwardRef(({ children }, ref) => {
  const { Portal } = usePortal();
  useLockBodyScroll();

  return (
    <Portal>
      <BlurredOverlay>
        <BaseModal ref={ref}>{children}</BaseModal>
      </BlurredOverlay>
    </Portal>
  );
});

export default WizardModal;
