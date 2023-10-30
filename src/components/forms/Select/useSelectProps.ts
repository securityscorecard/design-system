import type { SelectProps } from './Select.types';

import { useTheme } from 'styled-components';
import { useDeepCompareMemo } from 'use-deep-compare';
import { has, sortBy } from 'ramda';

import {
  ClearIndicator,
  DropdownIndicator,
  IndicatorsContainer,
  Menu,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  ValueContainer,
  reactSelectTheme,
  selectStyles,
} from './Select.styles';

export const useSelectProps = <IsMulti extends boolean>({
  options = [],
  placeholder = '',
  isInvalid = false,
  isDisabled = false,
  isClearable = false,
  maxPillLabelLength = 16,
  maxVisibleItem,
  defaultIsMenuOpen,
  menuActions,
  isMenuPositionRelative = false,
  isMulti,
  isLoading = false,
  noOptionsMessage = ({ inputValue }) => `No match found for "${inputValue}"`,
  ...props
}: SelectProps<IsMulti>): Record<string, unknown> => {
  const DSTheme = useTheme();
  const sortedOptions = useDeepCompareMemo(
    () => sortBy(has('options'), options),
    [options],
  );

  return {
    maxMenuHeight: 270,
    ...props,
    closeMenuOnSelect: !isMulti,
    components: {
      ...(props.components || {}),
      DropdownIndicator,
      ClearIndicator,
      IndicatorsContainer,
      ValueContainer,
      MultiValueContainer,
      MultiValueLabel,
      MultiValueRemove,
      Menu,
      Option,
    },
    hideSelectedOptions: false,
    isClearable,
    isDisabled,
    isInvalid,
    isProcessing: isLoading,
    isLoading: false,
    isMenuPositionRelative,
    isMulti,
    menuActions,
    defaultMenuIsOpen: defaultIsMenuOpen,
    noOptionsMessage,
    options: sortedOptions,
    placeholder,
    styles: selectStyles(DSTheme),
    theme: reactSelectTheme(DSTheme),
    classNamePrefix: 'ssc',
    maxVisibleItem,
    maxPillLabelLength,
  };
};
