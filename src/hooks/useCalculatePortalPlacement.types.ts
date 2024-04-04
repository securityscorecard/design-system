import { PortalPlacements } from './useCalculatePortalPlacements.enums';

export type StyleProps = {
  space: number;
  width?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export type Placements =
  (typeof PortalPlacements)[keyof typeof PortalPlacements];

export type UseCalculatePortalPlacementOptions = {
  placement: Placements;
  width?: number;
  space?: number;
};
