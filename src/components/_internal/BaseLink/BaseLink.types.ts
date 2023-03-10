import type { LinkColors } from './BaseLink.enums';

export type Colors = typeof LinkColors[keyof typeof LinkColors];
