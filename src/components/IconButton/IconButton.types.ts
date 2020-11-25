import { ButtonProps } from '../Button/Button.types';

export type IconButtonProps = Pick<
  ButtonProps,
  'iconName' | 'iconType' | 'to' | 'href' | 'onClick' | 'margin'
> & { label: string };
