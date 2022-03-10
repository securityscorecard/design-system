import { colors } from './colors';
import { Buttons } from './buttons.types';

export const createButtons = (themeColors: typeof colors): Buttons => ({
  variants: {
    solid: {
      primary: {
        color: themeColors.neutral[300],
        bgColor: themeColors.primary[500],
        hoverBgColor: themeColors.primary[400],
        activeBgColor: themeColors.primary[200],
        disabledBgColor: themeColors.primary[200],
      },
      danger: {
        color: themeColors.neutral[0],
        bgColor: themeColors.error[500],
        hoverBgColor: themeColors.error[600],
        activeBgColor: themeColors.error[700],
        disabledBgColor: themeColors.neutral[600],
      },
    },
    outline: {
      primary: {
        color: themeColors.primary[500],
        bgColor: 'transparent',
        hoverBgColor: themeColors.primary[50],
        activeBgColor: themeColors.primary[50],
        disabledBgColor: themeColors.neutral[300],
        disabledColor: themeColors.neutral[600],
        borderColor: themeColors.primary[500],
        disabledBorderColor: themeColors.neutral[400],
      },
      secondary: {
        color: themeColors.neutral[800],
        bgColor: themeColors.neutral[0],
        hoverBgColor: themeColors.neutral[200],
        activeBgColor: themeColors.neutral[300],
        disabledBgColor: themeColors.neutral[300],
        disabledColor: themeColors.neutral[600],
        borderColor: themeColors.neutral[500],
        disabledBorderColor: themeColors.neutral[400],
      },
    },
    text: {
      primary: {
        color: themeColors.primary[500],
        hoverColor: themeColors.primary[400],
        activeColor: themeColors.primary[200],
        disabledColor: themeColors.neutral[600],
        borderColor: themeColors.primary[200],
      },
      secondary: {
        color: themeColors.neutral[700],
        hoverColor: themeColors.neutral[900],
        activeColor: themeColors.neutral[1000],
        disabledColor: themeColors.neutral[600],
        borderColor: themeColors.neutral[500],
      },
      danger: {
        color: themeColors.error[500],
        hoverColor: themeColors.error[600],
        activeColor: themeColors.error[700],
        disabledColor: themeColors.neutral[600],
        borderColor: themeColors.error[100],
      },
    },
  },
  heights: {
    md: 32,
    lg: 48,
    sm: 24,
  },
});
