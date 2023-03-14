import type { To } from 'history';
import type { Row } from 'react-table';
declare type BaseRowAction<D> = {
    label: string;
    name: string;
    onClick?: (rowId: number | string, row: D) => void;
};
declare type HandlerRowAction<D> = Required<BaseRowAction<D>>;
export declare const HandlerRowActionKindPropType: any;
declare type AbsoluteLinkRowAction<D> = BaseRowAction<D> & {
    hrefComposer: (rowId: number | string, row: D) => string;
    toComposer?: never;
};
export declare const AbsoluteLinkRowActionKindPropType: any;
declare type RelativeLinkRowAction<D> = BaseRowAction<D> & {
    toComposer: (rowId: number | string, row: D) => To;
    hrefComposer?: never;
};
export declare const RelativeLinkRowActionKindPropType: any;
export declare type RowAction<D> = HandlerRowAction<D> | AbsoluteLinkRowAction<D> | RelativeLinkRowAction<D>;
export declare const RowActionKindsPropType: any;
export declare type PrimaryKey<D extends Record<string, unknown>> = string | ((originalRow: D, relativeIndex: number, parent?: Row<D>) => string);
export {};
