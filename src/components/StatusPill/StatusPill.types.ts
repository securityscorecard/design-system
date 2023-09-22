import { StatusDotColors } from '../StatusDot/StatusDot';

export interface StatusPillProps {
  color?: keyof typeof StatusDotColors;
  label: string;
}
