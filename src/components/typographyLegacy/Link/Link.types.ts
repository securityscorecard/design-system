import React from 'react';
import { To } from 'history'; // just importing types

import { LinkColors } from './Link.enums';

export type Colors = typeof LinkColors[keyof typeof LinkColors];

export interface LinkProps {
  onClick?: React.MouseEventHandler;
  href?: string;
  to?: To;
  color?: Colors;
}
