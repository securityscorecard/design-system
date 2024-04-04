import { colors } from './colors';

export type Color = {
  [K in keyof typeof colors]: `${K}.${Extract<
    keyof (typeof colors)[K],
    string | number
  >}`;
}[keyof typeof colors];
