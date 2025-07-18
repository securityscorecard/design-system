import { useMemo } from 'react';
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

const PageButtons = ({
  currentPage,
  pageCount,
  onChange,
  positions,
  renderItem = PaginationItem,
}: PageButtonsProps) => {
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
            'aria-label': `Go to page ${page}. Total pages: ${pageCount}.`,
            page,
            isCurrent: page === currentPage,
            onClick: () => onChange(page),
            children: formatNumber(page),
          }),
        )}
      </>
    );
  }

  return positions !== 1 ? (
    <>
      {renderItem({
        'aria-label':
          currentPage === 1
            ? `Current page, page 1. Total pages ${pageCount}.`
            : `Go to page 1. Total pages ${pageCount}.`,
        page: 1,
        isCurrent: currentPage === 1,
        onClick: () => onChange(1),
        children: <>1</>,
      })}
      {showLeftEllipsis && <PaginationItemElipsis aria-hidden="true" />}
      {pages.map((page) =>
        renderItem({
          key: String(page),
          'aria-label':
            currentPage === page
              ? `Current page, page ${page}. Total pages ${pageCount}.`
              : `Go to page ${page}. Total pages ${pageCount}.`,
          page,
          isCurrent: currentPage === page,
          onClick: () => onChange(page),
          children: formatNumber(page),
        }),
      )}
      {showRightEllipsis && <PaginationItemElipsis aria-hidden="true" />}
      {renderItem({
        'aria-label':
          currentPage === pageCount
            ? `Current page, page ${pageCount}. Total pages ${pageCount}.`
            : `Go to page ${pageCount}. Total pages ${pageCount}.`,
        page: pageCount,
        isCurrent: currentPage === pageCount,
        onClick: () => onChange(pageCount),
        children: formatNumber(pageCount),
      })}
    </>
  ) : (
    <>
      {renderItem({
        key: String(currentPage),
        'aria-label': `Current page, page ${currentPage}. Total pages ${pageCount}.`,
        page: currentPage,
        isCurrent: true,
        onClick: () => onChange(currentPage),
        children: formatNumber(currentPage),
      })}
    </>
  );
};

export default PageButtons;
