import { PortalPlacements } from './useCalculatePortalPlacements.enums';
export declare type StyleProps = {
    space: number;
    width?: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
};
export declare type Placements = typeof PortalPlacements[keyof typeof PortalPlacements];
export declare type UseCalculatePortalPlacementOptions = {
    placement: Placements;
    width?: number;
    space?: number;
};
