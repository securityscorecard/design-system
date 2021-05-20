import React from 'react';

import { UseTooltipOptions } from './hooks/useTooltip.types';

export interface TooltipPopupProps {
  $placement: UseTooltipOptions['placement'];
  $width: number;
  $space: number;
  style: React.CSSProperties;
}
export interface TooltipProps {
  popup?: React.ReactNode;
  className?: string;
  placement?: UseTooltipOptions['placement'];
  defaultIsPopupDisplayed?: boolean;
}
