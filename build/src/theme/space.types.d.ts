import { SpaceSizes } from './space.enums';
export declare type SpaceSize = typeof SpaceSizes[keyof typeof SpaceSizes];
export declare type Space = Record<SpaceSize, number>;
