import type { SpaceSize } from '../theme/space.types';

export type ResponsiveSpaceSize =
  | SpaceSize[]
  | SpaceSize
  | Breakpoints<SpaceSize>;

export interface Breakpoints<T = string> {
  xxs?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}
