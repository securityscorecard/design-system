import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, getDepth, getModalSize } from '../../utils/helpers';
import { FlexContainer } from '../FlexContainer';
import ModalContext from './Context/Context';
import ModalHeader from './Header/Header';
import ModalContent from './Content/Content';
import ModalSidebar from './Sidebar/Sidebar';
import ModalFooter from './Footer/Footer';
import { FullscreenModalSizes } from './FullscreenModal.enums';
import { FullscreenModalProps } from './FullscreenModal.types';

export interface FullscreenModalSubcomponents {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Sidebar: typeof ModalSidebar;
  Footer: typeof ModalFooter;
}

const BaseModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: ${getColor('graphite5H')};
  z-index: ${getDepth('modal')};
`;

const ModalInnerContainer = styled(FlexContainer)<FullscreenModalProps>`
  width: ${getModalSize};
  margin: 0 auto;
`;

const FullscreenModal: React.FC<FullscreenModalProps> &
  FullscreenModalSubcomponents = ({ children, size, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContext = {
    size,
    modalRef,
    handleClose: onClose,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      <BaseModal ref={modalRef}>
        <ModalInnerContainer flexDirection="column" size={size}>
          {children}
        </ModalInnerContainer>
      </BaseModal>
    </ModalContext.Provider>
  );
};

FullscreenModal.propTypes = {
  size: PropTypes.oneOf(Object.values(FullscreenModalSizes)),
  onClose: PropTypes.func,
};

FullscreenModal.Header = ModalHeader;
FullscreenModal.Content = ModalContent;
FullscreenModal.Sidebar = ModalSidebar;
FullscreenModal.Footer = ModalFooter;

export default FullscreenModal;
