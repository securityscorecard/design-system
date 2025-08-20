import { forwardRef, useContext } from 'react';
import usePortal from 'react-cool-portal';
import styled, { css } from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';
import { FocusTrap } from 'focus-trap-react';

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

    return (
      <SurfaceContainer
        $hasBackdrop={hasBackdrop}
        $maxWidth={widthVariants[size]}
        role="dialog"
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
          <BaseDrawer
            ref={ref}
            aria-labelledby="ds-drawer-title"
            className={cls(CLX_COMPONENT, className)}
            {...props}
          >
            <Header>
              <Inline align="center" stretch={StretchEnum.start}>
                <Inline align="center" gap={SpaceSizes.md}>
                  {hasAdornment && <Adornment>{adornment}</Adornment>}
                  <TitleWrapper>
                    <Title id="ds-drawer-title" size="md">
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
            <Content>{children}</Content>
            {hasFooter && <Footer>{footer}</Footer>}
          </BaseDrawer>
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
      clickOutsideToHide = false,
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
      clickOutsideToHide: hasBackdrop || clickOutsideToHide,
      escToHide: true,
      onHide: onClose,
    });
    const drawerRef = useOuterClick<HTMLDivElement>(onClose);

    const drawerProps = {
      size,
      ref:
        hasBackdrop || clickOutsideToHide
          ? mergeRefs<HTMLDivElement>(drawerRef, ref)
          : ref,
      adornment,
      footer,
      children,
      title,
      onClose,
      hasBackdrop,
      ...props,
    };

    useLockBodyScroll({ enabled: hasBackdrop });

    return (
      <FloatingProvider>
        <Portal>
          <FocusTrap
            focusTrapOptions={{
              initialFocus: false,
              fallbackFocus: () => {
                const drawer = document.querySelector('[role="dialog"]');
                return drawer as HTMLElement;
              },
              clickOutsideDeactivates: hasBackdrop || clickOutsideToHide,
              escapeDeactivates: true,
              allowOutsideClick: true,
            }}
          >
            {hasBackdrop ? (
              <Overlay data-testid="dialog-overlay" placement="right">
                <DrawerBox {...drawerProps} />
              </Overlay>
            ) : (
              <DrawerBox {...drawerProps} />
            )}
          </FocusTrap>
        </Portal>
      </FloatingProvider>
    );
  },
);

export default Drawer;
