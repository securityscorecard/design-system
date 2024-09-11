import type { To } from 'history';
import type { Row } from 'react-table';

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

export type PrimaryKey<D extends Record<string, unknown>> =
  | string
  | ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string);
