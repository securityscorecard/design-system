import { IconButtonProps } from '../../IconButton/IconButton.types';

export interface NavButtonProps extends IconButtonProps {
  isDisabled?: boolean;
}
export interface PaginationProps {
  pageCount: number;
  numPageButtons: number;
  isLoading: boolean;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageIndex: number;
  onGoToPage: (number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}
