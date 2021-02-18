/* eslint-disable react/boolean-prop-naming */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { FlexContainer } from '../../FlexContainer';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import { Spinner } from '../../Spinner';
import { Label } from '../../forms/Label';
import { PaginationProps } from './Pagination.types';
import PageButton, { ActivePage } from './PageButton';
import NavButton from './NavButton';
import { StyledNumber } from '../../Filters/components/Number/Number';

const MAX_PAGE_BUTTONS = 8;

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
  gotoPage,
  previousPage,
  nextPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  pageIndex,
  isLoading,
}) => {
  const pages = Array.from(Array(pageCount), (_, i) => i + 1);

  const [visiblePageButtons, setVisiblePageButtons] = useState(pages);
  const [isFirstEllipsisVisible, setIsFirstEllipsisVisible] = useState(false);
  const [isLastEllipsisVisible, setIsLastEllipsisVisible] = useState(false);
  const [isInputPageInvalid, setIsInputPageInvalid] = useState(false);

  const onChangePageNumber = (e) => {
    const pageNumber = Number(e.target.value);
    if (pageNumber <= pageCount && pageNumber > 0) {
      setIsInputPageInvalid(false);
      gotoPage(pageNumber - 1);
    } else {
      setIsInputPageInvalid(true);
    }
  };

  useEffect(() => {
    if (pageCount > MAX_PAGE_BUTTONS) {
      if (pageIndex > MAX_PAGE_BUTTONS - 3) {
        setIsFirstEllipsisVisible(true);
      }
      if (pageIndex <= MAX_PAGE_BUTTONS - 3) {
        setIsFirstEllipsisVisible(false);
        if (!visiblePageButtons.includes(pageIndex)) {
          setVisiblePageButtons([2, 3, 4, 5, 6]);
        }
      }

      if (pageIndex < pageCount - MAX_PAGE_BUTTONS + 3) {
        setIsLastEllipsisVisible(true);
      }
      if (
        pageIndex >= MAX_PAGE_BUTTONS - 3 &&
        pageIndex < pageCount - MAX_PAGE_BUTTONS + 3
      ) {
        setIsLastEllipsisVisible(true);
        if (!visiblePageButtons.includes(pageIndex + 1)) {
          setVisiblePageButtons([
            pageIndex,
            pageIndex + 1,
            pageIndex + 2,
            pageIndex + 3,
          ]);
        }
      }

      if (pageIndex >= pageCount - MAX_PAGE_BUTTONS + 2) {
        setIsLastEllipsisVisible(false);
        setVisiblePageButtons([
          pageCount - 5,
          pageCount - 4,
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, pageCount]);

  const renderPageButton = (page) => {
    return pageIndex === page - 1 ? (
      <ActivePage>{page}</ActivePage>
    ) : (
      <PageButton key={page} onClick={() => gotoPage(page - 1)}>
        {page}
      </PageButton>
    );
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
          onClick={() => previousPage()}
        />
        {pageCount <= MAX_PAGE_BUTTONS ? (
          pages.map((page) => renderPageButton(page))
        ) : (
          <>
            {renderPageButton(1)}
            {isFirstEllipsisVisible && <Ellipsis> ... </Ellipsis>}

            {visiblePageButtons.map((page) => renderPageButton(page))}

            {isLastEllipsisVisible && <Ellipsis> ... </Ellipsis>}
            {renderPageButton(pageCount)}
          </>
        )}
        <NavButton
          iconName={SSCIconNames.longArrowRight}
          isDisabled={!canNextPage}
          label="next page"
          onClick={() => nextPage()}
        />
      </FlexContainer>
      <FlexContainer alignItems="end" flexShrink={1}>
        <PageInputLabel> Go to page </PageInputLabel>
        <PageInput
          aria-label="Input"
          isInvalid={isInputPageInvalid}
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
  gotoPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;
