import { transparentize } from 'polished';
import { ThemeConfig } from 'react-select/src/theme';
import { StylesConfig } from 'react-select';
import { assoc, includes } from 'ramda';

import { theme } from '../../../theme';
import { pxToRem } from '../../../utils/helpers';

export const reactSelectTheme: ThemeConfig = (selectTheme) => ({
  ...selectTheme,
  colors: {
    primary: theme.colors.radiantBlueberry,
    primary75: theme.colors.radiantBlueberry,
    primary50: theme.colors.dietBlueberry,
    primary25: transparentize(0.9, theme.colors.radiantBlueberry),
    danger: theme.colors.strawberry,
    dangerLight: transparentize(0.9, theme.colors.strawberry),
    neutral0: theme.colors.graphite5H,
    neutral5: theme.colors.graphite4H,
    neutral10: theme.colors.graphite3H,
    neutral20: theme.colors.graphite2H,
    neutral30: theme.colors.graphiteH,
    neutral40: theme.colors.graphiteHB,
    neutral50: theme.colors.graphiteB,
    neutral60: theme.colors.graphite2B,
    neutral70: theme.colors.graphite3B,
    neutral80: theme.colors.graphite4B,
    neutral90: theme.colors.graphite5B,
  },
});

const stateStyles = {
  padding: `${pxToRem(8, 18)}`,
  borderWidth: theme.forms.statefulBorderWidth,
  borderStyle: 'solid',
  outline: 'none',
};

const invalidStyles = {
  ...stateStyles,
  borderColor: theme.forms.invalidBorderColor,
};

const focusStyles = {
  ...stateStyles,
  borderColor: theme.forms.focusBorderColor,
};

const disabledStyles = {
  ...stateStyles,
  background: theme.forms.disabledBgColor,
  borderWidth: theme.forms.borderWidth,
  borderColor: theme.forms.disabledBorderColor,
};

const indicatorStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: pxToRem(24),
  height: pxToRem(24),
  fontSize: pxToRem(16),
  color: theme.forms.selectIndicatorColor,
};

export const selectStyles: StylesConfig = {
  control: (_, { selectProps, isDisabled, isFocused }) => {
    const { isInvalid, className = '' } = selectProps;
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: theme.forms.fieldHeight,
      padding: `${pxToRem(9, 19)}`,
      background: theme.forms.bgColor,
      border: `${theme.forms.borderWidth} solid ${theme.forms.borderColor}`,
      borderRadius: theme.borderRadius,
      color: theme.forms.color,
      fontSize: pxToRem(15),
      lineHeight: pxToRem(20),
      ...(isInvalid && invalidStyles),
      ...((isFocused || includes('focus', className)) && focusStyles),
      ...(isDisabled && disabledStyles),
    };
  },
  valueContainer: assoc('padding', 0),
  singleValue: assoc('margin', 0),
  placeholder: () => ({
    color: theme.forms.placeholderColor,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(20),
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  indicatorsContainer: assoc('marginRight', pxToRem(-8)),
  dropdownIndicator: () => ({
    ...indicatorStyles,
  }),
  clearIndicator: () => ({
    ...indicatorStyles,
  }),
};
