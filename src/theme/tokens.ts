import { colors } from './colors';

/**
 * naming:
 * - category (color, font, size...)
 * - concept (action, feedback...)
 * - property (background, text, border...) - optional
 * - variant (primary, secondary, solid...) - optional
 * - state (hover, focus, active...) - optional
 */

export const createTokens = (themeColors: typeof colors) => ({
  'color-action-primary': themeColors.primary[600],
  'color-action-secondary': themeColors.neutral[700],
  'color-action-success': themeColors.success[500],
  'color-action-danger': themeColors.error[500],
  'color-action-primary-hover': themeColors.primary[700],
  'color-action-secondary-hover': themeColors.neutral[900],
  'color-action-success-hover': themeColors.success[600],
  'color-action-danger-hover': themeColors.error[600],
  'color-action-primary-focus': themeColors.primary[200],
  'color-action-secondary-focus': themeColors.neutral[200],
  'color-action-success-focus': themeColors.success[100],
  'color-action-danger-focus': themeColors.error[100],
  'color-action-background-primary-focus': themeColors.primary[50],
  'color-action-background-secondary-focus': themeColors.neutral[200],
  'color-action-background-success-focus': themeColors.success[50],
  'color-action-background-danger-focus': themeColors.error[50],
  'color-action-primary-active': themeColors.primary[800],
  'color-action-secondary-active': themeColors.neutral[900],
  'color-action-success-active': themeColors.success[700],
  'color-action-danger-active': themeColors.error[700],
  'color-action-background-primary-active': themeColors.primary[50],
  'color-action-background-success-active': themeColors.success[50],
  'color-action-background-danger-active': themeColors.error[50],
  'color-action-background-disabled': themeColors.neutral[300],
  'color-action-text-disabled': themeColors.neutral[600],
  'color-action-text-solid': themeColors.neutral[0],
});
