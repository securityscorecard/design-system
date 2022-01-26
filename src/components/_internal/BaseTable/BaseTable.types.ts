import { To } from 'history';
import { Row } from 'react-table';
import PropTypes from 'prop-types';

import { ActionBasePropType } from '../../../types/action.types';

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

export type PrimaryKey<D extends Record<string, unknown>> =
  | string
  | ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string);
