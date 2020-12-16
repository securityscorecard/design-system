import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { ScrollToTop } from '../ScrollToTop';
import { FullscreenModalProps } from '../FullscreenModal.types';
import ModalContext from '../Context/Context';
import { useStickyFooter } from '../hooks/useStickyFooter';

const BaseStickyFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${pxToRem(10, 0)};
  background-color: ${getColor('graphite5H')};
  border-top: 1px solid ${getColor('graphiteHB')};
`;
const BaseFooter = styled.footer`
  background-color: ${getColor('graphite5H')};
  border-top: 1px solid ${getColor('graphiteHB')};
  padding-top: ${pxToRem(24)};
  margin-top: ${pxToRem(40)};
`;

const FooterInnerContainer = styled.div<Pick<FullscreenModalProps, 'size'>>`
  width: ${({ size, theme }) => pxToRem(theme.modals.size[size])};
  margin: 0 auto;
`;

const Footer: React.FC = ({ children }) => {
  const { size, modalRef } = useContext(ModalContext);
  const modalFooterRef = useRef(null);

  const { isFixed, shouldShowScrollToTopButton } = useStickyFooter(
    modalRef,
    modalFooterRef,
  );

  const scrollToTop = () => {
    modalRef.current.scrollTo(0, 0);
  };

  return (
    <>
      {isFixed && (
        <BaseStickyFooter as="div">
          <FooterInnerContainer size={size}>{children}</FooterInnerContainer>
        </BaseStickyFooter>
      )}
      <BaseFooter ref={modalFooterRef}>
        {children}
        {shouldShowScrollToTopButton && (
          <FlexContainer
            alignItems="center"
            justifyContent="center"
            margin={{ vertical: 1.2 }}
          >
            <ScrollToTop onClick={scrollToTop} />
          </FlexContainer>
        )}
      </BaseFooter>
    </>
  );
};

export default Footer;
