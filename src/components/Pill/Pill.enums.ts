export const PillColorsEnums = {
  gray: 'gray',
  blue: 'blue',
  turquoise: 'turquoise',
  teal: 'teal',
  green: 'green',
  yellow: 'yellow',
  orange: 'orange',
  red: 'red',
  pink: 'pink',
  purple: 'purple',
  brown: 'brown',
} as const;

export const PillColors: Record<
  keyof typeof PillColorsEnums,
  [string, string]
> = {
  gray: [
    '--sscds-color-background-pill-gray-default',
    '--sscds-color-background-pill-gray-hover',
  ],
  blue: [
    '--sscds-color-background-pill-blue-default',
    '--sscds-color-background-pill-blue-hover',
  ],
  turquoise: [
    '--sscds-color-background-pill-turquoise-default',
    '--sscds-color-background-pill-turquoise-hover',
  ],
  teal: [
    '--sscds-color-background-pill-teal-default',
    '--sscds-color-background-pill-teal-hover',
  ],
  green: [
    '--sscds-color-background-pill-green-default',
    '--sscds-color-background-pill-green-hover',
  ],
  yellow: [
    '--sscds-color-background-pill-yellow-default',
    '--sscds-color-background-pill-yellow-hover',
  ],
  orange: [
    '--sscds-color-background-pill-orange-default',
    '--sscds-color-background-pill-orange-hover',
  ],
  red: [
    '--sscds-color-background-pill-red-default',
    '--sscds-color-background-pill-red-hover',
  ],
  pink: [
    '--sscds-color-background-pill-pink-default',
    '--sscds-color-background-pill-pink-hover',
  ],
  purple: [
    '--sscds-color-background-pill-purple-default',
    '--sscds-color-background-pill-purple-hover',
  ],
  brown: [
    '--sscds-color-background-pill-brown-default',
    '--sscds-color-background-pill-brown-hover',
  ],
} as const;

export const PillBorders: Record<
  keyof typeof PillColorsEnums,
  [string, string]
> = {
  gray: [
    '--sscds-color-border-pill-gray-default',
    '--sscds-color-border-pill-gray-hover',
  ],
  blue: [
    '--sscds-color-border-pill-blue-default',
    '--sscds-color-border-pill-blue-hover',
  ],
  turquoise: [
    '--sscds-color-border-pill-turquoise-default',
    '--sscds-color-border-pill-turquoise-hover',
  ],
  teal: [
    '--sscds-color-border-pill-teal-default',
    '--sscds-color-border-pill-teal-hover',
  ],
  green: [
    '--sscds-color-border-pill-green-default',
    '--sscds-color-border-pill-green-hover',
  ],
  yellow: [
    '--sscds-color-border-pill-yellow-default',
    '--sscds-color-border-pill-yellow-hover',
  ],
  orange: [
    '--sscds-color-border-pill-orange-default',
    '--sscds-color-border-pill-orange-hover',
  ],
  red: [
    '--sscds-color-border-pill-red-default',
    '--sscds-color-border-pill-red-hover',
  ],
  pink: [
    '--sscds-color-border-pill-pink-default',
    '--sscds-color-border-pill-pink-hover',
  ],
  purple: [
    '--sscds-color-border-pill-purple-default',
    '--sscds-color-border-pill-purple-hover',
  ],
  brown: [
    '--sscds-color-border-pill-brown-default',
    '--sscds-color-border-pill-brown-hover',
  ],
} as const;
