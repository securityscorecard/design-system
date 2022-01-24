import { OnPageChangeFn } from '../../../Pagination/Pagination.types';

export interface FooterProps {
  pageCount: number;
  pageIndex: number;
  isDataLoading?: boolean;
  onGotoPage: OnPageChangeFn;
  hasPagination: boolean;
}
