import { OnHide, OnShow, RCPF } from 'react-cool-portal';

import { Extends } from '../types/utils.types';
import { Placements } from './useCalculatePortalPlacement.types';

export type UseDropdownOptions = {
  defaultIsPaneDisplayed?: boolean;
  paneWidth?: number;
  onClickOut?: () => void;
  onShow?: OnShow;
  onHide?: OnHide;
  placement?: Extends<Placements, 'bottom' | 'bottom-left' | 'bottom-right'>;
  isElevated?: boolean;
  hasInternalShowHide?: boolean;
};

export type UseDropdownReturnType = {
  handleToggleDropdown: RCPF;
  handleShowDropdown: RCPF;
  handleHideDropdown: RCPF;
  isPaneDisplayed: boolean;
  Pane: React.FC;
};
