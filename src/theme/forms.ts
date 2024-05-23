import { Forms } from './forms.types';
import { colors } from './colors';
import { pxToRem } from '../utils';

export const createForms = (themeColors: typeof colors): Forms => ({
  fieldHeight: pxToRem(36),
  fieldLineHeight: pxToRem(20),
  toggleSize: 20,
  color: themeColors.neutral[900],
  bgColor: themeColors.neutral[0],
  disabledColor: themeColors.neutral[500],
  borderColor: themeColors.neutral[400],
  borderWidth: '1px',
  statefulBorderWidth: '2px',
  focusBorderColor: themeColors.primary[400],
  invalidBorderColor: themeColors.error[500],
  activeColor: themeColors.neutral[0],
  activeBgColor: themeColors.primary[50],
  activeBorderColor: themeColors.primary[500],
  disabledBgColor: themeColors.neutral[300],
  disabledBorderColor: themeColors.neutral[400],
  disabledActiveColor: themeColors.neutral[700],
  placeholderColor: themeColors.neutral[700],
  indicatorColor: themeColors.neutral[700],
  hoverIndicatorColor: themeColors.neutral[900],
  switchColor: themeColors.neutral[700],
  switchBgColor: themeColors.neutral[200],
  switchKnobBgColor: themeColors.neutral[800],
  hoverBgColor: themeColors.primary[600],
  hoverBorderColor: themeColors.primary[600],
  pressedBgColor: themeColors.primary[700],
});
