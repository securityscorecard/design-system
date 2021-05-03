import { Extends } from '../types/utils.types';
import { Placements } from './useCalculatePortalPlacement.types';

export type UseDropdownOptions = {
  defaultIsPaneDisplayed?: boolean;
  paneWidth?: number;
  onClickOut?: () => void;
  placement?: Extends<Placements, 'bottom' | 'bottom-left' | 'bottom-right'>;
  isElevated?: boolean;
};

export type UseDropdownReturnType = {
  handleToggleDropdown: () => void;
  handleShowDropdown: () => void;
  handleHideDropdown: () => void;
  isPaneDisplayed: boolean;
  Pane: React.FC;
};
