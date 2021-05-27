import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isUndefined, noop } from 'ramda-adjunct';

import { getColor } from '../../utils/helpers';
import ModalHeader from './Header/Header';
import ModalFooter from './Footer/Footer';
import { FullscreenModalLayouts } from './FullscreenModal.enums';
import { ColumnConfigMap, FullscreenModalProps } from './FullscreenModal.types';
import { Col, Container, Row } from '../layout';
import { useModal } from './hooks/useModal';

const BaseModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: ${getColor('graphite5H')};
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
  [FullscreenModalLayouts.single10]: {
    header: [10, 1],
    sidebar: [0, 0],
    content: [10, 1],
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

const FullscreenModalContent = forwardRef(
  (
    {
      layout = FullscreenModalLayouts.single6,
      header,
      content,
      sidebar,
      footer,
      scrollToTopButtonLabel,
      onClose = noop,
    }: FullscreenModalProps,
    ref: React.MutableRefObject<HTMLDivElement>,
  ): React.ReactElement => {
    const closeOnEsc = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          onClose();
        }
      },
      [onClose],
    );

    useEffect(() => {
      document.addEventListener('keydown', closeOnEsc);

      return () => {
        document.removeEventListener('keydown', closeOnEsc);
      };
    }, [closeOnEsc]);

    const {
      header: [headerCols, headerOffset],
      sidebar: [sidebarCols, sidebarOffset],
      content: [contentCols, contentOffset],
    } = columnConfigMap[layout];

    const hasLayoutSidebar = sidebarCols > 0;
    const totalContentWidth = contentCols + sidebarCols;

    if (hasLayoutSidebar && isUndefined(sidebar)) {
      throw new Error(
        `You chose to use modal layout with sidebar (current: ${layout}) but you didn't provide sidebar content.
You should either provide content in "sidebar" property or switch layout to "${FullscreenModalLayouts.single6}" or "${FullscreenModalLayouts.single8}"
`,
      );
    }

    return (
      <BaseModal ref={ref}>
        <Container>
          <Row>
            <Col cols={headerCols} offset={headerOffset}>
              <ModalHeader
                handleClose={onClose}
                modalRef={ref}
                offset={headerOffset}
                width={totalContentWidth}
              >
                {header}
              </ModalHeader>
            </Col>
          </Row>
          <Row>
            {hasLayoutSidebar && (
              <Col cols={sidebarCols} offset={sidebarOffset}>
                {sidebar}
              </Col>
            )}
            <Col cols={contentCols} offset={contentOffset}>
              {content}
              <ModalFooter
                modalRef={ref}
                offset={headerOffset}
                scrollToTopButtonLabel={scrollToTopButtonLabel}
                width={totalContentWidth}
              >
                {footer}
              </ModalFooter>
            </Col>
          </Row>
        </Container>
      </BaseModal>
    );
  },
);

const FullscreenModal = forwardRef(
  (
    props: FullscreenModalProps,
    ref: React.MutableRefObject<HTMLDivElement>,
  ): React.ReactElement => {
    const defaultModalRef = useRef<HTMLDivElement>();
    const resolvedModalRef = ref || defaultModalRef;
    const renderModal = useModal(
      <FullscreenModalContent ref={resolvedModalRef} {...props} />,
    );

    return renderModal();
  },
);
FullscreenModal.propTypes = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  sidebar: PropTypes.node,
  layout: PropTypes.oneOf(Object.values(FullscreenModalLayouts)),
  scrollToTopButtonLabel: PropTypes.string,
};

export default FullscreenModal;
