import { ReactNode } from 'react';

export type OnPageChangeFn = (page: number) => void;

export type customRenderItem = (
  props: PaginationItemProps & React.HTMLProps<HTMLButtonElement>,
) => ReactNode;
export interface PageButtonsProps {
  currentPage: number;
  pageCount: number;
  onChange: (page: number) => void;
  positions: number;
  renderItem?: customRenderItem;
}
export interface PaginationItemProps {
  isDisabled?: boolean;
  isCurrent?: boolean;
  isShrinked?: boolean;
  page?: number;
  onClick: () => void;
  children: ReactNode;
  key?: string;
}

export interface PaginationProps {
  /**
   * Total number of pages.
   */
  pageCount: number;
  /**
   * Number of current page. Starts with 1.
   */
  currentPage: number;
  /**
   * Callback called when pagination button is clicked.
   */
  onPageChange: OnPageChangeFn;
  /**
   * Number of page positions. This also includes ellipsis positions if visible.
   */
  pageButtonsCount?: number;
  /**
   * Custom pagination item render function
   */
  renderItem?: customRenderItem;
}
