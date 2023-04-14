import type {
  ActionKinds,
  ActionWithSubactions,
} from '../../../types/action.types';

export type Action<
  OnClickArgs extends Array<unknown>,
  OnClickReturnType = void,
> =
  | ActionKinds<OnClickArgs, OnClickReturnType>
  | ActionWithSubactions<OnClickArgs, OnClickReturnType>;
