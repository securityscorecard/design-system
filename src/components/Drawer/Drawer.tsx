import { forwardRef, useContext, useEffect, useRef } from 'react';
import usePortal from 'react-cool-portal';
import styled, { css } from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';
import {
  FocusScope,
  OverlayContainer,
  useDialog,
  useModal,
  useOverlay,
} from 'react-aria';

import { DrawerProps } from './Drawer.types';
import { DrawerSizes } from './Drawer.enums';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Inline, Surface } from '../layout';
import { Overlay } from '../_internal/BaseOverlay';
import { pxToRem } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { DSContext } from '../../theme/DSProvider/DSProvider';
import { CloseButton } from '../CloseButton';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { FloatingProvider } from '../../contexts/FloatingContext';
import ElementLabel from '../ElementLabel/ElementLabel';

const widthVariants = {
  [DrawerSizes.md]: 480,
  [DrawerSizes.lg]: 720,
  [DrawerSizes.xl]: 960,
};

const Header = styled.div`
  border-bottom: 1px solid var(--sscds-border-color);
  padding-inline: var(--sscds-space-dialog-content-padding);
  padding-block: calc(var(--sscds-space-dialog-content-padding) / 2);
`;

const noBackdropStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--sscds-depth-modal);
`;

const SurfaceContainer = styled.div<{
  $maxWidth: number;
  $hasBackdrop: boolean;
}>`
  height: calc(100% - var(--sscds-drawer-offset) * 2);
  max-width: ${({ $maxWidth }) => pxToRem($maxWidth)};
  margin: var(--sscds-drawer-offset);
  width: 100%;
  display: flex;
  flex-direction: row;

  ${({ $hasBackdrop }) => !$hasBackdrop && noBackdropStyle};
`;

const BaseDrawer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleWrapper = styled.div`
  overflow: hidden;
`;

/* stylelint-disable */
const Title = styled(ElementLabel)`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
/* stylelint-enable */

const Content = styled.div`
  overflow-y: auto;
  flex-grow: 2;
  padding: var(--sscds-space-dialog-content-padding);
`;

const Footer = styled.div`
  border-top: 1px solid var(--sscds-border-color);
  padding: var(--sscds-space-dialog-content-padding);
`;

const Adornment = styled.div`
  max-width: ${pxToRem(36)};
  max-height: ${pxToRem(36)};
`;

const DrawerBox = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      size,
      adornment,
      children,
      footer,
      title,
      onClose,
      className,
      hasBackdrop,
      ...props
    },
    ref,
  ) => {
    const hasFooter = isNotUndefined(footer);
    const hasAdornment = isNotUndefined(adornment);
    const drawerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const mergedRef = mergeRefs<HTMLDivElement>(drawerRef, ref);

    // Dialog ARIA attributes
    const { dialogProps, titleProps } = useDialog(
      {
        'aria-labelledby': 'ds-drawer-title',
      },
      drawerRef,
    );

    // Modal behavior for focus management and background deactivation
    const { modalProps } = useModal();

    // Ensure proper focus management for the modal
    const focusProps = hasBackdrop ? modalProps : {};

    // Focus the first focusable element in the content
    useEffect(() => {
      if (contentRef.current) {
        // More specific selector prioritizing inputs
        const focusableElements = contentRef.current.querySelectorAll(
          'input, textarea, select, button, [href], [tabindex]:not([tabindex="-1"])',
        );
        const firstFocusable = focusableElements[0] as HTMLElement;
        if (firstFocusable) {
          // Small delay to ensure the dialog is fully rendered
          setTimeout(() => {
            firstFocusable.focus();
          }, 10);
        }
      }
    }, []);

    // Extract only ARIA attributes from dialogProps, excluding focus-related attributes
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { tabIndex, ...ariaProps } = dialogProps;

    return (
      <SurfaceContainer
        $hasBackdrop={hasBackdrop}
        $maxWidth={widthVariants[size]}
        data-testid="drawer-container"
        style={{
          '--sscds-drawer-offset': 'var(--sscds-space-6x)',
        }}
      >
        <Surface
          elevation={5}
          radius="lg"
          style={{ display: 'flex', width: '100%' }}
          hasBorder
        >
          <FocusScope contain restoreFocus>
            <BaseDrawer
              {...props}
              ref={mergedRef}
              className={cls(CLX_COMPONENT, className)}
              tabIndex={-1}
              {...ariaProps}
              {...focusProps}
            >
              <Header>
                <Inline align="center" stretch={StretchEnum.start}>
                  <Inline align="center" gap={SpaceSizes.md}>
                    {hasAdornment && <Adornment>{adornment}</Adornment>}
                    <TitleWrapper>
                      <Title size="md" {...titleProps}>
                        {title}
                      </Title>
                    </TitleWrapper>
                  </Inline>
                  <CloseButton
                    marginCompensation={SpaceSizes.md}
                    onClose={onClose}
                  />
                </Inline>
              </Header>
              <Content ref={contentRef}>{children}</Content>
              {hasFooter && <Footer>{footer}</Footer>}
            </BaseDrawer>
          </FocusScope>
        </Surface>
      </SurfaceContainer>
    );
  },
);

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      title,
      onClose,
      footer,
      size = DrawerSizes.md,
      adornment,
      hasBackdrop = true,
      children,
      ...props
    },
    ref,
  ) => {
    const { portalsContainerId } = useContext(DSContext);
    const { Portal } = usePortal({
      containerId: portalsContainerId,
      internalShowHide: false,
      autoRemoveContainer: false,
      clickOutsideToHide: hasBackdrop,
    });
    const drawerRef = useOuterClick<HTMLDivElement>(onClose);

    // Overlay behavior for backdrop interaction
    const overlayRef = useRef<HTMLDivElement>(null);
    const { overlayProps } = useOverlay(
      {
        isDismissable: hasBackdrop,
        isOpen: true,
        onClose: () => onClose({} as React.MouseEvent),
      },
      overlayRef,
    );

    const drawerProps = {
      size,
      ref: hasBackdrop ? mergeRefs<HTMLDivElement>(drawerRef, ref) : ref,
      adornment,
      footer,
      children,
      title,
      onClose,
      hasBackdrop,
      ...props,
    };

    useLockBodyScroll({ enabled: hasBackdrop });
    // if (hasBackdrop) {
    //   useLockBodyScroll();
    // }

    const drawerContent = hasBackdrop ? (
      <Overlay
        ref={overlayRef}
        data-testid="dialog-overlay"
        placement="right"
        {...overlayProps}
      >
        <DrawerBox {...drawerProps} />
      </Overlay>
    ) : (
      <DrawerBox {...drawerProps} />
    );

    return (
      <FloatingProvider>
        <Portal>
          <OverlayContainer>{drawerContent}</OverlayContainer>
        </Portal>
      </FloatingProvider>
    );
  },
);

export default Drawer;
