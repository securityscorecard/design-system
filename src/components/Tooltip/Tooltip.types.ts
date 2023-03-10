import type { CSSProperties, ReactNode } from 'react';
import type { Placements } from '../Dropdown/Dropdown.types';

export interface TooltipPopupProps {
  $placement: Placements;
  $width: number;
  $space: number;
  style: CSSProperties;
}
export interface TooltipProps {
  popup?: ReactNode;
  className?: string;
  placement?: Placements;
  width?: number;
  defaultIsPopupDisplayed?: boolean;
}
