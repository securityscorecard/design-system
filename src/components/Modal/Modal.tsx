import { forwardRef, useContext } from 'react';
import usePortal from 'react-cool-portal';
import styled from 'styled-components';
import cls from 'classnames';

import { ModalProps } from './Modal.types';
import { ModalSizes } from './Modal.enums';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Inline, Padbox, Surface } from '../layout';
import { H4 } from '../Heading';
import { Overlay } from '../_internal/BaseOverlay';
import { pxToRem } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { DSContext } from '../../theme/DSProvider/DSProvider';
import { CloseButton } from '../CloseButton';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { FloatingProvider } from '../../contexts/FloatingContext';

const widthVariants = {
  [ModalSizes.xs]: 320,
  [ModalSizes.sm]: 430,
  [ModalSizes.md]: 600,
  [ModalSizes.lg]: 900,
  [ModalSizes.xl]: 1440,
};

const BaseModal = styled(Surface)<{ $maxWidth: number }>`
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  width: 90%;
  max-width: ${({ $maxWidth }) => pxToRem($maxWidth)};
`;

const Title = styled(H4)`
  margin: 0;
`;

const Header = styled.div`
  padding: var(--sscds-space-dialog-content-padding);
  padding-block-end: var(--sscds-space-2x);
`;
const Content = styled.div`
  padding: var(--sscds-space-dialog-content-padding);
  padding-block-start: 0;
  overflow-y: auto;
`;

const Footer = styled(Padbox)`
  border-top: 1px solid var(--sscds-border-color);
  padding-inline: var(--sscds-space-dialog-content-padding);
  padding-block: var(--sscds-space-4x);
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
      ...rest
    }: ModalProps,
    ref,
  ) => {
    const { portalsContainerId } = useContext(DSContext);
    const { Portal } = usePortal({
      containerId: portalsContainerId,
      internalShowHide: false,
      autoRemoveContainer: false,
    });

    const modalRef = useOuterClick<HTMLDivElement>(onClose);

    useLockBodyScroll();

    return (
      <FloatingProvider>
        <Portal>
          <Overlay data-testid="dialog-overlay" placement="center">
            <BaseModal
              ref={mergeRefs<HTMLDivElement>(modalRef, ref)}
              $maxWidth={widthVariants[size]}
              className={cls(CLX_COMPONENT, className, 'ssc-ui-styled')}
              elevation={3}
              radius="lg"
              hasBorder
              {...rest}
            >
              <Inline stretch={StretchEnum.start}>
                <Header>
                  {typeof title !== 'undefined' && <Title>{title}</Title>}
                </Header>
                {onClose && (
                  <CloseButton
                    marginCompensation={SpaceSizes.none}
                    onClose={onClose}
                  />
                )}
              </Inline>
              <Content>{children}</Content>
              {typeof footer !== 'undefined' && <Footer>{footer}</Footer>}
            </BaseModal>
          </Overlay>
        </Portal>
      </FloatingProvider>
    );
  },
);

export default Modal;
