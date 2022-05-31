import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import usePortal from 'react-cool-portal';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { DrawerProps } from './Drawer.types';
import { DrawerSizes } from './Drawer.enums';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Inline, Padbox } from '../layout';
import { H4 } from '../typographyLegacy';
import { Overlay } from '../_internal/BaseOverlay';
import { getColor, getDepth, pxToRem } from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { DSContext } from '../../theme/DSProvider/DSProvider';
import { CloseButton } from '../CloseButton';
import { StretchEnum } from '../layout/Inline/Inline.enums';

const widthVariants = {
  [DrawerSizes.sm]: 360,
  [DrawerSizes.md]: 480,
  [DrawerSizes.lg]: 720,
  [DrawerSizes.xl]: 960,
};

const DrawerWrapper = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${getDepth('modal')};
`;

const Header = styled(Padbox)`
  border-bottom: 1px solid ${getColor('neutral.500')};
`;

const BaseDrawer = styled.div<{ $maxWidth: number }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: ${({ $maxWidth }) => pxToRem($maxWidth)};
  background-color: ${getColor('neutral.0')};
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled(Padbox)`
  overflow: hidden;
`;

/* stylelint-disable */
const Title = styled(H4)`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
/* stylelint-enable */

const Content = styled(Padbox)`
  overflow-y: auto;
  flex-grow: 2;
`;

const Footer = styled(Padbox)`
  border-top: 1px solid ${getColor('neutral.500')};
`;

const Adornment = styled(Padbox)`
  max-width: ${pxToRem(36)};
  max-height: ${pxToRem(36)};
`;

const DrawerBox = forwardRef<HTMLDivElement, DrawerProps>(
  ({ size, props, adornment, children, footer, title, onClose }, ref) => {
    const hasFooter = isNotUndefined(footer);
    const hasAdornment = isNotUndefined(adornment);

    return (
      <BaseDrawer
        ref={ref}
        $maxWidth={widthVariants[size]}
        aria-labelledby="ds-drawer-title"
        role="dialog"
        {...props}
      >
        <Header>
          <Inline stretch={StretchEnum.start}>
            <Padbox paddingSize={SpaceSizes.lg} paddingType="squish">
              <Inline align="center" gap={SpaceSizes.md}>
                {hasAdornment && <Adornment>{adornment}</Adornment>}
                <TitleWrapper>
                  <Title id="ds-drawer-title">{title}</Title>
                </TitleWrapper>
              </Inline>
            </Padbox>
            <CloseButton
              marginCompensation={SpaceSizes.none}
              onClose={onClose}
            />
          </Inline>
        </Header>
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
      </BaseDrawer>
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
    });
    const drawerRef = useOuterClick<HTMLDivElement>(onClose);

    const drawerProps = {
      size,
      ref: mergeRefs<HTMLDivElement>(drawerRef, ref),
      adornment,
      footer,
      children,
      title,
      onClose,
      ...props,
    };

    useLockBodyScroll({ enabled: hasBackdrop });

    return (
      <Portal>
        {hasBackdrop ? (
          <Overlay placement="right">
            <DrawerBox {...drawerProps} />
          </Overlay>
        ) : (
          <DrawerWrapper>
            <DrawerBox {...drawerProps} />
          </DrawerWrapper>
        )}
      </Portal>
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
};
