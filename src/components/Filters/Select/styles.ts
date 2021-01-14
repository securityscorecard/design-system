import { assoc, includes } from 'ramda';
import { StylesConfig } from 'react-select';

import { pxToRem } from '../../../utils/helpers';
import { theme } from '../../../theme';

const stateStyles = {
  padding: `${pxToRem(3, 15)}`,
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
  fontSize: pxToRem(12),
  color: theme.forms.selectIndicatorColor,
};

export const selectStyles: StylesConfig = {
  control: (_, { selectProps, isFocused }) => {
    const { className = '' } = selectProps;
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: pxToRem(32),
      padding: `${pxToRem(4, 16)}`,
      background: theme.forms.bgColor,
      border: `${theme.forms.borderWidth} solid ${theme.forms.borderColor}`,
      borderRadius: theme.borderRadius,
      color: theme.forms.color,
      fontSize: pxToRem(13),
      lineHeight: pxToRem(15),
      ...((isFocused || includes('focus', className)) && focusStyles),
    };
  },
  valueContainer: assoc('padding', 0),
  singleValue: assoc('margin', 0),
  placeholder: () => ({
    color: theme.forms.placeholderColor,
    fontSize: pxToRem(13),
    lineHeight: pxToRem(15),
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: () => ({
    ...indicatorStyles,
  }),
  menuList: () => ({
    fontSize: pxToRem(13),
    lineHeight: pxToRem(15),
  }),
};
