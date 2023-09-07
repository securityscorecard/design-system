const primary = {
  50: '#E7F0FF',
  100: '#D3E4FF',
  200: '#B4D0FF',
  300: '#81B0FF',
  400: '#3E85FA',
  500: '#1163EA',
  600: '#014FCF',
  700: '#003B9D',
  800: '#002B72',
  900: '#001A45',
};

const neutral = {
  0: '#fff',
  100: '#f9f9f9',
  200: '#f3f3f3',
  300: '#e8e8e8',
  400: '#d8d8d8',
  500: '#a8a8a8',
  600: '#888888',
  700: '#686868',
  800: '#555555',
  900: '#2a2a2a',
  1000: '#000',
};

const info = {
  50: '#E7F0FF',
  100: '#D3E4FF',
  200: '#B4D0FF',
  300: '#81B0FF',
  400: '#3E85FA',
  500: '#1163EA',
  600: '#014FCF',
  700: '#003B9D',
  800: '#002B72',
  900: '#001A45',
};

const success = {
  50: '#edf6ef',
  100: '#d3e9d7',
  500: '#49a25a',
  600: '#3e8a4d',
  700: '#347340',
  800: '#1B5125',
  900: '#0C3614',
};

const warning = {
  50: '#faf4e1',
  100: '#f4e5af',
  500: '#e1c048',
  600: '#c1a337',
  700: '#9f8321',
  800: '#80670D',
  900: '#5B4908 ',
};

const error = {
  50: '#f7e9e9',
  100: '#edc9ca',
  500: '#b21f24',
  600: '#971a1f',
  700: '#7e161a',
  800: '#620408',
  900: '#3E0002',
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

const brandSecondary = {
  500: '#E1C048',
} as const;

const severity = {
  informational: '#5580D7',
  positive: '#4BBA76',
  low: '#FFB147',
  medium: '#FB7A4F',
  high: '#F32E43',
};

export const colors = {
  primary,
  neutral,
  info,
  success,
  warning,
  error,
  grade,
  brand,
  brandSecondary,
  severity,
  text: {
    primary: neutral[900],
    secondary: neutral[700],
    context: neutral[600],
    danger: error[500],
    inverted: neutral[0],
  },
};
