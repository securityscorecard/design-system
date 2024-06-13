const family = {
  base: "Inter, 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",

  /* new tokens */
  body: "Inter, 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif",
  mono: "'space-mono', 'Courier New', Courier, monospace",
} as const;

const sizeScale = {
  10: '0.75rem',
  20: '0.875rem',
  30: '1rem',
  40: '1.25rem',
  50: '1.5rem',
  60: '1.75rem',
  70: '2rem',
  80: '2.5rem',
  90: '3rem',
} as const;

const size = {
  h1: sizeScale[70], // 32px
  h2: sizeScale[60], // 28px
  h3: sizeScale[50], // 24px
  h4: sizeScale[40], // 20px
  h5: '1.125rem', // 18px
  lg: sizeScale[30], // 16px
  md: sizeScale[20], // 14px
  sm: sizeScale[10], // 12px

  /* new tokens */
  ...sizeScale,
  body: {
    sm: sizeScale[10],
    md: sizeScale[20],
    lg: sizeScale[30],
  },
  heading: {
    1: sizeScale[70],
    2: sizeScale[60],
    3: sizeScale[50],
    4: sizeScale[40],
    5: sizeScale[30],
  },
  display: {
    sm: sizeScale[70],
    md: sizeScale[80],
    lg: sizeScale[90],
  },
  elementlabel: {
    sm: sizeScale[20],
    md: sizeScale[30],
  },
  title: {
    sm: sizeScale[20],
    md: sizeScale[30],
    lg: sizeScale[40],
  },
} as const;

const weightScale = {
  400: 400,
  500: 500,
  600: 600,
  700: 700,
} as const;

const weight = {
  light: 400,
  regular: 400,
  medium: 500,
  semibold: 500,
  bold: 700,

  /* new tokens */
  ...weightScale,
  body: {
    default: weightScale[400],
    strong: weightScale[600],
  },
  heading: weightScale[700],
  display: {
    default: weightScale[700],
    subtle: weightScale[500],
  },
  label: {
    default: weightScale[500],
    strong: weightScale[700],
  },
  title: weightScale[500],
} as const;

const lineHeightScale = {
  10: '1rem',
  20: '1.25rem',
  30: '1.5rem',
  40: '1.75rem',
  50: '2rem',
  60: '2.25rem',
  70: '2.5rem',
  80: '3rem',
  90: '3.75rem',
} as const;

const lineHeight = {
  xxl: '1.25',
  xl: '1.25',
  lg: '1.5',
  md: '1.5',
  h4: '1.25',

  /* new tokens */
  ...lineHeightScale,
  body: {
    sm: lineHeightScale[10],
    md: lineHeightScale[20],
    lg: lineHeightScale[30],
  },
  heading: {
    1: lineHeightScale[70],
    2: lineHeightScale[60],
    3: lineHeightScale[50],
    4: lineHeightScale[40],
    5: lineHeightScale[30],
  },
  display: {
    sm: lineHeightScale[70],
    md: lineHeightScale[80],
    lg: lineHeightScale[90],
  },
  label: lineHeightScale[30],
  title: {
    sm: lineHeightScale[70],
    md: lineHeightScale[70],
    lg: lineHeightScale[40],
  },
} as const;

export const createTypography = () => ({
  family,
  size,
  weight,
  lineHeight,
});
