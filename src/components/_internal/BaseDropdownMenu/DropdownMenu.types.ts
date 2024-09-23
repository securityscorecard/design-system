import type { To } from 'history';

import { ActionKinds } from '../../../types/action.types';
import { Placements } from '../../Dropdown/Dropdown.types';

export interface DropdownLinkProps {
  name: string;
  href?: string;
  to?: To;
  onClick: () => void;
}

export interface DropdownMenuProps {
  actions: ActionKinds<React.MouseEvent[]>[];
  children: React.ReactNode | ((isActive: boolean) => JSX.Element);
  defaultIsOpen?: boolean;
  paneWidth?: 'auto' | number;
  className?: string;
  placement?: Placements;
}
