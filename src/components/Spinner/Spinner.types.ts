import { Color } from '../../theme/colors.types';

export interface SpinnerProps {
  dark?: boolean;
  width?: number | string;
  height?: number | string;
  color?: Color;
  verticalMargin?: number;
  horizontalMargin?: number | 'auto';
  borderWidth?: number;
}
