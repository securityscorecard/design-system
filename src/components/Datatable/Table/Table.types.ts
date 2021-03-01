import { To } from 'history';
import { Column, IdType, Row, SortingRule } from 'react-table';

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

type FetchDataFn<D> = (
  pageIndex: number,
  pageSize: number,
  sortBy?: SortingRule<D>[],
  query?: string,
) => void;

export type PrimaryKey<D extends Record<string, unknown>> =
  | string
  | ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string);

export interface TableProps<D extends Record<string, unknown>> {
  columns: Column<D>[];
  data: D[];
  fetchData: FetchDataFn<D>;
  isLoading: boolean;
  primaryKey: PrimaryKey<D>;
  pageCount: number;
  rowActions: RowAction<D>[];
  config: TableConfig<D>;
  hasAppliedFilters?: boolean;
  defaultHiddenColumns?: IdType<D>[];
  defaultColumnOrder?: IdType<D>[];
  hasExclusionLogic: boolean;
  totalLength: number;
  shouldResetSelectedRows: boolean;
  setShouldResetSelectedRows: React.Dispatch<React.SetStateAction<boolean>>;
}
