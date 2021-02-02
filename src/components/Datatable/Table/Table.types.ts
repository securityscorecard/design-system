import { Column, SortingRule } from 'react-table';

import { RowAction } from './temp/config';

export interface TableProps<D extends Record<string, unknown>> {
  columns: Column<D>[];
  data: D[];
  fetchData: ({
    pageSize,
    pageIndex,
    sortBy,
  }: {
    pageIndex: number;
    pageSize: number;
    sortBy?: SortingRule<D>[];
  }) => void;
  isLoading: boolean;
  primaryKey: string;
  pageCount: number;
  rowActions: RowAction[]; // TODO: type this properly
}
