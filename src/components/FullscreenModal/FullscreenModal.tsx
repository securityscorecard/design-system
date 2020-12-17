import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isUndefined, noop } from 'ramda-adjunct';

import { getColor, getDepth } from '../../utils/helpers';
import ModalHeader from './Header/Header';
import ModalFooter from './Footer/Footer';
import { FullscreenModalLayouts } from './FullscreenModal.enums';
import { ColumnConfigMap, FullscreenModalProps } from './FullscreenModal.types';
import { Col, Container, Row } from '../layout';

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

const columnConfigMap: ColumnConfigMap = {
  [FullscreenModalLayouts.single6]: {
    header: [6, 3],
    sidebar: [0, 0],
    content: [6, 3],
  },
  [FullscreenModalLayouts.single8]: {
    header: [8, 2],
    sidebar: [0, 0],
    content: [8, 2],
  },
  [FullscreenModalLayouts.sidebar46]: {
    header: [10, 1],
    sidebar: [4, 1],
    content: [6, 0],
  },
  [FullscreenModalLayouts.sidebar48]: {
    header: [12, 0],
    sidebar: [4, 0],
    content: [8, 0],
  },
};

const FullscreenModal: React.FC<FullscreenModalProps> = ({
  layout = FullscreenModalLayouts.single6,
  header,
  content,
  sidebar,
  footer,
  onClose = noop,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    header: headerConfig,
    sidebar: sidebarConfig,
    content: contentConfig,
  } = columnConfigMap[layout];

  const hasLayoutSidebar = sidebarConfig[0] > 0;
  const totalContentWidth = contentConfig[0] + sidebarConfig[0];

  if (hasLayoutSidebar && isUndefined(sidebar)) {
    // eslint-disable-next-line no-console
    console.error(
      `You chose to use modal layout with sidebar (current: ${layout}) but you didn't provide sidebar content.
You should either provide content in "sidebar" property or switch layout to "${FullscreenModalLayouts.single6}" or "${FullscreenModalLayouts.single8}"
`,
    );
  }

  return (
    <BaseModal ref={modalRef}>
      <Container>
        <Row>
          <Col cols={headerConfig[0]} offset={headerConfig[1]}>
            <ModalHeader
              handleClose={onClose}
              modalRef={modalRef}
              offset={headerConfig[1]}
              width={totalContentWidth}
            >
              {header}
            </ModalHeader>
          </Col>
        </Row>
        <Row>
          {hasLayoutSidebar && (
            <Col cols={sidebarConfig[0]} offset={sidebarConfig[1]}>
              {sidebar}
            </Col>
          )}
          <Col cols={contentConfig[0]} offset={contentConfig[1]}>
            {content}
            <ModalFooter
              modalRef={modalRef}
              offset={headerConfig[1]}
              width={totalContentWidth}
            >
              {footer}
            </ModalFooter>
          </Col>
        </Row>
      </Container>
    </BaseModal>
  );
};

FullscreenModal.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  sidebar: PropTypes.node,
  layout: PropTypes.oneOf(Object.values(FullscreenModalLayouts)),
  onClose: PropTypes.func,
};

export default FullscreenModal;
