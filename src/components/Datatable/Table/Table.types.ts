import { To } from 'history';
import PropTypes, { ReactComponentLike } from 'prop-types';
import { Column, IdType, Row, SortingRule } from 'react-table';

import { ActionBasePropType } from '../types/Action.types';
import { RendererColumnOptions } from './Body/renderers/renderers.types';

type BaseRowAction<D> = {
  label: string;
  name: string;
  onClick?: (rowId: number | string, row: D) => void;
};
type HandlerRowAction<D> = Required<BaseRowAction<D>>;
export const HandlerRowActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func.isRequired,
});

type AbsoluteLinkRowAction<D> = BaseRowAction<D> & {
  hrefComposer: (rowId: number | string, row: D) => string;
  toComposer?: never;
};
export const AbsoluteLinkRowActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  hrefComposer: PropTypes.func.isRequired,
});
type RelativeLinkRowAction<D> = BaseRowAction<D> & {
  toComposer: (rowId: number | string, row: D) => To;
  hrefComposer?: never;
};
export const RelativeLinkRowActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  toComposer: PropTypes.func.isRequired,
});

export type RowAction<D> =
  | HandlerRowAction<D>
  | AbsoluteLinkRowAction<D>
  | RelativeLinkRowAction<D>;

export const RowActionKindsPropType = PropTypes.oneOfType([
  HandlerRowActionKindPropType,
  AbsoluteLinkRowActionKindPropType,
  RelativeLinkRowActionKindPropType,
]);
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

export type PrimaryKey<D extends Record<string, unknown>> =
  | string
  | ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string);

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
  defaultPageIndex?: number;
}

export interface CustomColumnOptions<D> extends RendererColumnOptions<D> {
  sticky?: string;
  headerTooltip?: JSX.Element;
  Header: string;
}
