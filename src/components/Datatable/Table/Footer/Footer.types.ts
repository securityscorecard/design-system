export type OnPageChangeFn = (page: number) => void;

export interface FooterProps {
  pageCount: number;
  pageIndex: number;
  isDataLoading?: boolean;
  onGotoPage: OnPageChangeFn;
  hasPagination: boolean;
}
