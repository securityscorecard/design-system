import { TooltipPlacements } from './Tooltip.enums';

export type Placements = typeof TooltipPlacements[keyof typeof TooltipPlacements];

export interface TooltipProps {
  popup?: React.ReactNode;
  className?: string;
  placement?: Placements;
}
