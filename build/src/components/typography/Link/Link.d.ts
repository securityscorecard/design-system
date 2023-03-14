import React from 'react';
import { LinkProps } from './Link.types';
declare const StyledLink: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, {}, never>;
declare const Link: React.FC<LinkProps & React.ComponentProps<typeof StyledLink>>;
export default Link;
