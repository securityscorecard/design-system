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
  buttonSolidPrimaryBgDisabledColor: themeColors.neutral[300],
  buttonSolidPrimaryTextDisabledColor: themeColors.neutral[600],

  // success
  buttonSolidSuccessTextColor: themeColors.neutral[0],
  buttonSolidSuccessBgColor: themeColors.success[500],
  buttonSolidSuccessBgHoverColor: themeColors.success[600],
  buttonSolidSuccessBgActiveColor: themeColors.success[700],
  buttonSolidSuccessOutlineFocusColor: themeColors.success[100],
  buttonSolidSuccessBgDisabledColor: themeColors.neutral[300],
  buttonSolidSuccessTextDisabledColor: themeColors.neutral[600],

  // danger
  buttonSolidDangerTextColor: themeColors.neutral[0],
  buttonSolidDangerBgColor: themeColors.error[500],
  buttonSolidDangerBgHoverColor: themeColors.error[600],
  buttonSolidDangerBgActiveColor: themeColors.error[700],
  buttonSolidDangerOutlineFocusColor: themeColors.error[100],
  buttonSolidDangerBgDisabledColor: themeColors.neutral[300],
  buttonSolidDangerTextDisabledColor: themeColors.neutral[600],

  // Outline

  // primary
  buttonOutlinePrimaryTextColor: themeColors.primary[600],
  buttonOutlinePrimaryBgColor: 'transparent',
  buttonOutlinePrimaryBorderColor: themeColors.primary[600],

  buttonOutlinePrimaryTextHoverColor: themeColors.primary[700],
  buttonOutlinePrimaryBorderHoverColor: themeColors.primary[700],

  buttonOutlinePrimaryTextFocusColor: themeColors.primary[700],
  buttonOutlinePrimaryBorderFocusColor: themeColors.primary[700],
  buttonOutlinePrimaryOutlineFocusColor: themeColors.primary[200],

  buttonOutlinePrimaryTextActiveColor: themeColors.primary[800],
  buttonOutlinePrimaryBgActiveColor: themeColors.primary[50],
  buttonOutlinePrimaryBorderActiveColor: themeColors.primary[800],

  buttonOutlinePrimaryTextDisabledColor: themeColors.neutral[600],
  buttonOutlinePrimaryBorderDisabledColor: themeColors.neutral[600],

  // success
  buttonOutlineSuccessTextColor: themeColors.success[500],
  buttonOutlineSuccessBgColor: 'transparent',
  buttonOutlineSuccessBorderColor: themeColors.success[500],

  buttonOutlineSuccessTextHoverColor: themeColors.success[600],
  buttonOutlineSuccessBorderHoverColor: themeColors.success[600],

  buttonOutlineSuccessTextFocusColor: themeColors.success[600],
  buttonOutlineSuccessBorderFocusColor: themeColors.success[600],
  buttonOutlineSuccessOutlineFocusColor: themeColors.success[100],

  buttonOutlineSuccessTextActiveColor: themeColors.success[700],
  buttonOutlineSuccessBgActiveColor: themeColors.success[50],
  buttonOutlineSuccessBorderActiveColor: themeColors.success[700],

  buttonOutlineSuccessTextDisabledColor: themeColors.neutral[600],
  buttonOutlineSuccessBorderDisabledColor: themeColors.neutral[600],

  // danger
  buttonOutlineDangerTextColor: themeColors.error[500],
  buttonOutlineDangerBgColor: 'transparent',
  buttonOutlineDangerBorderColor: themeColors.error[500],

  buttonOutlineDangerTextHoverColor: themeColors.error[600],
  buttonOutlineDangerBorderHoverColor: themeColors.error[600],

  buttonOutlineDangerTextFocusColor: themeColors.error[600],
  buttonOutlineDangerBorderFocusColor: themeColors.error[600],
  buttonOutlineDangerOutlineFocusColor: themeColors.error[100],

  buttonOutlineDangerTextActiveColor: themeColors.error[700],
  buttonOutlineDangerBgActiveColor: themeColors.error[50],
  buttonOutlineDangerBorderActiveColor: themeColors.error[700],

  buttonOutlineDangerTextDisabledColor: themeColors.neutral[600],
  buttonOutlineDangerBorderDisabledColor: themeColors.neutral[600],

  // Text

  // primary
  buttonTextPrimaryTextColor: themeColors.primary[600],
  buttonTextPrimaryTextHoverColor: themeColors.primary[700],
  buttonTextPrimaryTextActiveColor: themeColors.primary[800],
  buttonTextPrimaryTextFocusColor: themeColors.primary[700],
  buttonTextPrimaryBgFocusColor: themeColors.primary[100],
  buttonTextPrimaryTextDisabledColor: themeColors.neutral[600],

  // secondary
  buttonTextSecondaryTextColor: themeColors.neutral[700],
  buttonTextSecondaryTextHoverColor: themeColors.neutral[900],
  buttonTextSecondaryTextActiveColor: themeColors.neutral[1000],
  buttonTextSecondaryTextFocusColor: themeColors.neutral[900],
  buttonTextSecondaryBgFocusColor: themeColors.neutral[200],
  buttonTextSecondaryTextDisabledColor: themeColors.neutral[600],

  // success
  buttonTextSuccessTextColor: themeColors.success[500],
  buttonTextSuccessTextHoverColor: themeColors.success[600],
  buttonTextSuccessTextActiveColor: themeColors.success[700],
  buttonTextSuccessTextFocusColor: themeColors.success[600],
  buttonTextSuccessBgFocusColor: themeColors.success[50],
  buttonTextSuccessTextDisabledColor: themeColors.neutral[600],

  // danger
  buttonTextDangerTextColor: themeColors.error[500],
  buttonTextDangerTextHoverColor: themeColors.error[600],
  buttonTextDangerTextActiveColor: themeColors.error[700],
  buttonTextDangerTextFocusColor: themeColors.error[600],
  buttonTextDangerBgFocusColor: themeColors.error[50],
  buttonTextDangerTextDisabledColor: themeColors.neutral[600],
});
