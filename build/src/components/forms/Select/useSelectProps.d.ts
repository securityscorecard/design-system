import { SelectProps } from './Select.types';
export declare const useSelectProps: <IsMulti extends boolean>({ options, placeholder, isInvalid, isDisabled, isClearable, maxPillLabelLength, maxVisibleItem, defaultIsMenuOpen, menuActions, isMenuPositionRelative, isMulti, isLoading, noOptionsMessage, ...props }: SelectProps<IsMulti>) => Record<string, unknown>;
