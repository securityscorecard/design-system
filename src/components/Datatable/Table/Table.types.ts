import PropTypes, { ReactComponentLike } from 'prop-types';
import { Column, IdType, SortingRule } from 'react-table';

import { RendererColumnOptions } from '../../_internal/BaseTable/renderers/renderers.types';
import {
  PrimaryKey,
  RowAction,
  RowActionKindsPropType,
} from '../../_internal/BaseTable/BaseTable.types';

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
  defaultColumnOrder: IdType<D>[];
  // defaultHiddenColumns: IdType<D>[];
  rowActions: RowAction<D>[];
  NoMatchingDataComponent: ReactComponentLike;
  NoDataComponent: ReactComponentLike;
}

export const TableConfigPropType = {
  onSelect: PropTypes.func,
  NoDataComponent: PropTypes.elementType,
  NoMatchingDataComponent: PropTypes.elementType,
  hasSelection: PropTypes.bool,
  isMultiSelect: PropTypes.bool,
  hasOnlyPerPageSelection: PropTypes.bool,
  defaultSelectedRowIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  hasPagination: PropTypes.bool,
  hasServerSidePagination: PropTypes.bool,
  defaultPageSize: PropTypes.number,
  hasSorting: PropTypes.bool,
  hasServerSideSorting: PropTypes.bool,
  defaultPageIndex: PropTypes.number,
  defaultSortBy: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      desc: PropTypes.bool,
    }),
  ),
  defaultHiddenColumns: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  defaultColumnOrder: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  rowActions: PropTypes.arrayOf(RowActionKindsPropType),
};

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
