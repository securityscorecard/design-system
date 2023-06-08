import type { FooterProps } from './Footer.types';

import styled from 'styled-components';

import { pxToRem } from '../../../../utils';
import { Padbox } from '../../../layout';
import { Spinner } from '../../../Spinner';
import GoToPage from './GoToPage';
import { Pagination } from '../../../Pagination';
import { SpaceSizes } from '../../../../theme';

const StyledFooter = styled(Padbox)`
  display: flex;
  flex: 0 0 ${pxToRem(64)};
  height: ${pxToRem(64)};
`;
const LoadingContainer = styled.div`
  padding: ${pxToRem(8, 24, 8, 8)};
`;
const PaginationContainer = styled.div`
  flex: 1 0 auto;
`;

const Footer = ({
  pageCount,
  pageButtonsCount,
  pageIndex,
  onGotoPage,
  isDataLoading = false,
  hasPagination = true,
}: FooterProps) => {
  const handlePageChange = (page) => onGotoPage(page - 1);

  return (
    <StyledFooter
      as="footer"
      data-testid="footer"
      flexDirection="row"
      paddingSize={SpaceSizes.md}
    >
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
              pageButtonsCount={pageButtonsCount}
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

export default Footer;
