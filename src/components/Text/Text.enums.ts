export const TextSizes = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  inherit: 'inherit',
} as const;

export const TextVariants = {
  default: 'default',
  subtle: 'subtle',
  monospace: 'monospace',
  danger: 'danger',
  inherit: 'inherit',

  /** @deprecated */
  primary: 'primary',
  secondary: 'secondary',
  context: 'context',
} as const;
