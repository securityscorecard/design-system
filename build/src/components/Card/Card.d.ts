import React from 'react';
import { SpaceSize } from '../../theme/space.types';
import { CardProps } from './Card.types';
export declare const CardContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    horizontalPadding: SpaceSize;
    verticalPadding: SpaceSize;
}, never>;
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
