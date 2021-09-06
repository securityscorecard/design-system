import { To } from 'history';
import PropTypes from 'prop-types';

import { ToPropType } from './to.types';

export type ActionBase<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void
> = {
  label: string;
  name: string;
  onClick?: (...args: OnClickArgs) => OnClickReturnType;
};

export const ActionBasePropType = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export type HandlerActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void
> = Required<ActionBase<OnClickArgs, OnClickReturnType>>;

export const HandlerActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func.isRequired,
});

export type RelativeLinkActionKind<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void
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
  OnClickReturnType = void
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
  OnClickReturnType = void
> =
  | HandlerActionKind<OnClickArgs, OnClickReturnType>
  | AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType>
  | RelativeLinkActionKind<OnClickArgs, OnClickReturnType>;

export type ActionWithSubactions<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void
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
