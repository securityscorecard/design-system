const radiiScale = {
  0: '0',
  10: '0.125rem',
  20: '0.25rem',
  30: '0.5rem',
  40: '1rem',
  50: '1.5rem',
} as const;

export const createRadii = () => ({
  default: '4px',
  double: '8px',
  large: '16px',
  half: '2px',
  round: '50em',

  /* new tokens */
  ...radiiScale,
  circle: '100%',
  pill: 'calc(infinity * 1px)',
  button: radiiScale[30],
  input: radiiScale[20],
  card: radiiScale[30],
  dialog: radiiScale[50],
  surface: {
    sm: radiiScale[20],
    md: radiiScale[30],
    lg: radiiScale[40],
  },
});
