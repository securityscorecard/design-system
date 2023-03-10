import type { StylesConfig } from 'react-select';
import type { Option } from './Select.types';

import { assoc, includes } from 'ramda';

import { pxToRem } from '../../../../utils';
import { theme } from '../../../../theme';

const stateStyles = {
  padding: `${pxToRem(0, 15)}`,
  borderWidth: theme.forms.statefulBorderWidth,
  borderStyle: 'solid',
  outline: 'none',
};

const focusStyles = {
  ...stateStyles,
  borderColor: theme.forms.focusBorderColor,
};

const indicatorStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: pxToRem(6),
  height: pxToRem(8),
  color: theme.forms.indicatorColor,
  ':hover': {
    color: theme.forms.hoverIndicatorColor,
  },
};

export const selectStyles: StylesConfig<Option, false> = {
  control: (_, { selectProps, isFocused }) => {
    const { className = '' } = selectProps;
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minHeight: pxToRem(theme.forms.fieldHeight),
      padding: pxToRem(0, 16),
      background: theme.forms.bgColor,
      border: `${theme.forms.borderWidth} solid ${theme.forms.borderColor}`,
      borderRadius: theme.radii.default,
      color: theme.forms.color,
      fontSize: theme.typography.size.md,
      lineHeight: theme.typography.lineHeight.md,
      ...((isFocused || includes('focus', className)) && focusStyles),
    };
  },
  valueContainer: assoc('padding', 0),
  singleValue: assoc('margin', 0),
  placeholder: () => ({
    color: theme.forms.placeholderColor,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  menuList: (props) => ({
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
    ...props,
  }),
  dropdownIndicator: () => ({
    ...indicatorStyles,
  }),
  option: (styles, { isSelected, isFocused, isDisabled }) => ({
    ...styles,
    backgroundColor: isSelected
      ? theme.colors.neutral[300]
      : isFocused
      ? theme.colors.primary[50]
      : 'transparent',
    color: isDisabled ? theme.colors.neutral[600] : theme.forms.color,
    ':active': {
      ...styles[':active'],
      backgroundColor: theme.colors.primary[200],
    },
  }),
};
