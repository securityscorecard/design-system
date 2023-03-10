import type { ButtonProps } from '../Button/Button.types';

export interface NavItemProps extends ButtonProps {
  isActive?: boolean;
  variant: 'text';
}
