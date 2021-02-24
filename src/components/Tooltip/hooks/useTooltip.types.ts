import { Placements } from '../../../hooks/useCalculatePortalPlacement.types';

export type UseTooltipOptions = {
  placement: Placements;
  defaultIsPopupDisplayed?: boolean;
};

export type UseTooltipReturnType = {
  handleShowTooltip: () => void;
  handleHideTooltip: () => void;
  Popup: React.FC;
};
