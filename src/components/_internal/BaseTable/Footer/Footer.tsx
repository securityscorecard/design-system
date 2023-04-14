import type { FC } from 'react';
import type { FooterProps } from './Footer.types';

import styled from 'styled-components';

import { getColor, pxToRem } from '../../../../utils';
import { Padbox } from '../../../layout';
import { Spinner } from '../../../Spinner';
import GoToPage from './GoToPage';
import { Pagination } from '../../../Pagination';
import { SpaceSizes } from '../../../../theme';
import { PaddingTypes } from '../../../layout/Padbox/Padbox.enums';

const StyledFooter = styled(Padbox)`
  display: flex;
  align-items: center;
  border-top: 1px solid ${getColor('neutral.400')};
`;
const LoadingContainer = styled.div`
  padding: ${pxToRem(8, 24, 8, 8)};
`;
const PaginationContainer = styled.div`
  flex: 1 0 auto;
`;

const Footer: FC<FooterProps> = ({
  pageCount,
  pageButtonsCount,
  pageIndex,
  onGotoPage,
  isDataLoading = false,
  hasPagination = true,
}) => {
  const handlePageChange = (page) => onGotoPage(page - 1);

  return (
    <StyledFooter
      as="footer"
      data-testid="footer"
      flexDirection="row"
      paddingSize={SpaceSizes.md}
      paddingType={PaddingTypes.squish}
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
