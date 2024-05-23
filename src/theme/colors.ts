import {
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
} from '@radix-ui/colors';

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
};

const neutral = {
  0: '#ffffff',
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
};

const info = {
  50: indigo.indigo2,
  100: indigo.indigo4,
  500: indigo.indigo10,
  600: indigo.indigo11,
  700: indigo.indigo11,
  800: indigo.indigo11,
  900: indigo.indigo12,
};

const success = {
  50: green.green2,
  100: green.green4,
  500: green.green10,
  600: green.green11,
  700: green.green11,
  800: green.green11,
  900: green.green12,
};

const warning = {
  50: amber.amber2,
  100: amber.amber4,
  500: amber.amber10,
  600: amber.amber11,
  700: amber.amber11,
  800: amber.amber11,
  900: amber.amber12,
};

const error = {
  50: tomato.tomato2,
  100: tomato.tomato4,
  500: tomato.tomato11,
  600: tomato.tomato11,
  700: tomato.tomato11,
  800: tomato.tomato11,
  900: tomato.tomato12,
};

const grade = {
  A: '#4BBA76',
  B: '#FFB147',
  C: '#FB7A4F',
  D: '#F32E43',
  F: '#B81143',
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
  informational: '#5580D7',
  positive: '#4BBA76',
  low: '#FFB147',
  medium: '#FB7A4F',
  high: '#F32E43',
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
  info,
  success,
  warning,
  error,
  grade,
  brand,
  severity,
  impact,
  likelihood,
  text: {
    primary: neutral[900],
    secondary: neutral[800],
    context: neutral[600],
    danger: error[500],
    inverted: neutral[0],
  },
};
