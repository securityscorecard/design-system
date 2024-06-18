import { createSpace } from './space';

export type SpaceSize = keyof ReturnType<typeof createSpace>;
export type Space = Record<SpaceSize, number>;
