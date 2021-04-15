import { assoc, includes } from 'ramda';
import { StylesConfig } from 'react-select';

import { pxToRem } from '../../../../utils/helpers';
import { theme } from '../../../../theme';
import { Option } from './Select.types';

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
  color: theme.forms.selectIndicatorColor,
};

export const selectStyles: StylesConfig<Option, false> = {
  control: (_, { selectProps, isFocused }) => {
    const { className = '' } = selectProps;
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minHeight: pxToRem(32),
      padding: pxToRem(0, 16),
      background: theme.forms.bgColor,
      border: `${theme.forms.borderWidth} solid ${theme.forms.borderColor}`,
      borderRadius: theme.borderRadius,
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
};
