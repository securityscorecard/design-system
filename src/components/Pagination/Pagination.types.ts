export type OnPageChangeFn = (page: number) => void;

export interface PageButtonsProps {
  currentPage: number;
  pageCount: number;
  onChange: (page: number) => void;
  positions: number;
}

export interface PaginationItemProps {
  isDisabled?: boolean;
  isCurrent?: boolean;
  isShrinked?: boolean;
  onClick: () => void;
}

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: OnPageChangeFn;
  pageButtonsCount?: number;
}
