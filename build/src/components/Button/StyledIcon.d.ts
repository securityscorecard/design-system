/// <reference types="react" />
import { StyledIconProps } from './StyledIcon.types';
export declare const iconSizes: {
    lg: number;
    md: number;
    sm: number;
};
declare const StyledIcon: import("styled-components").StyledComponent<import("react").FC<import("../Icon/Icon.types").IconProps & Omit<import("@fortawesome/react-fontawesome").FontAwesomeIconProps, "icon" | "fixedWidth" | "color" | "size">>, import("styled-components").DefaultTheme, StyledIconProps, never>;
export default StyledIcon;
