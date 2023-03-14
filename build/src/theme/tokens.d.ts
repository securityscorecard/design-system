import { colors as themeColors } from './colors';
import type { Typography } from './typography.types';
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
export declare const createTokens: (colors: typeof themeColors, typography: Typography) => {
    'color-action-primary': string;
    'color-action-secondary': string;
    'color-action-success': string;
    'color-action-danger': string;
    'color-action-primary-hover': string;
    'color-action-secondary-hover': string;
    'color-action-success-hover': string;
    'color-action-danger-hover': string;
    'color-action-primary-focus': string;
    'color-action-secondary-focus': string;
    'color-action-success-focus': string;
    'color-action-danger-focus': string;
    'color-action-background-primary-focus': string;
    'color-action-background-secondary-focus': string;
    'color-action-background-success-focus': string;
    'color-action-background-danger-focus': string;
    'color-action-primary-active': string;
    'color-action-secondary-active': string;
    'color-action-success-active': string;
    'color-action-danger-active': string;
    'color-action-background-primary-active': string;
    'color-action-background-success-active': string;
    'color-action-background-danger-active': string;
    'color-action-background-disabled': string;
    'color-action-text-disabled': string;
    'color-action-text-solid': string;
    'color-action-link-primary': string;
    'color-action-link-primary-hover': string;
    'color-action-link-primary-active': string;
    'color-action-link-background-primary-focus': string;
    'color-action-link-secondary': string;
    'color-action-link-secondary-hover': string;
    'color-action-link-secondary-active': string;
    'color-action-link-background-secondary-focus': string;
    'font-action-size': string;
    'font-action-lineheight': number;
    'size-action-size': number;
    'size-action-size-sm': number;
    'link-color-text-primary': string;
    'link-color-text-primary-hover': string;
    'link-color-text-primary-active': string;
    'link-color-background-primary-focus': string;
    'link-color-text-secondary': string;
    'link-color-text-secondary-hover': string;
    'link-color-text-secondary-active': string;
    'link-color-background-secondary-focus': string;
};
