import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import usePortal from 'react-cool-portal';
import styled, { css } from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';
import cls from 'classnames';

import { DrawerProps } from './Drawer.types';
import { DrawerSizes } from './Drawer.enums';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Inline, Padbox, Surface } from '../layout';
import { Overlay } from '../_internal/BaseOverlay';
import {
  getColor,
  getDepth,
  getFontWeight,
  getSpace,
  pxToRem,
} from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { DSContext } from '../../theme/DSProvider/DSProvider';
import { CloseButton } from '../CloseButton';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { Text } from '../Text';
import { FloatingProvider } from '../../contexts/FloatingContext';

const widthVariants = {
  [DrawerSizes.md]: 480,
  [DrawerSizes.lg]: 720,
  [DrawerSizes.xl]: 960,
};

const Header = styled(Padbox)`
  border-bottom: 1px solid ${getColor('neutral.300')};
`;

const noBackdropStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${getDepth('modal')};
`;

const SurfaceContainer = styled.div<{
  $maxWidth: number;
  $hasBackdrop: boolean;
}>`
  height: calc(100% - ${getSpace('lgPlus')});
  max-width: ${({ $maxWidth }) => pxToRem($maxWidth)};
  margin: ${getSpace('mdPlus')};
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

const TitleWrapper = styled(Padbox)`
  overflow: hidden;
`;

/* stylelint-disable */
const Title = styled(Text).attrs({
  as: 'p',
  size: 'lg',
})`
  margin: 0;
  font-weight: ${getFontWeight('bold')};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
/* stylelint-enable */

const Content = styled(Padbox)`
  overflow-y: auto;
  flex-grow: 2;
`;

const Footer = styled.div`
  border-top: 1px solid ${getColor('neutral.300')};
  padding: ${getSpace('md')} ${getSpace('mdPlus')};
`;

const Adornment = styled(Padbox)`
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
      >
        <Surface
          background="white"
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
              <Padbox
                paddingSize={SpaceSizes.mdPlus}
                paddingType={PaddingTypes.squish}
              >
                <Inline align="center" stretch={StretchEnum.start}>
                  <Inline align="center" gap={SpaceSizes.md}>
                    {hasAdornment && <Adornment>{adornment}</Adornment>}
                    <TitleWrapper>
                      <Title id="ds-drawer-title">{title}</Title>
                    </TitleWrapper>
                  </Inline>
                  <CloseButton
                    marginCompensation={SpaceSizes.md}
                    onClose={onClose}
                  />
                </Inline>
              </Padbox>
            </Header>
            <Content paddingSize={SpaceSizes.mdPlus} paddingType="square">
              {children}
            </Content>
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

    return (
      <FloatingProvider>
        <Portal>
          {hasBackdrop ? (
            <Overlay data-testid="dialog-overlay" placement="right">
              <DrawerBox {...drawerProps} />
            </Overlay>
          ) : (
            <DrawerBox {...drawerProps} />
          )}
        </Portal>
      </FloatingProvider>
    );
  },
);

export default Drawer;

DrawerBox.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  adornment: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf(Object.values(DrawerSizes)),
  props: PropTypes.objectOf(PropTypes.oneOf([PropTypes.string])),
};
Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  adornment: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf(Object.values(DrawerSizes)),
  hasBackdrop: PropTypes.bool,
  className: PropTypes.string,
};
