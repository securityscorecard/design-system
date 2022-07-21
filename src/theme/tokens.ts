import { colors } from './colors';

/**
 * naming:
 * component name, type, color, css property, selector, css value type (color, size)
 */

export const createTokens = (themeColors: typeof colors) => ({
  // Buttons

  // Solid

  // primary
  buttonSolidPrimaryTextColor: themeColors.neutral[0],
  buttonSolidPrimaryBgColor: themeColors.primary[600],
  buttonSolidPrimaryBgHoverColor: themeColors.primary[700],
  buttonSolidPrimaryBgActiveColor: themeColors.primary[800],
  buttonSolidPrimaryOutlineFocusColor: themeColors.primary[200],
  buttonSolidPrimaryBgDisabledColor: themeColors.primary[200],

  // danger
  buttonSolidDangerTextColor: themeColors.neutral[0],
  buttonSolidDangerBgColor: themeColors.error[500],
  buttonSolidDangerBgHoverColor: themeColors.error[600],
  buttonSolidDangerBgActiveColor: themeColors.error[700],
  buttonSolidDangerOutlineFocusColor: themeColors.error[500],
  buttonSolidDangerBgDisabledColor: themeColors.neutral[600],

  // Outline
  buttonOutlineTextColor: themeColors.primary[600],
  buttonOutlineBgColor: 'transparent',
  buttonOutlineBorderColor: themeColors.primary[600],
  buttonOutlineBgHoverColor: themeColors.primary[50],
  buttonOutlineTextActiveColor: themeColors.primary[800],
  buttonOutlineBgActiveColor: themeColors.primary[50],
  buttonOutlineBorderActiveColor: themeColors.primary[800],
  buttonOutlineOutlineFocusColor: themeColors.primary[200],
  buttonOutlineTextDisabledColor: themeColors.neutral[600],
  buttonOutlineBgDisabledColor: themeColors.neutral[300],
  buttonOutlineBorderDisabledColor: themeColors.neutral[400],

  // Text

  // primary
  buttonTextPrimaryTextColor: themeColors.primary[500],
  buttonTextPrimaryBorderColor: themeColors.primary[200],
  buttonTextPrimaryTextHoverColor: themeColors.primary[400],
  buttonTextPrimaryTextActiveColor: themeColors.primary[700],
  buttonTextPrimaryBgFocusColor: themeColors.primary[50],
  buttonTextPrimaryOutlineFocusColor: themeColors.primary[200],
  buttonTextPrimaryTextDisabledColor: themeColors.neutral[600],

  // secondary
  buttonTextSecondaryTextColor: themeColors.neutral[700],
  buttonTextSecondaryBorderColor: themeColors.neutral[500],
  buttonTextSecondaryTextHoverColor: themeColors.neutral[900],
  buttonTextSecondaryTextActiveColor: themeColors.neutral[1000],
  buttonTextSecondaryBgFocusColor: themeColors.neutral[50],
  buttonTextSecondaryOutlineFocusColor: themeColors.neutral[500],
  buttonTextSecondaryTextDisabledColor: themeColors.neutral[600],

  // danger
  buttonTextDangerTextColor: themeColors.error[500],
  buttonTextDangerBorderColor: themeColors.error[100],
  buttonTextDangerTextHoverColor: themeColors.error[600],
  buttonTextDangerTextActiveColor: themeColors.error[700],
  buttonTextDangerBgFocusColor: themeColors.error[50],
  buttonTextDangerOutlineFocusColor: themeColors.error[500],
  buttonTextDangerTextDisabledColor: themeColors.neutral[600],
});
