import { To } from 'history';
import PropTypes from 'prop-types';

import { ToPropType } from '../../../types/to.types';

export type ActionBase = {
  label: string;
  name: string;
};

export const ActionBasePropType = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export type HandlerActionKind = ActionBase & {
  onClick: () => void;
};

export const HandlerActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func.isRequired,
});

export type RelativeLinkActionKind = ActionBase & {
  to: To;
  onClick?: () => void;
  href?: never;
  subActions?: never;
};

export const RelativeLinkActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  to: ToPropType.isRequired,
});

export type AbsoluteLinkActionKind = ActionBase & {
  href: string;
  onClick?: () => void;
  to?: never;
  subActions?: never;
};

export const AbsoluteLinkActionKindPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
});

export type ActionKinds =
  | HandlerActionKind
  | AbsoluteLinkActionKind
  | RelativeLinkActionKind;

export const ActionKindsPropType = PropTypes.oneOfType([
  HandlerActionKindPropType,
  RelativeLinkActionKindPropType,
  AbsoluteLinkActionKindPropType,
]);

export type ActionWithSubactions = ActionBase & {
  subActions: ActionKinds[];
  onClick?: () => void;
  href?: never;
  to?: never;
};

export const ActionWithSubactionsPropType = PropTypes.exact({
  ...ActionBasePropType,
  onClick: PropTypes.func,
  subActions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
});

export type Action = ActionKinds | ActionWithSubactions;

export const ActionPropType = PropTypes.oneOfType([
  HandlerActionKindPropType,
  RelativeLinkActionKindPropType,
  AbsoluteLinkActionKindPropType,
  ActionWithSubactionsPropType,
]);
