import type { To } from 'history';
import type { MouseEventHandler, ReactNode } from 'react';

export type ActionBase<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = {
  label: ReactNode;
  name: string;
  onClick?: (...args: OnClickArgs) => OnClickReturnType;
  tooltip?: ReactNode;
};

export type HandlerActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = ActionBase<OnClickArgs, OnClickReturnType> &
  Required<Pick<ActionBase<OnClickArgs>, 'onClick'>>;

export type RelativeLinkActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = ActionBase<OnClickArgs, OnClickReturnType> & {
  to: To;
  href?: never;
};

export type AbsoluteLinkActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = ActionBase<OnClickArgs, OnClickReturnType> & {
  href: string;
  to?: never;
};

export type ActionKinds<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
  AdditionalProps = Record<string, unknown>,
> =
  | (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
  | (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
  | (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps);

export type ActionWithSubactions<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = ActionBase<OnClickArgs, OnClickReturnType> & {
  subActions: ActionKinds<OnClickArgs, OnClickReturnType>[];
  onClick?: MouseEventHandler;
  href?: never;
  to?: never;
};
