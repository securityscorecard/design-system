import { To } from 'history';
import PropTypes, { ReactComponentLike } from 'prop-types';
import { Column, IdType, Row, SortingRule } from 'react-table';

import { ActionBasePropType } from '../types/Action.types';

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
  onSelect: OnSelectFn<D>;
  defaultSelectedRowIds: IdType<D>[];
  hasPagination: boolean;
  hasServerSidePagination: boolean;
  defaultPageSize: number;
  hasSorting: boolean;
  hasServerSideSorting: boolean;
  defaultSortBy: SortingRule<D>[];
  rowActions: RowAction<D>[];
  NoMatchingDataComponent: ReactComponentLike;
  NoDataComponent: ReactComponentLike;
}

export const TableConfigPropType = {
  NoDataComponent: PropTypes.elementType,
  NoMatchingDataComponent: PropTypes.elementType,
  hasSelection: PropTypes.bool,
  defaultSelectedRowIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  hasPagination: PropTypes.bool,
  hasServerSidePagination: PropTypes.bool,
  defaultPageSize: PropTypes.number,
  hasSorting: PropTypes.bool,
  hasServerSideSorting: PropTypes.bool,
  defaultSortBy: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      desc: PropTypes.bool,
    }),
  ),
  rowActions: PropTypes.arrayOf(RowActionKindsPropType),
};

export type PrimaryKey<D extends Record<string, unknown>> =
  | string
  | ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string);

export interface TableProps<D extends Record<string, unknown>>
  extends Omit<TableConfig<D>, 'onSelect' | 'defaultSelectedRowIds'> {
  data: D[];
  columns: Column<D>[];
  dataSize: number;
  isDataLoading: boolean;
  dataPrimaryKey?: PrimaryKey<D>;
  defaultSelectedRows?: Record<IdType<D>, boolean>;
}
