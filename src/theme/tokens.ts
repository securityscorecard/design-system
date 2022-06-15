import { colors } from './colors';

/**
 * naming:
 * component name, type, color, css property, selector, css value type (color, size)
 */

export const tokens = {
  // Buttons

  // Solid

  // primary
  buttonSolidPrimaryTextColor: colors.neutral[0],
  buttonSolidPrimaryBgColor: colors.primary[500],
  buttonSolidPrimaryBgHoverColor: colors.primary[400],
  buttonSolidPrimaryBgActiveColor: colors.primary[700],
  buttonSolidPrimaryOutlineFocusColor: colors.primary[200],
  buttonSolidPrimaryBgDisabledColor: colors.primary[200],

  // danger
  buttonSolidDangerTextColor: colors.neutral[0],
  buttonSolidDangerBgColor: colors.error[500],
  buttonSolidDangerBgHoverColor: colors.error[600],
  buttonSolidDangerBgActiveColor: colors.error[700],
  buttonSolidDangerOutlineFocusColor: colors.error[500],
  buttonSolidDangerBgDisabledColor: colors.neutral[600],

  // Outline
  buttonOutlineTextColor: colors.primary[500],
  buttonOutlineBgColor: 'transparent',
  buttonOutlineBorderColor: colors.primary[500],
  buttonOutlineBgHoverColor: colors.primary[50],
  buttonOutlineTextActiveColor: colors.primary[700],
  buttonOutlineBgActiveColor: colors.primary[50],
  buttonOutlineBorderActiveColor: colors.primary[700],
  buttonOutlineOutlineFocusColor: colors.primary[200],
  buttonOutlineTextDisabledColor: colors.neutral[600],
  buttonOutlineBgDisabledColor: colors.neutral[300],
  buttonOutlineBorderDisabledColor: colors.neutral[400],

  // Text

  // primary
  buttonTextPrimaryTextColor: colors.primary[500],
  buttonTextPrimaryBorderColor: colors.primary[200],
  buttonTextPrimaryTextHoverColor: colors.primary[400],
  buttonTextPrimaryTextActiveColor: colors.primary[700],
  buttonTextPrimaryBgFocusColor: colors.primary[50],
  buttonTextPrimaryOutlineFocusColor: colors.primary[200],
  buttonTextPrimaryTextDisabledColor: colors.neutral[600],

  // secondary
  buttonTextSecondaryTextColor: colors.neutral[700],
  buttonTextSecondaryBorderColor: colors.neutral[500],
  buttonTextSecondaryTextHoverColor: colors.neutral[900],
  buttonTextSecondaryTextActiveColor: colors.neutral[1000],
  buttonTextSecondaryBgFocusColor: colors.neutral[50],
  buttonTextSecondaryOutlineFocusColor: colors.neutral[500],
  buttonTextSecondaryTextDisabledColor: colors.neutral[600],

  // danger
  buttonTextDangerTextColor: colors.error[500],
  buttonTextDangerBorderColor: colors.error[100],
  buttonTextDangerTextHoverColor: colors.error[600],
  buttonTextDangerTextActiveColor: colors.error[700],
  buttonTextDangerBgFocusColor: colors.error[50],
  buttonTextDangerOutlineFocusColor: colors.error[500],
  buttonTextDangerTextDisabledColor: colors.neutral[600],
};
