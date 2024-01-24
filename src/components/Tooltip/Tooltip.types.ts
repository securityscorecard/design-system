import React from 'react';
import { ReactComponentLike } from 'prop-types';

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
  width?: 'auto' | number;
  defaultIsPopupDisplayed?: boolean;
  wrapperEl?: ReactComponentLike;
}
