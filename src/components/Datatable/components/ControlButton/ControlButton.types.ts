import { SSCIcons } from '../../../Icon/Icon.types';

export interface ControlButtonProps {
  label: string;
  iconName: SSCIcons;
  appliedFilters?: number;
  onClick: () => void;
  className?: string;
}
