import React, { ComponentType } from 'react';
import { ThemeConfig } from 'react-select/src/theme';
import { IndicatorComponentType, IndicatorContainerProps, MenuProps, OptionProps, StylesConfig } from 'react-select';
import { DefaultTheme } from 'styled-components';
import { Option as OptionType } from './Select.types';
export declare const reactSelectTheme: (DSTheme: DefaultTheme) => ThemeConfig;
export declare const selectStyles: (DSTheme: DefaultTheme) => StylesConfig<OptionType, false>;
export declare const DropdownIndicator: IndicatorComponentType<OptionType, boolean>;
export declare const ClearIndicator: IndicatorComponentType<OptionType, boolean>;
declare type InnerProps = {
    id: string;
    key: string;
    onClick: React.MouseEventHandler<HTMLElement>;
    onMouseMove: React.MouseEventHandler<HTMLElement>;
    onMouseOver: React.MouseEventHandler<HTMLElement>;
    tabIndex: number;
};
export declare const MultiValueContainer: ComponentType<Record<string, unknown>>;
export declare const MultiValueLabel: ({ children, innerProps, selectProps, ...props }: {
    [x: string]: any;
    children: any;
    innerProps: any;
    selectProps: any;
}) => JSX.Element;
export declare const MultiValueRemove: ComponentType<{
    data: OptionType;
    innerProps: InnerProps;
}>;
export declare const Menu: ComponentType<MenuProps<OptionType, boolean>>;
export declare const ValueContainer: (props: any) => JSX.Element;
export declare const Option: ComponentType<OptionProps<OptionType, boolean>>;
export declare const IndicatorsContainer: ComponentType<IndicatorContainerProps<OptionType, boolean>>;
export {};
