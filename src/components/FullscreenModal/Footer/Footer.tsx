import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { ScrollToTopButton } from '../ScrollToTopButton';
import { useStickyFooter } from '../hooks/useStickyFooter';
import { Col, Container, Row } from '../../layout';
import { FooterProps } from './Footer.types';

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
  border-top: 1px solid ${getColor('graphiteHB')};
  padding-top: ${pxToRem(24)};
  margin-top: ${pxToRem(40)};
`;

const Footer: React.FC<FooterProps> = ({
  children,
  width,
  offset,
  modalRef,
  scrollToTopButtonLabel,
}) => {
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
          <Container>
            <Row>
              <Col cols={width} offset={offset}>
                {children}
              </Col>
            </Row>
          </Container>
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
            <ScrollToTopButton
              label={scrollToTopButtonLabel}
              onClick={scrollToTop}
            />
          </FlexContainer>
        )}
      </BaseFooter>
    </>
  );
};

Footer.propTypes = {
  width: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  modalRef: PropTypes.exact({
    current: PropTypes.instanceOf(HTMLElement),
  }).isRequired,
  scrollToTopButtonLabel: PropTypes.string,
};

export default Footer;
