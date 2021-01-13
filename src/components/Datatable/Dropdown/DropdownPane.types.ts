import { To } from 'history';

import { ActionKinds } from '../types/Action.types';

export interface DropdownLinkProps {
  name: string;
  href?: string;
  to?: To;
  onClick: () => void;
}
export interface DropdownPaneProps {
  actions: ActionKinds[];
  onClickOut: () => void;
}
