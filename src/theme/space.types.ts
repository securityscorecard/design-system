import { SpaceSizes } from './space.enums';

export type SpaceSize = typeof SpaceSizes[keyof typeof SpaceSizes];
export type Space = Record<SpaceSize, number>;
