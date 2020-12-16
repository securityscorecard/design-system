import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { Button } from '../../Button';
import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
} from '../../Button/Button.enums';
import { FlexContainer } from '../../FlexContainer';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../Icon/Icon.enums';
import { H2, H3 } from '../../typography';
import ModalContext from '../Context/Context';
import { FullscreenModalProps } from '../FullscreenModal.types';
import { useStickyHeader } from '../hooks/useStickyHeader';

const BaseStickyHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${getColor('graphite5H')};
  border-bottom: 1px solid ${getColor('graphiteHB')};
`;

const BaseHeader = styled.header`
  padding: ${pxToRem(56, 0, 24)};
`;

const HeaderInnerContainer = styled(FlexContainer)<
  Pick<FullscreenModalProps, 'size'>
>`
  width: ${({ size, theme }) => pxToRem(theme.modals.size[size])};
  margin: 0 auto;
`;

const Header: React.FC = ({ children }) => {
  const { handleClose, modalRef, size } = useContext(ModalContext);
  const modalHeaderRef = useRef(null);

  const { isFixed } = useStickyHeader(modalRef, modalHeaderRef);

  return (
    <>
      {isFixed && (
        <BaseStickyHeader as="div">
          <HeaderInnerContainer
            alignItems="center"
            justifyContent="space-between"
            size={size}
          >
            <H3 as="h2" margin="none" padding={{ vertical: 0.75 }}>
              {children}
            </H3>
            <Button
              color={ButtonColors.secondary}
              size={ButtonSizes.lg}
              variant={ButtonVariants.text}
              onClick={handleClose}
            >
              <Icon aria-label="Close modal window" name={SSCIconNames.times} />
            </Button>
          </HeaderInnerContainer>
        </BaseStickyHeader>
      )}
      <BaseHeader ref={modalHeaderRef}>
        <H2 margin="none">{children}</H2>
      </BaseHeader>
    </>
  );
};

export default Header;
