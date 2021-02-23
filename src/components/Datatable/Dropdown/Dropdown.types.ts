import { ActionKinds } from '../types/Action.types';

export interface DropdownProps {
  actions: ActionKinds[];
  defaultIsOpen?: boolean;
  className?: string;
}
