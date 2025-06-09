import { ReactNode } from 'react';

import { ReactComponentLike } from '../../types/utils.types';
import { Placements } from '../Dropdown/Dropdown.types';

export interface TooltipPopupProps {
  $placement: Placements;
  $width: number;
  $space: number;
  style: React.CSSProperties;
}

export interface TooltipProps {
  popup?: ReactNode;
  className?: string;
  placement?: Placements;
  width?: 'auto' | number;
  enterDelay?: number;
  defaultIsPopupDisplayed?: boolean;
  wrapperEl?: ReactComponentLike;
  children: ReactNode;
}
