import { To } from 'history';
import PropTypes, { ReactComponentLike } from 'prop-types';
import { Column, IdType, Row, SortingRule } from 'react-table';

import { ActionBasePropType } from '../../../types/action.types';
import { RendererColumnOptions } from '../../Datatable/Table/Body/renderers/renderers.types';

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
  isDataLoading: boolean;
  hasPagination: boolean;
  defaultPageSize: number;
  defaultPageIndex: number;
  hasSorting: boolean;
  defaultSortBy: SortingRule<D>[];
  defaultColumnOrder: IdType<D>[];
  // defaultHiddenColumns: IdType<D>[];
  rowActions: RowAction<D>[];
  NoDataComponent: ReactComponentLike;
}

export const TableConfigPropType = {
  NoDataComponent: PropTypes.elementType,
  hasPagination: PropTypes.bool,
  defaultPageSize: PropTypes.number,
  hasSorting: PropTypes.bool,
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
  dataPrimaryKey?: PrimaryKey<D>;
  defaultPageIndex: number;
}

export interface CustomColumnOptions<D> extends RendererColumnOptions<D> {
  sticky?: string;
  headerTooltip?: JSX.Element;
  Header: string;
}
