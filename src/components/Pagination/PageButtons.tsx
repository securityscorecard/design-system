import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { unfold } from 'ramda';

import { PaginationItem, PaginationItemElipsis } from './PaginationItem';
import { PageButtonsProps } from './Pagination.types';

const generatePages = (start: number, end: number): number[] =>
  unfold((p) => (p > end ? false : [p, p + 1]), start);

export const calculatePagePositions: (
  currentPage: number,
  pageCount: number,
  positionsCount: number,
) => {
  showRightEllipsis: boolean;
  showLeftEllipsis: boolean;
  pages: number[];
} = (currentPage, pageCount, positionsCount) => {
  // number of fixed positions for edge sections
  // [POSITIONS - 3 (first+last + elipsis)]
  const threshold = positionsCount - 3;

  const startPage =
    // is at left edge section of pagination
    currentPage < threshold
      ? 2 // fixed, second page
      : // is at right edge section of pagination
      currentPage > pageCount - threshold
      ? pageCount - threshold
      : // this will count positions before current page in middle section
        // [current page - round up(POSITIONS - 4 (first+last+2 elipsis) - 1 (current page))]
        currentPage - Math.ceil((positionsCount - 4 - 1) / 2);
  const endPage =
    // is at left edge section of pagination
    currentPage < threshold
      ? positionsCount - 2
      : // is at right edge section of pagination
      currentPage > pageCount - threshold
      ? pageCount - 1 // fixed, second last page
      : // this will count positions after current page in middle section
        // [current page - round down(POSITIONS - 4 (first+last+2 elipsis) - 1 (current page))]
        currentPage + Math.floor((positionsCount - 4 - 1) / 2);

  const pages = generatePages(startPage, endPage);

  return {
    showLeftEllipsis: startPage > 2,
    showRightEllipsis: endPage < pageCount - 1,
    pages,
  };
};

const formatNumber = (val: number) =>
  new Intl.NumberFormat('en-US').format(val);

const PageButtons: React.FC<PageButtonsProps> = ({
  currentPage,
  pageCount,
  onChange,
  positions,
  renderItem = PaginationItem,
}) => {
  const { pages, showLeftEllipsis, showRightEllipsis } = useMemo(
    () => calculatePagePositions(currentPage, pageCount, positions),
    [currentPage, pageCount, positions],
  );

  if (pageCount <= positions) {
    return (
      <>
        {generatePages(1, pageCount).map((page) =>
          renderItem({
            key: `page-${page}`,
            page,
            isCurrent: page === currentPage,
            onClick: () => onChange(page),
            children: formatNumber(page),
          }),
        )}
      </>
    );
  }

  return (
    <>
      {renderItem({
        page: 1,
        isCurrent: currentPage === 1,
        onClick: () => onChange(1),
        children: <>1</>,
      })}
      {showLeftEllipsis && <PaginationItemElipsis />}
      {pages.map((page) =>
        renderItem({
          key: page,
          page,
          isCurrent: currentPage === page,
          onClick: () => onChange(page),
          children: formatNumber(page),
        }),
      )}
      {showRightEllipsis && <PaginationItemElipsis />}
      {renderItem({
        page: pageCount,
        isCurrent: currentPage === pageCount,
        onClick: () => onChange(pageCount),
        children: formatNumber(pageCount),
      })}
    </>
  );
};

PageButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  positions: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PageButtons;
