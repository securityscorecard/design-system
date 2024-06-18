import { colors as themeColors } from './colors';
import { createTypography } from './typography';

/**
 * naming:
 * - ...TBD
 * - component (link, pill...)
 * - category (color, font, size...)
 * - concept (action, feedback...)
 * - property (background, text, border...)
 * - variant (primary, secondary, solid...)
 * - state (hover, focus, active...)
 * - ...TBD
 *
 * Ref: https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676
 */

export const createTokens = (
  colors: typeof themeColors,
  typography: ReturnType<typeof createTypography>,
) => ({
  'action-focus-ring': `2px solid ${colors.primary[600]}`,
  'action-focus-ring-offset': '1px',

  'color-action-primary': colors.primary[600],
  'color-action-primary-hover': colors.primary[800],
  'color-action-primary-focus': colors.primary[200],
  'color-action-primary-active': colors.primary[800],
  'color-action-secondary': colors.neutral[1000],
  'color-action-secondary-hover': colors.neutral[1000],
  'color-action-secondary-focus': colors.neutral[200],
  'color-action-secondary-active': colors.neutral[900],
  'color-action-success': colors.success[700],
  'color-action-success-hover': colors.success[800],
  'color-action-success-focus': colors.success[100],
  'color-action-success-active': colors.success[900],
  'color-action-danger': colors.error[500],
  'color-action-danger-hover': colors.error[600],
  'color-action-danger-focus': colors.error[100],
  'color-action-danger-active': colors.error[700],
  'color-action-background-primary-focus': colors.primary[50],
  'color-action-background-primary-active': colors.primary[50],
  'color-action-background-secondary-focus': colors.neutral[200],
  'color-action-background-secondary-active': colors.neutral[100],
  'color-action-background-success-focus': colors.success[50],
  'color-action-background-success-active': colors.success[50],
  'color-action-background-danger-focus': colors.error[50],
  'color-action-background-danger-active': colors.error[50],
  'color-action-background-disabled': colors.neutral[300],
  'color-action-text-disabled': colors.neutral[600],
  'color-action-text-solid': colors.neutral[0],
  'color-action-link-primary': colors.primary[600],
  'color-action-link-primary-hover': colors.primary[800],
  'color-action-link-primary-active': colors.primary[600],
  'color-action-link-background-primary-focus': colors.primary[50],
  'color-action-link-secondary': colors.neutral[1000],
  'color-action-link-secondary-hover': colors.neutral[800],
  'color-action-link-secondary-active': colors.neutral[1000],
  'color-action-link-background-secondary-focus': colors.neutral[200],

  'font-action-size': typography.size.md,
  'font-action-lineheight': 1,

  'size-action-size': 36,
  'size-action-size-sm': 24,

  'link-color-text-primary': colors.primary[600],
  'link-color-text-primary-hover': colors.primary[800],
  'link-color-text-primary-active': colors.primary[600],
  'link-color-background-primary-focus': colors.primary[50],
  'link-color-text-secondary': colors.neutral[1000],
  'link-color-text-secondary-hover': colors.neutral[800],
  'link-color-text-secondary-active': colors.neutral[1000],
  'link-color-background-secondary-focus': colors.neutral[200],
});
