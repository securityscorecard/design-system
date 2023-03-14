/// <reference types="react" />
declare const Paragraph: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("../Text/Text.types").TextProps & import("../../../types/spacing.types").SpacingProps & {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: import("styled-components").DefaultTheme;
} & {
    as?: string | import("react").ComponentType<any>;
    forwardedAs?: string | import("react").ComponentType<any>;
}, never>;
export default Paragraph;
