import { ButtonProps } from '../Button/Button.types';
export declare type IconButtonProps = Pick<ButtonProps, 'iconName' | 'iconType' | 'to' | 'href' | 'onClick' | 'margin'> & {
    label: string;
};
