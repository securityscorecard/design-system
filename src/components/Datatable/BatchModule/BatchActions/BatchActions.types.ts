import { Action } from '../../types/Action.types';
import { BatchActionArgs } from '../../Datatable.types';

export interface BatchActionsProps {
  actions: Action<BatchActionArgs>[];
}
