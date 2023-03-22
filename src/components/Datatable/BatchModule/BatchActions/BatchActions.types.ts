import type { Action } from '../../types/Action.types';
import type { BatchActionArgs } from '../../Datatable.types';

export interface BatchActionsProps {
  actions: Action<BatchActionArgs>[];
}
