import type { FC } from 'react';
import type { PaginationProps } from './Pagination.types';

import PropTypes from 'prop-types';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { PaginationItem } from './PaginationItem';
import PageButtons from './PageButtons';
import { Inline } from '../layout';
import { SpaceSizes } from '../../theme';
import { CLX_COMPONENT } from '../../theme/constants';

const Pagination: FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
  pageButtonsCount = 8,
  renderItem = PaginationItem,
}) => (
  <Inline className={CLX_COMPONENT} gap={SpaceSizes.sm} justify="center">
    {renderItem &&
      renderItem({
        'aria-label': 'Previous page',
        page: currentPage - 1,
        isDisabled: currentPage - 1 === 0,
        isShrinked: true,
        onClick: () => onPageChange(currentPage - 1),
        children: <Icon name={SSCIconNames.longArrowLeft} />,
      })}
    {pageButtonsCount !== 0 && (
      <PageButtons
        currentPage={currentPage}
        pageCount={pageCount}
        positions={pageButtonsCount}
        renderItem={renderItem}
        onChange={onPageChange}
      />
    )}

    {renderItem &&
      renderItem({
        'aria-label': 'Next page',
        page: currentPage + 1,
        isDisabled: currentPage + 1 > pageCount,
        isShrinked: true,
        onClick: () => onPageChange(currentPage + 1),
        children: <Icon name={SSCIconNames.longArrowRight} />,
      })}
  </Inline>
);

Pagination.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Number of current page. Starts with 1.
   */
  currentPage: PropTypes.number.isRequired,
  /**
   * Callback called when pagination button is clicked.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * Number of page positions. This also includes ellipsis positions if visible.
   */
  pageButtonsCount: PropTypes.number,
  /**
   * Total number of pages.
   */
  pageCount: PropTypes.number.isRequired,
  /**
   * Custom pagination item render function
   */
  renderItem: PropTypes.func,
} as any;

export default Pagination;
