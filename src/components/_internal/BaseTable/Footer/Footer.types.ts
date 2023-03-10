import type { OnPageChangeFn } from '../../../Pagination/Pagination.types';

export interface FooterProps {
  pageCount: number;
  pageButtonsCount?: number;
  pageIndex: number;
  isDataLoading?: boolean;
  onGotoPage: OnPageChangeFn;
  hasPagination: boolean;
}
