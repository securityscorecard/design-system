import { UseTooltipOptions } from './hooks/useTooltip.types';

export interface TooltipPopupProps {
  placement: UseTooltipOptions['placement'];
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
  placement?: TooltipPopupProps['placement'];
  defaultIsPopupDisplayed?: boolean;
}
