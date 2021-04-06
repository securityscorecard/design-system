import { SSCIcons } from '../../../Icon/Icon.types';

export interface StyledControlButtonProps {
  $isActive: boolean;
  $isApplied: boolean;
}

export interface ControlButtonProps {
  label: string;
  iconName: SSCIcons;
  isActive?: boolean;
  isApplied?: boolean;
  onClick: () => void;
  className?: string;
}
