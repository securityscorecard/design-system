import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { usePortal } from '../../hooks/usePortal';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { getColor, getDepth, getRadii } from '../../utils';
import { WizardModalProps } from './WizardModal.types';
import { Padbox } from '../layout';

const BlurredOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
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

const WizardModal: React.FC<WizardModalProps> = ({ children }) => {
  const { Portal } = usePortal();
  useLockBodyScroll();

  return (
    <Portal>
      <BlurredOverlay>
        <BaseModal>{children}</BaseModal>
      </BlurredOverlay>
    </Portal>
  );
};

export default WizardModal;

WizardModal.propTypes = {
  children: PropTypes.node.isRequired,
};
