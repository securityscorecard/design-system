import {
  amber,
  blackA,
  blue,
  brown,
  cyan,
  green,
  indigo,
  iris,
  lime,
  mauve,
  orange,
  pink,
  purple,
  slate,
  slateA,
  teal,
  tomato,
  whiteA,
} from '@radix-ui/colors';

const severityScale = {
  green: {
    10: '#E9F7EE',
    20: '#BDE6CC',
    30: '#94D6AE',
    40: '#4BBA76',
    50: '#3A975E',
  },
  yellow: {
    10: '#FFF4E5',
    20: '#FFE2B8',
    30: '#FFCE85',
    40: '#FFB147',
    50: '#F58D00',
  },
  orange: {
    10: '#FFF0EB',
    20: '#FECEBE',
    30: '#FCA88C',
    40: '#FB7A4F',
    50: '#E03C05',
  },
  red: {
    10: '#FDDDE1',
    20: '#F99AA4',
    30: '#F66979',
    40: '#F32E43',
    50: '#CB0C20',
  },
  deepred: {
    10: '#FCDEE7',
    20: '#F69DB8',
    30: '#ED4074',
    40: '#B81143',
    50: '#9F0F3A',
  },
} as const;

const primary = {
  50: indigo.indigo3,
  100: indigo.indigo5,
  200: indigo.indigo6,
  300: indigo.indigo7,
  400: indigo.indigo8,
  500: indigo.indigo9,
  600: indigo.indigo9,
  700: indigo.indigo10,
  800: indigo.indigo11,
  900: indigo.indigo12,
} as const;

const neutral = {
  50: slate.slate1,
  100: slate.slate2,
  200: slate.slate3,
  300: slate.slate4,
  400: slate.slate7,
  500: slate.slate8,
  600: slate.slate9,
  700: slate.slate10,
  800: slate.slate11,
  900: slate.slate12,
  1000: '#000000',

  /* new tokens */
  0: '#ffffff',
  1: slate.slate1,
  2: slate.slate2,
  3: slate.slate3,
  4: slate.slate4,
  5: slate.slate5,
  6: slate.slate6,
  7: slate.slate7,
  8: slate.slate8,
  9: slate.slate9,
  10: slate.slate10,
  11: slate.slate11,
  12: slate.slate12,
  13: '#000000',
} as const;

const info = {
  50: indigo.indigo2,
  100: indigo.indigo4,
  400: indigo.indigo8,
  500: indigo.indigo10,
  600: indigo.indigo11,
  700: indigo.indigo11,
  800: indigo.indigo11,
  900: indigo.indigo12,
} as const;

const success = {
  50: green.green2,
  100: green.green4,
  400: green.green8,
  500: green.green10,
  600: green.green11,
  700: green.green11,
  800: green.green11,
  900: green.green12,
} as const;

const warning = {
  50: amber.amber2,
  100: amber.amber4,
  400: amber.amber8,
  500: amber.amber10,
  600: amber.amber11,
  700: amber.amber11,
  800: amber.amber11,
  900: amber.amber12,
} as const;

const error = {
  50: tomato.tomato2,
  100: tomato.tomato4,
  400: tomato.tomato8,
  500: tomato.tomato11,
  600: tomato.tomato11,
  700: tomato.tomato11,
  800: tomato.tomato11,
  900: tomato.tomato12,
} as const;

const danger = {
  50: tomato.tomato2,
  100: tomato.tomato4,
  400: tomato.tomato8,
  500: tomato.tomato11,
  600: tomato.tomato11,
  700: tomato.tomato11,
  800: tomato.tomato11,
  900: tomato.tomato12,
} as const;

const grade = {
  A: severityScale.green[40],
  B: severityScale.yellow[40],
  C: severityScale.orange[40],
  D: severityScale.red[40],
  F: severityScale.deepred[40],
} as const;

const brand = {
  50: '#f0ecfe',
  100: '#e5dffd',
  200: '#cabdfb',
  300: '#a995f4',
  400: '#8263f5',
  500: '#6641f3',
  600: '#4d29d4',
  700: '#3b1ab7',
  800: '#2c1193',
  900: '#1b0471',
} as const;

const severity = {
  informational: info[600],
  positive: severityScale.green[40],
  low: severityScale.yellow[40],
  medium: severityScale.orange[40],
  high: severityScale.red[40],
  critical: severityScale.deepred[40],
} as const;

const impact = '#5c33ea';
const likelihood = {
  low: '#f4907b',
  medium: '#f36756',
  high: '#eb2f40',
};

export const colors = {
  amber,
  blue,
  cyan,
  green,
  indigo,
  iris,
  lime,
  mauve,
  orange,
  pink,
  slate,
  slateA,
  tomato,
  whiteA,
  primary,
  neutral,
  info,
  success,
  warning,
  error,
  danger,
  grade,
  brand,
  severity,
  impact,
  likelihood,
  text: {
    primary: neutral[900],
    secondary: neutral[800],
    context: neutral[600],
    inverted: neutral[0],

    /* new tokens */
    default: neutral[12],
    subtle: neutral[11],
    disabled: neutral[9],
    inverse: neutral[0],
    white: '#fff',
    danger: danger[700],
    warning: warning[700],
    success: success[700],
  },

  /* new tokens */
  background: {
    body: neutral[2],
    overlay: slateA.slateA10,
    surface: {
      default: neutral[0],
      dynamic: {
        default: 'rgba(0 0 0/2.5%)',
        inverse: whiteA.whiteA2,
      },
      none: 'transparent',
    },
    input: {
      default: neutral[0],
      hover: neutral[0],
      focused: neutral[0],
      disabled: neutral[4],
      error: neutral[0],
    },
    action: {
      main: {
        default: indigo.indigo12,
        hover: indigo.indigo11,
        active: indigo.indigo12,
        disabled: neutral[4],
      },
      subtle: {
        default: 'transparent',
        hover: neutral[3],
        active: 'transparent',
        disabled: neutral[4],
      },
      danger: {
        default: tomato.tomato10,
        hover: tomato.tomato11,
        active: tomato.tomato10,
        disabled: neutral[4],
      },
      highlight: {
        default: indigo.indigo9,
        hover: indigo.indigo11,
        active: indigo.indigo9,
        disabled: neutral[4],
      },
      pill: {
        blue: {
          default: blue.blue4,
          hover: blue.blue5,
        },
        cyan: {
          default: cyan.cyan4,
          hover: cyan.cyan5,
        },
        teal: {
          default: teal.teal4,
          hover: teal.teal5,
        },
        green: {
          default: green.green4,
          hover: green.green5,
        },
        amber: {
          default: amber.amber4,
          hover: amber.amber5,
        },
        orange: {
          default: orange.orange4,
          hover: orange.orange5,
        },
        tomato: {
          default: tomato.tomato4,
          hover: tomato.tomato5,
        },
        pink: {
          default: pink.pink4,
          hover: pink.pink5,
        },
        purple: {
          default: purple.purple4,
          hover: purple.purple5,
        },
        brown: {
          default: brown.brown4,
          hover: brown.brown5,
        },
        gray: {
          default: neutral[4],
          hover: neutral[5],
        },
      },
    },
  },
  border: {
    default: neutral[4],
    surface: {
      default: blackA.blackA3,
      inverse: whiteA.whiteA3,
      none: 'transparent',
    },
    input: {
      default: neutral[8],
      hover: neutral[8],
      focused: indigo.indigo9,
      disabled: neutral[8],
      error: danger[500],
    },
    action: {
      focused: indigo.indigo9,
      danger: neutral[8],
      subtle: neutral[7],
    },
  },
  link: {
    default: indigo.indigo9,
    hover: indigo.indigo11,
    active: indigo.indigo9,
    visited: purple.purple11,
  },
  icon: {
    default: neutral[12],
    subtle: neutral[11],
    disabled: neutral[9],
    inverse: neutral[0],
    white: '#fff',
    danger: danger[700],
    warning: warning[700],
    success: success[700],
  },
};
