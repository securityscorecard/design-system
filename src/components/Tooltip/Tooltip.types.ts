import { Placements } from '../../hooks/useCalculatePortalPlacement.types';

export interface TooltipPopupProps {
  placement: Placements;
  width: number;
  space: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
export interface TooltipProps {
  popup?: React.ReactNode;
  className?: string;
  placement?: Placements;
  defaultIsPopupDisplayed?: boolean;
}
