import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { pxToRem } from '../../../../utils';
import { FlexContainer } from '../../../FlexContainer';
import { Spinner } from '../../../Spinner';
import { FooterProps } from './Footer.types';
import GoToPage from './GoToPage';
import { Pagination } from './Pagination';

const StyledFooter = styled(FlexContainer)`
  padding: ${pxToRem(16)};
  flex: 0 0 ${pxToRem(64)};
  height: ${pxToRem(64)};
`;
const LoadingContainer = styled.div`
  padding: ${pxToRem(8, 24, 8, 8)};
`;
const PaginationContainer = styled.div`
  flex: 1 0 auto;
`;

const Footer: React.FC<FooterProps> = ({
  pageCount,
  pageIndex,
  onGotoPage,
  isDataLoading = false,
  hasPagination = true,
}) => {
  const handlePageChange = (page) => onGotoPage(page - 1);

  return (
    <StyledFooter as="footer" data-testid="footer" flexDirection="row">
      <LoadingContainer>
        {isDataLoading && (
          <Spinner
            borderWidth={2}
            height={16}
            horizontalMargin={0}
            verticalMargin={0}
            width={16}
            dark
          />
        )}
      </LoadingContainer>
      {hasPagination && (
        <>
          <PaginationContainer>
            <Pagination
              currentPage={pageIndex + 1}
              pageCount={pageCount}
              onPageChange={handlePageChange}
            />
          </PaginationContainer>
          <GoToPage pageCount={pageCount} onPageChange={handlePageChange} />
        </>
      )}
    </StyledFooter>
  );
};

Footer.propTypes = {
  pageCount: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  onGotoPage: PropTypes.func.isRequired,
  hasPagination: PropTypes.bool,
  isDataLoading: PropTypes.bool,
};

export default Footer;
