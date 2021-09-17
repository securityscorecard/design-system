import { Placements } from '../../../hooks/useCalculatePortalPlacement.types';
import { Extends } from '../../../types/utils.types';

export type UseTooltipOptions = {
  placement: Extends<Placements, 'top' | 'bottom' | 'left' | 'right'>;
  defaultIsPopupDisplayed?: boolean;
  popupWidth?: number;
};

export type UseTooltipReturnType = {
  handleShowTooltip: () => void;
  handleHideTooltip: () => void;
  Popup: React.FC;
};
