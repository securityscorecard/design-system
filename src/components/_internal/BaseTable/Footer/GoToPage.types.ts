import { OnPageChangeFn } from '../../../Pagination/Pagination.types';

export interface GoToPageProps {
  pageCount: number;
  onPageChange: OnPageChangeFn;
}
