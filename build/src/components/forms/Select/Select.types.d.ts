import { CommonProps, Props as ReactSelectProps } from 'react-select';
import { Props as ReactSelectCreatableProps } from 'react-select/creatable';
import { Props as ReactSelectAsyncProps } from 'react-select/async';
import { Props as ReactSelectAsyncCreatableProps } from 'react-select/async-creatable';
import { ActionKinds } from '../../../types/action.types';
export interface Option {
    value: string;
    label: string;
    isDisabled?: boolean;
}
export declare type MenuActionArgs<IsMulti extends boolean> = Omit<CommonProps<Option, IsMulti>, 'className' | 'cx' | 'getStyles'>;
interface BaseSelectProps<IsMulti extends boolean = false> {
    defaultIsMenuOpen?: boolean;
    menuActions?: Array<ActionKinds<[MenuActionArgs<IsMulti>]>>;
    maxPillLabelLength?: number;
    maxVisibleItem?: number;
    isMenuPositionRelative?: boolean;
    isInvalid?: boolean;
    className?: string;
}
declare type SyncSelectProps<IsMulti extends boolean = false> = {
    isAsync?: false;
} & ReactSelectProps<Option, IsMulti>;
declare type AsyncSelectProps<IsMulti extends boolean = false> = {
    isAsync: true;
} & ReactSelectAsyncProps<Option, IsMulti>;
export declare type SelectProps<IsMulti extends boolean = false> = BaseSelectProps<IsMulti> & (SyncSelectProps<IsMulti> | AsyncSelectProps<IsMulti>);
declare type SyncCreatableSelectProps<IsMulti extends boolean = false> = {
    isAsync?: false;
} & ReactSelectCreatableProps<Option, IsMulti>;
declare type AsyncCreatableSelectProps<IsMulti extends boolean = false> = {
    isAsync: true;
} & ReactSelectAsyncCreatableProps<Option, IsMulti>;
export declare type CreatableSelectProps<IsMulti extends boolean = false> = BaseSelectProps<IsMulti> & {
    createNewLabel?: string;
} & (SyncCreatableSelectProps<IsMulti> | AsyncCreatableSelectProps<IsMulti>);
export declare const OptionPropType: any;
export declare const GroupPropType: any;
export {};
