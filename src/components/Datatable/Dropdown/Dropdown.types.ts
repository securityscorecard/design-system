import { To } from 'history';

import { ActionKinds } from '../types/Action.types';

export interface DropdownLinkProps {
  name: string;
  href?: string;
  to?: To;
  onClick: () => void;
}
export interface DropdownProps {
  actions: ActionKinds[];
  children: React.ReactNode | ((isActive: boolean) => JSX.Element);
  defaultIsOpen?: boolean;
  paneWidth?: number;
  className?: string;
}
