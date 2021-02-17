/* eslint-disable react/boolean-prop-naming */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { PaginationProps } from './Pagination.types';
import PageButton from './PageButton';
import NavButton from './NavButton';
import { SSCIconNames } from '../../../theme/icons/icons.enums';

const MAX_PAGE_BUTTONS = 8;

const PaginationWrapper = styled.div`
  display: inline-block;
  position: relative;
  background-color: ${getColor('graphite3H')};
  padding: ${pxToRem(10)};
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

const Pagination: React.FC<PaginationProps> = ({
  gotoPage,
  previousPage,
  nextPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  pageIndex,
}) => {
  const pages = Array.from(Array(pageCount), (_, i) => i + 1);

  const [isFirstEllipsisVisible, setIsFirstEllipsisVisible] = useState(false);
  const [isLastEllipsisVisible, setIsLastEllipsisVisible] = useState(false);
  const [visiblePageButtons, setVisiblePageButtons] = useState(pages);

  const onChangePageNumber = (e) => {
    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
    gotoPage(pageNumber);
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

      if (pageIndex >= pageCount - MAX_PAGE_BUTTONS + 3) {
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

  return (
    <PaginationWrapper>
      <NavButton
        iconName={SSCIconNames.longArrowLeft}
        isDisabled={!canPreviousPage}
        label="backOnePage"
        onClick={() => previousPage()}
      >
        {' '}
        back{' '}
      </NavButton>
      {pageCount <= MAX_PAGE_BUTTONS ? (
        pages.map((page) => {
          return (
            <PageButton
              key={page}
              isActive={pageIndex + 1 === page}
              onClick={() => gotoPage(page - 1)}
            >
              {page}
            </PageButton>
          );
        })
      ) : (
        <>
          <PageButton isActive={pageIndex === 0} onClick={() => gotoPage(0)}>
            1
          </PageButton>
          {isFirstEllipsisVisible && <Ellipsis> ... </Ellipsis>}
          {visiblePageButtons.map((page) => {
            return (
              <PageButton
                key={page}
                isActive={pageIndex + 1 === page}
                onClick={() => gotoPage(page - 1)}
              >
                {page}
              </PageButton>
            );
          })}
          {isLastEllipsisVisible && <Ellipsis> ... </Ellipsis>}
          <PageButton
            isActive={pageIndex === pageCount - 1}
            onClick={() => gotoPage(pageCount - 1)}
          >
            {pageCount}
          </PageButton>
        </>
      )}
      <NavButton
        iconName={SSCIconNames.longArrowRight}
        isDisabled={!canNextPage}
        label="forwardOnePage"
        onClick={() => nextPage()}
      />
      <input
        defaultValue={pageIndex + 1}
        type="number"
        onChange={(event) => {
          onChangePageNumber(event);
        }}
      />
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;
