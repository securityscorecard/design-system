import { To } from 'history';

import { UseDropdownOptions } from '../../../hooks/useDropdown.types';
import { ActionKinds } from '../../../types/action.types';

export interface DropdownLinkProps {
  name: string;
  href?: string;
  to?: To;
  onClick: () => void;
}
export interface DropdownProps {
  actions: ActionKinds<string[]>[];
  children: React.ReactNode | ((isActive: boolean) => JSX.Element);
  defaultIsOpen?: UseDropdownOptions['defaultIsPaneDisplayed'];
  paneWidth?: UseDropdownOptions['paneWidth'];
  className?: string;
  placement?: UseDropdownOptions['placement'];
}
