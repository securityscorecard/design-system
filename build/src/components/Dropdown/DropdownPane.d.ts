import React from 'react';
import { DropdownPaneStyles } from './Dropdown.types';
export declare const Arrow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledDropdownPane: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DropdownPaneStyles, never>;
declare const DropdownPane: React.ForwardRefExoticComponent<{
    isElevated: boolean;
    maxWidth: number | "auto";
    onClickOut?: () => void;
    hasArrow: boolean;
    arrowRef: (el: HTMLElement) => void;
    arrowStyles: React.CSSProperties;
    contentPaddingSize: import("../../theme/space.types").SpaceSize;
    contentPaddingType: import("../../utils/space").PaddingType;
} & React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default DropdownPane;
