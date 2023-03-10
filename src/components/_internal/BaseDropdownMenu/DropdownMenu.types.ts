import type { To } from 'history';
import type { MouseEvent, ReactNode } from 'react';
import type { ActionKinds } from '../../../types/action.types';
import type { Placements } from '../../Dropdown/Dropdown.types';

import { pick } from 'ramda';

import { DropdownPlacements } from '../../Dropdown/Dropdown.enums';

export interface DropdownLinkProps {
  name: string;
  href?: string;
  to?: To;
  onClick: () => void;
}

export const ControlDropdownPlacements = pick([
  'bottom',
  'bottom-start',
  'bottom-end',
])(DropdownPlacements);

export interface DropdownMenuProps {
  actions: ActionKinds<MouseEvent[]>[];
  children: ReactNode | ((isActive: boolean) => JSX.Element);
  defaultIsOpen?: boolean;
  paneWidth?: 'auto' | number;
  className?: string;
  placement?: Placements;
}
