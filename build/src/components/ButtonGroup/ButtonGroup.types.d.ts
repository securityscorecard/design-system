import { ButtonProps } from '../Button/Button.types';
export declare type ButtonGroupProps = Pick<ButtonProps, 'variant' | 'size' | 'color'>;
export declare type ButtonGroupWrapperProps = {
    $variant: ButtonGroupProps['variant'];
    $size: ButtonGroupProps['size'];
    $color: ButtonGroupProps['color'];
};
