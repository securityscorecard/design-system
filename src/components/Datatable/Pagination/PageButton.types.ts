import { ButtonProps } from '../../Button/Button.types';

export interface PageButtonProps extends ButtonProps {
  isActive?: boolean;
  variant: 'text';
}
