import type { ModalProps } from './Modal.types';

import { forwardRef, useContext } from 'react';
import usePortal from 'react-cool-portal';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { ModalSizes } from './Modal.enums';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Inline, Padbox } from '../layout';
import { H4 } from '../typographyLegacy';
import { Overlay } from '../_internal/BaseOverlay';
import { getColor, getRadii, pxToRem } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { DSContext } from '../../theme/DSProvider/DSProvider';
import { CloseButton } from '../CloseButton';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { CLX_COMPONENT } from '../../theme/constants';

const widthVariants = {
  [ModalSizes.xs]: 320,
  [ModalSizes.sm]: 430,
  [ModalSizes.md]: 600,
  [ModalSizes.lg]: 900,
};

const paddingVariants = {
  [ModalSizes.xs]: SpaceSizes.lg,
  [ModalSizes.sm]: SpaceSizes.lg,
  [ModalSizes.md]: SpaceSizes.lgPlus,
  [ModalSizes.lg]: SpaceSizes.lgPlus,
};

const BaseModal = styled.div<{ $maxWidth: number }>`
  display: flex;
  flex-direction: column;
  max-height: 66vh;
  width: 100%;
  max-width: ${({ $maxWidth }) => pxToRem($maxWidth)};
  border-radius: ${getRadii('default')};
  background-color: ${getColor('neutral.0')};
`;

const Title = styled(H4)`
  margin: 0;
`;

const Content = styled(Padbox)`
  padding-top: 0;
  overflow-y: auto;
`;

const Footer = styled(Padbox)`
  border-top: 1px solid ${getColor('neutral.500')};
`;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      title,
      onClose,
      footer,
      size = ModalSizes.md,
      children,
      className,
      isOverlayBlurred = false,
      ...rest
    },
    ref,
  ) => {
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
        <Overlay $isBlurred={isOverlayBlurred} $placement="center">
          <BaseModal
            ref={mergeRefs<HTMLDivElement>(modalRef, ref)}
            $maxWidth={widthVariants[size]}
            className={cls(CLX_COMPONENT, className)}
            {...rest}
          >
            <Inline stretch={StretchEnum.start}>
              <Padbox paddingSize={SpaceSizes.lgPlus} paddingType="squish">
                {isNotUndefined(title) && <Title>{title}</Title>}
              </Padbox>
              {onClose && (
                <CloseButton
                  marginCompensation={SpaceSizes.none}
                  onClose={onClose}
                />
              )}
            </Inline>
            <Content
              paddingSize={paddingVariants[size]}
              paddingType={hasFooter ? 'squish' : 'square'}
            >
              {children}
            </Content>
            {hasFooter && (
              <Footer paddingSize={SpaceSizes.lgPlus} paddingType="squish">
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
