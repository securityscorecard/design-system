import { Action } from '../../types/Action.types';

export interface BatchActionsProps {
  actions: Action<string[]>[];
}
