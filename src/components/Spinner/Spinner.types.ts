import { Color } from '../../theme/colors.types';

export interface SpinnerProps {
  dark?: boolean;
  width?: number;
  height?: number;
  color?: Color;
  verticalMargin?: number;
  horizontalMargin?: number | 'auto';
  borderWidth?: number;
}
