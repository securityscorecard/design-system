import { To } from 'history';
import { Column, Row, SortingRule } from 'react-table';

import { Filter } from '../../Filters/Filters.types';

export interface InternalColumnProps {
  totalLength: number;
  hasExclusionLogic: boolean;
}

type BaseRowAction<D> = {
  label: string;
  name: string;
  onClick?: (rowId: number | string, row: D) => void;
};
type HandlerRowAction<D> = Required<BaseRowAction<D>>;
type AbsoluteLinkRowAction<D> = BaseRowAction<D> & {
  hrefComposer: (rowId: number | string, row: D) => string;
  toComposer?: never;
};
type RelativeLinkRowAction<D> = BaseRowAction<D> & {
  toComposer: (rowId: number | string, row: D) => To;
  hrefComposer?: never;
};

export type RowAction<D> =
  | HandlerRowAction<D>
  | AbsoluteLinkRowAction<D>
  | RelativeLinkRowAction<D>;

export type TableConfig<D> = {
  // Row selection section
  hasSelection?: boolean;
  onSelect?: (selectedIds: string[], hasExclusionLogic: boolean) => void;
  // Table pagination section
  hasPagination?: boolean;
  hasServerSidePagination?: boolean;
  defaultPageSize?: number;
  // Table sorting section
  hasSorting?: boolean;
  hasServerSideSorting?: boolean;
  defaultSortBy?: SortingRule<D>[];
  NoDataComponent?: () => JSX.Element;
  NoMatchingDataComponent?: () => JSX.Element;
};

type OnDataFetchArgs<D> = {
  pageIndex: number;
  pageSize: number;
  sortBy?: SortingRule<D>[];
  filters?: Omit<Filter, 'isApplied'>[];
  query?: string;
};

export type OnDataFetchFn<D> = ({
  pageSize,
  pageIndex,
  sortBy,
  filters,
  query,
}: OnDataFetchArgs<D>) => void;

export type PrimaryKey<D extends Record<string, unknown>> =
  | string
  | ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string);

export interface TableProps<D extends Record<string, unknown>> {
  columns: Column<D>[];
  data: D[];
  fetchData: OnDataFetchFn<D>;
  isLoading: boolean;
  primaryKey: PrimaryKey<D>;
  pageCount: number;
  rowActions: RowAction<D>[];
  config: TableConfig<D>;
  hasAppliedFilters?: boolean;
}
