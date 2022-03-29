import React from 'react';
import PropTypes from 'prop-types';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Icon } from '../Icon';
import { PaginationItem } from './PaginationItem';
import PageButtons from './PageButtons';
import { Inline } from '../layout';
import { PaginationProps } from './Pagination.types';
import { SpaceSizes } from '../../theme';

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
  pageButtonsCount = 8,
}) => (
  <Inline gap={SpaceSizes.sm} justify="center">
    <PaginationItem
      aria-label="Previous page"
      isDisabled={currentPage - 1 === 0}
      isShrinked
      onClick={() => onPageChange(currentPage - 1)}
    >
      <Icon name={SSCIconNames.longArrowLeft} />
    </PaginationItem>
    <PageButtons
      currentPage={currentPage}
      pageCount={pageCount}
      positions={pageButtonsCount}
      onChange={onPageChange}
    />
    <PaginationItem
      aria-label="Next page"
      isDisabled={currentPage + 1 > pageCount}
      isShrinked
      onClick={() => onPageChange(currentPage + 1)}
    >
      <Icon name={SSCIconNames.longArrowRight} />
    </PaginationItem>
  </Inline>
);

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageButtonsCount: PropTypes.number,
};

export default Pagination;
