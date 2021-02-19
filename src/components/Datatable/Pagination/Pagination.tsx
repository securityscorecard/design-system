/* eslint-disable react/boolean-prop-naming */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { unfold } from 'ramda';

import { getColor, pxToRem } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Spinner } from '../../Spinner';
import { Label } from '../../forms/Label';
import { PaginationProps } from './Pagination.types';
import PageButton, { ActivePage } from './PageButton';
import NavButton from './NavButton';
import { StyledNumber } from '../../Filters/components/Number/Number';

const PaginationWrapper = styled(FlexContainer)`
  background-color: ${getColor('graphite3H')};
  padding: ${pxToRem(16)};
`;

const SpinnerContainer = styled(FlexContainer)`
  min-width: ${pxToRem(48)};
`;

const Ellipsis = styled.div`
  display: inline-block;
  width: ${pxToRem(48)};
  height: ${pxToRem(32)};
  padding: ${pxToRem(8, 16)};
  margin: ${pxToRem(0, 4)};
  color: ${getColor('graphite2B')};
  background-color: ${getColor('transparent')};
`;

const PageInputLabel = styled(Label)`
  margin: ${pxToRem(6, 16)};
`;
const PageInput = styled(StyledNumber)`
  width: ${pxToRem(72)};
  height: ${pxToRem(32)};
  padding: ${pxToRem(8, 16)};
`;

const Pagination: React.FC<PaginationProps> = ({
  onGoToPage,
  onPreviousPage,
  onNextPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  pageIndex,
  isLoading,
  numPageButtons = 8,
}) => {
  const generatePages = (start, end) =>
    unfold((p) => (p > end ? false : [p, p + 1]), start);

  const currentPage = pageIndex + 1;

  const showLeftEllipsis = currentPage > numPageButtons - 3;
  const showRightEllipsis = currentPage < pageCount - (numPageButtons - 4);

  const threshold = numPageButtons - 3;

  const startPage =
    currentPage <= threshold
      ? 2
      : currentPage > pageCount - threshold
      ? pageCount - threshold
      : currentPage - Math.ceil((numPageButtons - 4 - 1) / 2);
  const endPage =
    currentPage <= threshold
      ? numPageButtons - 2
      : currentPage > pageCount - threshold
      ? pageCount - 1
      : currentPage + Math.floor((numPageButtons - 4 - 1) / 2);

  const middlePageButtons = generatePages(startPage, endPage);

  const renderPageButton = (page) => {
    return currentPage === page ? (
      <ActivePage key={page}>{page}</ActivePage>
    ) : (
      <PageButton key={page} onClick={() => onGoToPage(page - 1)}>
        {page}
      </PageButton>
    );
  };

  const onChangePageNumber = (e) => {
    const pageNumber = Number(e.target.value);
    if (pageNumber <= pageCount && pageNumber > 0) {
      onGoToPage(pageNumber - 1);
    }
  };

  return (
    <PaginationWrapper>
      <SpinnerContainer flexShrink={1}>
        {isLoading && (
          <Spinner
            borderWidth={2}
            height={16}
            horizontalMargin={14}
            verticalMargin={8}
            width={16}
            dark
          />
        )}
      </SpinnerContainer>
      <FlexContainer flexGrow={1} justifyContent="center">
        <NavButton
          iconName={SSCIconNames.longArrowLeft}
          isDisabled={!canPreviousPage}
          label="previous page"
          onClick={() => onPreviousPage()}
        />
        {renderPageButton(1)}
        {showLeftEllipsis && <Ellipsis> ... </Ellipsis>}

        {middlePageButtons.map((page) => renderPageButton(page))}

        {showRightEllipsis && <Ellipsis> ... </Ellipsis>}
        {renderPageButton(pageCount)}

        <NavButton
          iconName={SSCIconNames.longArrowRight}
          isDisabled={!canNextPage}
          label="next page"
          onClick={() => onNextPage()}
        />
      </FlexContainer>
      <FlexContainer alignItems="end" flexShrink={1}>
        <PageInputLabel> Go to page </PageInputLabel>
        <PageInput
          aria-label="Input"
          placeholder="#"
          type="number"
          onChange={(event) => {
            onChangePageNumber(event);
          }}
        />
      </FlexContainer>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
  onGoToPage: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  numPageButtons: PropTypes.number,
};

export default Pagination;
