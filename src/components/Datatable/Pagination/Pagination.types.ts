import { IconButtonProps } from '../../IconButton/IconButton.types';

export interface NavButtonProps extends IconButtonProps {
  isDisabled?: boolean;
}
export interface PaginationProps {
  pageCount: number;
  isLoading: boolean;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageIndex: number;
  gotoPage: (number) => void;
  previousPage: () => void;
  nextPage: () => void;
}
