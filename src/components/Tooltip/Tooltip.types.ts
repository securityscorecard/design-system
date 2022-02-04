import React from 'react';

import { Placements } from '../Dropdown/Dropdown.types';

export interface TooltipPopupProps {
  $placement: Placements;
  $width: number;
  $space: number;
  style: React.CSSProperties;
}
export interface TooltipProps {
  popup?: React.ReactNode;
  className?: string;
  placement?: Placements;
  width?: number;
  defaultIsPopupDisplayed?: boolean;
}
