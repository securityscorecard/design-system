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
import { SelectProps } from './Select.types';

export const useSelectProps = <IsMulti extends boolean>({
  options,
  placeholder = '',
  isInvalid = false,
  isDisabled = false,
  isClearable = false,
  maxPillLabelLength = 16,
  defaultIsMenuOpen,
  defaultInputValue,
  menuActions,
  isMenuPositionRelative = false,
  isMulti,
  isLoading = false,
}: SelectProps<IsMulti>): Record<string, unknown> => {
  const DSTheme = useTheme();
  const sortedOptions = useDeepCompareMemo(
    () => sortBy(has('options'), options),
    [options],
  );

  return {
    closeMenuOnSelect: !isMulti,
    components: {
      DropdownIndicator,
      ClearIndicator,
      IndicatorsContainer,
      ValueContainer,
      MultiValueContainer,
      MultiValueLabel: MultiValueLabel(maxPillLabelLength),
      MultiValueRemove,
      Menu,
      Option,
    },
    defaultInputValue,
    hideSelectedOptions: !isMulti,
    isClearable,
    isDisabled,
    isInvalid,
    isProcessing: isLoading,
    isLoading: false,
    isMenuPositionRelative,
    isMulti,
    maxMenuHeight: 270,
    menuActions,
    defaultMenuIsOpen: defaultIsMenuOpen,
    noOptionsMessage: ({ inputValue }) => `No match found for "${inputValue}"`,
    options: sortedOptions,
    placeholder,
    styles: selectStyles(DSTheme),
    theme: reactSelectTheme(DSTheme),
  };
};
