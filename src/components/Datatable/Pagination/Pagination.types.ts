import { ButtonProps } from '../../Button/Button.types';
import { IconButtonProps } from '../../IconButton/IconButton.types';

export interface PageButtonProps extends ButtonProps {
  isActive?: boolean;
  variant: 'text';
}
export interface NavButtonProps extends IconButtonProps {
  isDisabled?: boolean;
}
export interface PaginationProps {
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageIndex: boolean;
  pageOptions: { length: number };
  gotoPage: () => void;
  previousPage: () => void;
  nextPage: () => void;
}
