import type { To } from 'history';
import PropTypes from 'prop-types';
import React from 'react';

import { ToPropType } from './to.types';

export type ActionBase<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = {
  label: React.ReactNode;
  name: string;
  onClick?: (...args: OnClickArgs) => OnClickReturnType;
  tooltip?: React.ReactNode;
};

export const ActionBasePropType = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export type HandlerActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = ActionBase<OnClickArgs, OnClickReturnType> &
  Required<Pick<ActionBase<OnClickArgs>, 'onClick'>>;

export const HandlerActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func.isRequired,
});

export type RelativeLinkActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = ActionBase<OnClickArgs, OnClickReturnType> & {
  to: To;
  href?: never;
};

export const RelativeLinkActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  to: ToPropType.isRequired,
});

export type AbsoluteLinkActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> = ActionBase<OnClickArgs, OnClickReturnType> & {
  href: string;
  to?: never;
};

export const AbsoluteLinkActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
});

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
  href?: never;
  to?: never;
};

export const ActionKindsPropType = PropTypes.oneOfType([
  HandlerActionKindPropType,
  RelativeLinkActionKindPropType,
  AbsoluteLinkActionKindPropType,
]);

export const ActionWithSubactionsPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  subActions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
});
