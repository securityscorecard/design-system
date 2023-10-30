import type { Column, IdType, SortingRule } from 'react-table';
import type { RendererColumnOptions } from '../../_internal/BaseTable/renderers/renderers.types';
import type {
  PrimaryKey,
  RowAction,
} from '../../_internal/BaseTable/BaseTable.types';
import type { ElementType } from 'react';

export type OnSelectFn<D> = (
  ids: IdType<D>[],
  hasExclusiveSelection: boolean,
) => void;

export interface TableConfig<D> {
  hasSelection: boolean;
  isDataLoading: boolean;
  isMultiSelect: boolean;
  onSelect: OnSelectFn<D>;
  isCancelDisabled: boolean;
  onCancelLoading: () => void;
  hasOnlyPerPageSelection: boolean;
  defaultSelectedRowIds: IdType<D>[];
  hasPagination: boolean;
  hasServerSidePagination: boolean;
  defaultPageSize: number;
  defaultPageIndex: number;
  hasSorting: boolean;
  hasServerSideSorting: boolean;
  defaultSortBy: SortingRule<D>[];
  pageButtonsCount?: number;
  defaultColumnOrder: IdType<D>[];
  defaultHiddenColumns: IdType<D>[];
  rowActions: RowAction<D>[];
  NoMatchingDataComponent: ElementType;
  NoDataComponent: ElementType;
}

export interface TableProps<D extends Record<string, unknown>>
  extends Omit<
    TableConfig<D>,
    'onSelect' | 'defaultSelectedRowIds' | 'hasOnlyPerPageSelection'
  > {
  data: D[];
  columns: Column<D>[];
  dataSize: number;
  isDataLoading: boolean;
  onCancelLoading: () => void;
  dataPrimaryKey?: PrimaryKey<D>;
  defaultSelectedRows?: Record<IdType<D>, boolean>;
  defaultPageIndex: number;
}

export interface CustomColumnOptions<D> extends RendererColumnOptions<D> {
  sticky?: string;
  headerTooltip?: JSX.Element;
  Header: string;
}
