import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import usePortal from 'react-cool-portal';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { ModalProps } from './Modal.types';
import { ModalSizes } from './Modal.enums';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Icon } from '../Icon';
import { Padbox } from '../layout';
import { H3 } from '../typography';
import {
  createPadding,
  getColor,
  getDepth,
  getFontSize,
  getRadii,
  pxToRem,
} from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { DSContext } from '../../theme/DSProvider/DSProvider';
import { SSCIconNames } from '../../theme/icons/icons.enums';

const widthVariants = {
  [ModalSizes.xs]: 320,
  [ModalSizes.sm]: 430,
  [ModalSizes.md]: 600,
  [ModalSizes.lg]: 900,
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${getDepth('modal')};
`;

const BaseModal = styled.div<{ $maxWidth: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 66vh;
  width: 100%;
  max-width: ${({ $maxWidth }) => pxToRem($maxWidth)};
  border-radius: ${getRadii('default')};
  background-color: ${getColor('graphite5H')};
`;

const Title = styled(H3)`
  margin: 0;
`;

// TODO Extract close button and unify it across DS
const CloseButton = styled.button`
  position: absolute;
  top: ${pxToRem(8)};
  right: ${pxToRem(8)};
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  ${({ theme }) => createPadding({ paddingSize: SpaceSizes.md, theme })};
  font-size: ${getFontSize('lg')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${getColor('graphite3B')};
`;

const Content = styled(Padbox)`
  padding-top: 0;
  overflow-y: auto;
`;

const Footer = styled(Padbox)`
  border-top: 1px solid ${getColor('graphiteHB')};
`;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ title, onClose, footer, size = ModalSizes.md, children }, ref) => {
    const { portalsContainerId } = useContext(DSContext);
    const { Portal } = usePortal({
      containerId: portalsContainerId,
      internalShowHide: false,
      autoRemoveContainer: false,
    });
    const hasFooter = isNotUndefined(footer);

    const modalRef = useOuterClick<HTMLDivElement>(onClose);

    useLockBodyScroll();

    return (
      <Portal>
        <Overlay>
          <BaseModal
            ref={mergeRefs<HTMLDivElement>(modalRef, ref)}
            $maxWidth={widthVariants[size]}
          >
            <CloseButton aria-label="Close" onClick={onClose}>
              <Icon name={SSCIconNames.times} />
            </CloseButton>
            <Padbox paddingSize={SpaceSizes.lg} paddingType="squish">
              {isNotUndefined(title) && <Title>{title}</Title>}
            </Padbox>
            <Content
              paddingSize={SpaceSizes.lg}
              paddingType={hasFooter ? 'squish' : 'square'}
            >
              {children}
            </Content>
            {hasFooter && (
              <Footer paddingSize={SpaceSizes.lg} paddingType="squish">
                {footer}
              </Footer>
            )}
          </BaseModal>
        </Overlay>
      </Portal>
    );
  },
);

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  footer: PropTypes.node,
  size: PropTypes.oneOf(Object.values(ModalSizes)),
};
