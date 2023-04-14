import type { FC } from 'react';
import type { PaginationProps } from './Pagination.types';

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

export default Pagination;
