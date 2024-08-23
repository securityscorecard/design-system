import {
  amber,
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
};

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

  /* new tokens */
  1: indigo.indigo1,
  2: indigo.indigo2,
  3: indigo.indigo3,
  4: indigo.indigo4,
  5: indigo.indigo5,
  6: indigo.indigo6,
  7: indigo.indigo7,
  8: indigo.indigo8,
  9: indigo.indigo9,
  10: indigo.indigo10,
  11: indigo.indigo11,
  12: indigo.indigo12,
};

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
};

const neutralAlpha = {
  1: slateA.slateA1,
  2: slateA.slateA2,
  3: slateA.slateA3,
  4: slateA.slateA4,
  5: slateA.slateA5,
  6: slateA.slateA6,
  7: slateA.slateA7,
  8: slateA.slateA8,
  9: slateA.slateA9,
  10: slateA.slateA10,
  11: slateA.slateA11,
  12: slateA.slateA12,
};

const info = {
  50: indigo.indigo2,
  100: indigo.indigo4,
  400: indigo.indigo8,
  500: indigo.indigo10,
  600: indigo.indigo11,
  700: indigo.indigo11,
  800: indigo.indigo11,
  900: indigo.indigo12,
};

const success = {
  50: green.green2,
  100: green.green4,
  400: green.green8,
  500: green.green10,
  600: green.green11,
  700: green.green11,
  800: green.green11,
  900: green.green12,
};

const warning = {
  50: amber.amber2,
  100: amber.amber4,
  400: amber.amber8,
  500: amber.amber10,
  600: amber.amber11,
  700: amber.amber11,
  800: amber.amber11,
  900: amber.amber12,
};

const error = {
  50: tomato.tomato2,
  100: tomato.tomato4,
  400: tomato.tomato8,
  500: tomato.tomato11,
  600: tomato.tomato11,
  700: tomato.tomato11,
  800: tomato.tomato11,
  900: tomato.tomato12,
};

const danger = {
  50: tomato.tomato2,
  100: tomato.tomato4,
  400: tomato.tomato8,
  500: tomato.tomato11,
  600: tomato.tomato11,
  700: tomato.tomato11,
  800: tomato.tomato11,
  900: tomato.tomato12,
};

const grade = {
  A: severityScale.green[40],
  B: severityScale.yellow[40],
  C: severityScale.orange[40],
  D: severityScale.red[40],
  F: severityScale.deepred[40],
};

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
};

const severity = {
  informational: info[600],
  positive: severityScale.green[40],
  low: severityScale.yellow[40],
  medium: severityScale.orange[40],
  high: severityScale.red[40],
  critical: severityScale.deepred[40],
};

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
  neutralAlpha,
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
    overlay: neutralAlpha[10],
    surface: {
      default: neutral[0],
      dynamic: {
        default: neutralAlpha[2],
        inverse: whiteA.whiteA2,
      },
      none: 'transparent',
      hover: neutral[2],
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
        hover: neutralAlpha[3],
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
          default: blue.blue3,
          hover: blue.blue4,
        },
        turquoise: {
          default: cyan.cyan3,
          hover: cyan.cyan4,
        },
        teal: {
          default: teal.teal3,
          hover: teal.teal4,
        },
        green: {
          default: green.green3,
          hover: green.green4,
        },
        yellow: {
          default: amber.amber3,
          hover: amber.amber4,
        },
        orange: {
          default: orange.orange3,
          hover: orange.orange4,
        },
        red: {
          default: tomato.tomato3,
          hover: tomato.tomato4,
        },
        pink: {
          default: pink.pink3,
          hover: pink.pink4,
        },
        purple: {
          default: purple.purple3,
          hover: purple.purple4,
        },
        brown: {
          default: brown.brown3,
          hover: brown.brown4,
        },
        gray: {
          default: neutral[3],
          hover: neutral[4],
        },
      },
    },
  },
  border: {
    default: neutral[4],
    info: indigo.indigo8,
    success: green.green8,
    warning: amber.amber8,
    danger: tomato.tomato8,
    surface: {
      default: neutralAlpha[6],
      inverse: whiteA.whiteA3,
      none: 'transparent',
      hover: neutral[8],
      active: indigo.indigo9,
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
    default: indigo.indigo11,
    hover: indigo.indigo12,
    active: indigo.indigo11,
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
