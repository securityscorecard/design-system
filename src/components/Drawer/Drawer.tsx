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
import { H4 } from '../typography';
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

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: ${getDepth('modal')};
`;

const NoOverlay = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
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
  max-width: 36px;
  max-height: 36px;
`;

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      title,
      onClose,
      footer,
      size = DrawerSizes.md,
      adornment,
      hasNoBackdrop,
      dataTestId,
      children,
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
    const hasAdornment = isNotUndefined(adornment);

    const drawerRef = useOuterClick<HTMLDivElement>(onClose);

    useLockBodyScroll();
    const DrawerBox = () => (
      <BaseDrawer
        ref={mergeRefs<HTMLDivElement>(drawerRef, ref)}
        $maxWidth={widthVariants[size]}
        data-testid={dataTestId}
      >
        <Header>
          <Inline stretch={StretchEnum.start}>
            <Padbox paddingSize={SpaceSizes.lg} paddingType="squish">
              <Inline align="center" gap={SpaceSizes.md}>
                {hasAdornment && <Adornment>{adornment}</Adornment>}
                {isNotUndefined(title) && (
                  <TitleWrapper>
                    <Title>{title}</Title>
                  </TitleWrapper>
                )}
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
    return (
      <Portal>
        {hasNoBackdrop ? (
          <NoOverlay>{DrawerBox()}</NoOverlay>
        ) : (
          <Overlay>{DrawerBox()}</Overlay>
        )}
      </Portal>
    );
  },
);

export default Drawer;

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  adornment: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf(Object.values(DrawerSizes)),
  title: PropTypes.string,
  hasNoBackdrop: PropTypes.bool,
  dataTestId: PropTypes.string,
};
