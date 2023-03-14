import type { To } from 'history';
import React from 'react';
export declare type ActionBase<OnClickArgs extends Array<unknown>, OnClickReturnType = void> = {
    label: React.ReactNode;
    name: string;
    onClick?: (...args: OnClickArgs) => OnClickReturnType;
    tooltip?: React.ReactNode;
};
export declare const ActionBasePropType: {
    label: any;
    name: any;
};
export declare type HandlerActionKind<OnClickArgs extends Array<unknown>, OnClickReturnType = void> = ActionBase<OnClickArgs, OnClickReturnType> & Required<Pick<ActionBase<OnClickArgs>, 'onClick'>>;
export declare const HandlerActionKindPropType: any;
export declare type RelativeLinkActionKind<OnClickArgs extends Array<unknown>, OnClickReturnType = void> = ActionBase<OnClickArgs, OnClickReturnType> & {
    to: To;
    href?: never;
};
export declare const RelativeLinkActionKindPropType: any;
export declare type AbsoluteLinkActionKind<OnClickArgs extends Array<unknown>, OnClickReturnType = void> = ActionBase<OnClickArgs, OnClickReturnType> & {
    href: string;
    to?: never;
};
export declare const AbsoluteLinkActionKindPropType: any;
export declare type ActionKinds<OnClickArgs extends Array<unknown>, OnClickReturnType = void, AdditionalProps = Record<string, unknown>> = (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps) | (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps) | (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps);
export declare type ActionWithSubactions<OnClickArgs extends Array<unknown>, OnClickReturnType = void> = ActionBase<OnClickArgs, OnClickReturnType> & {
    subActions: ActionKinds<OnClickArgs, OnClickReturnType>[];
    href?: never;
    to?: never;
};
export declare const ActionKindsPropType: any;
export declare const ActionWithSubactionsPropType: any;
