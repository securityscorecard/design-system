import type {
  ActionKinds,
  ActionWithSubactions,
} from '../../../types/action.types';

import PropTypes from 'prop-types';

import {
  AbsoluteLinkActionKindPropType,
  ActionWithSubactionsPropType,
  HandlerActionKindPropType,
  RelativeLinkActionKindPropType,
} from '../../../types/action.types';

export type Action<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> =
  | ActionKinds<OnClickArgs, OnClickReturnType>
  | ActionWithSubactions<OnClickArgs, OnClickReturnType>;

export const ActionPropType = PropTypes.oneOfType([
  HandlerActionKindPropType,
  RelativeLinkActionKindPropType,
  AbsoluteLinkActionKindPropType,
  ActionWithSubactionsPropType,
]);
