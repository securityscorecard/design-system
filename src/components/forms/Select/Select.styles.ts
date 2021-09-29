import { transparentize } from 'polished';
import { ThemeConfig } from 'react-select/src/theme';
import { StylesConfig } from 'react-select';
import { apply, assoc, includes, pipe } from 'ramda';
import { DefaultTheme } from 'styled-components';

import { Option } from './Select.types';
import { getPaddingSpace } from '../../../utils/space';
import { pxToRem } from '../../../utils';
import { SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';

export const reactSelectTheme: (DSTheme: DefaultTheme) => ThemeConfig = (
  DSTheme,
) => (selectTheme) => ({
  ...selectTheme,
  colors: {
    primary: DSTheme.colors.radiantBlueberry,
    primary75: DSTheme.colors.radiantBlueberry,
    primary50: DSTheme.colors.dietBlueberry,
    primary25: transparentize(0.9, DSTheme.colors.radiantBlueberry),
    danger: DSTheme.colors.strawberry,
    dangerLight: transparentize(0.9, DSTheme.colors.strawberry),
    neutral0: DSTheme.colors.graphite5H,
    neutral5: DSTheme.colors.graphite4H,
    neutral10: DSTheme.colors.graphite3H,
    neutral20: DSTheme.colors.graphite2H,
    neutral30: DSTheme.colors.graphiteH,
    neutral40: DSTheme.colors.graphiteHB,
    neutral50: DSTheme.colors.graphiteB,
    neutral60: DSTheme.colors.graphite2B,
    neutral70: DSTheme.colors.graphite3B,
    neutral80: DSTheme.colors.graphite4B,
    neutral90: DSTheme.colors.graphite5B,
  },
});

const stateStyles = (color) => ({
  boxShadow: `inset 0px 0px 0px 1px ${color}`,
});

const invalidStyles = (DSTheme) => ({
  ...stateStyles(DSTheme.forms.invalidBorderColor),
  borderColor: DSTheme.forms.invalidBorderColor,
});

const focusStyles = (DSTheme) => ({
  ...stateStyles(DSTheme.forms.focusBorderColor),
  borderColor: DSTheme.forms.focusBorderColor,
});

const disabledStyles = (DSTheme) => ({
  background: DSTheme.forms.disabledBgColor,
  borderColor: DSTheme.forms.disabledBorderColor,
});

const indicatorStyles = (DSTheme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: DSTheme.forms.selectIndicatorColor,
  padding: pipe(
    getPaddingSpace,
    apply(pxToRem),
  )({
    paddingSize: SpaceSizes.md,
    paddingType: PaddingTypes.squish,
    theme: DSTheme,
  }),
});

export const selectStyles: (
  DSTheme: DefaultTheme,
) => StylesConfig<Option, false> = (DSTheme) => ({
  control: (_, { selectProps, isDisabled, isFocused }) => {
    const { isInvalid, className = '' } = selectProps;
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: DSTheme.forms.fieldHeight,
      background: DSTheme.forms.bgColor,
      border: `${DSTheme.forms.borderWidth} solid ${DSTheme.forms.borderColor}`,
      borderRadius: DSTheme.borderRadius,
      color: DSTheme.forms.color,
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.forms.fieldLineHeight,
      outline: 'none',
      // padding: pipe(
      //   getPaddingSpace,
      //   apply(pxToRem),
      // )({
      //   paddingSize: SpaceSizes.md,
      //   paddingType: PaddingTypes.squish,
      //   theme: DSTheme,
      // }),
      ...(isInvalid && invalidStyles(DSTheme)),
      ...((isFocused || includes('focus', className)) && focusStyles(DSTheme)),
      ...(isDisabled && disabledStyles(DSTheme)),
    };
  },
  valueContainer: (styles) => {
    return {
      ...styles,
      fontSize: DSTheme.typography.size.md,
      lineHeight: DSTheme.typography.lineHeight.md,
      padding: 0,
    };
  },
  singleValue: assoc('margin', 0),
  multiValue: assoc('margin', 0),
  input: (styles) => ({
    ...styles,
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    fontSize: DSTheme.typography.size.md,
    lineHeight: DSTheme.typography.lineHeight.md,
  }),
  placeholder: () => ({
    color: DSTheme.forms.placeholderColor,
    fontSize: DSTheme.typography.size.md,
    lineHeight: DSTheme.typography.lineHeight.md,
  }),
  indicatorSeparator: (styles, { selectProps: { isClearable } }) =>
    isClearable ? styles : { display: 'none' },
  dropdownIndicator: () => ({
    ...indicatorStyles(DSTheme),
  }),
  clearIndicator: () => ({
    ...indicatorStyles(DSTheme),
  }),
});
