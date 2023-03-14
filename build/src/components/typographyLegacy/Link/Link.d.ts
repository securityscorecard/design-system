import React from 'react';
import { LinkProps } from './Link.types';
declare const LinkRoot: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, {
    $color: import("../../_internal/BaseLink").Colors;
}, never>;
declare const Link: React.FC<LinkProps & React.ComponentProps<typeof LinkRoot>>;
export default Link;
