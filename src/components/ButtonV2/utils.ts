import type { Sizes, Variants } from './types';

const getTextColor = (variant: Variants, disabled: boolean) => {
  if (disabled) return 'var(--sscds-color-text-disabled)';
  switch (variant) {
    case 'subtle':
    case 'ghost':
      return 'var(--sscds-color-text-default)';
    case 'highlight-ghost':
      return 'var(--sscds-color-text-action)';
    case 'danger-ghost':
      return 'var(--sscds-color-text-danger)';
    case 'highlight':
      return 'var(--sscds-color-text-white)';
    default:
      return 'var(--sscds-color-text-inverse)';
  }
};

const getBackgroundColor = (
  variant: Variants,
  state: 'default' | 'hover',
  disabled: boolean,
) => {
  return `var(--sscds-color-background-action-${variant}-${
    disabled ? 'disabled' : state
  })`;
};
export const getButtonSize = (size: Sizes) =>
  size === 'lg' ? '3rem' : size === 'sm' ? '2rem' : '2.5rem';

export const getCommonButtonStyles = ({
  variant,
  size,
  disabled,
}: {
  variant: Variants;
  size: Sizes;
  disabled: boolean;
}) => ({
  '--sscds-button-color-text': getTextColor(variant, disabled),
  '--sscds-button-color-background': getBackgroundColor(
    variant,
    'default',
    disabled,
  ),
  '--sscds-button-color-background-hover': getBackgroundColor(
    variant,
    'hover',
    disabled,
  ),
  '--sscds-button-color-border':
    variant === 'subtle'
      ? 'inset 0 0 0 1px var(--sscds-color-border-action-subtle)'
      : 'none',
  '--sscds-button-font-size':
    size === 'lg'
      ? 'var(--sscds-font-size-elementlabel-md)'
      : 'var(--sscds-font-size-elementlabel-sm)',
});
