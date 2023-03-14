import React from 'react';
import { To } from 'history';
import { LinkColors } from './Link.enums';
export declare type Colors = typeof LinkColors[keyof typeof LinkColors];
export interface LinkProps {
    onClick?: React.MouseEventHandler;
    href?: string;
    to?: To;
    color?: Colors;
}
