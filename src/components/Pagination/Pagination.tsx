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
  renderItem = PaginationItem,
}) => (
  <Inline gap={SpaceSizes.sm} justify="center">
    {renderItem &&
      renderItem({
        'aria-label': 'Previous page',
        page: currentPage - 1,
        isDisabled: currentPage - 1 === 0,
        isShrinked: true,
        onClick: () => onPageChange(currentPage - 1),
        children: <Icon name={SSCIconNames.longArrowLeft} />,
      })}
    <PageButtons
      currentPage={currentPage}
      pageCount={pageCount}
      positions={pageButtonsCount}
      renderItem={renderItem}
      onChange={onPageChange}
    />
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

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageButtonsCount: PropTypes.number,
  renderItem: PropTypes.func,
};

export default Pagination;
