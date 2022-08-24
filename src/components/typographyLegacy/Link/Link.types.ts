import React from 'react';
import type { To } from 'history';

import { Colors } from '../../_internal/BaseLink';

export interface LinkProps {
  onClick?: React.MouseEventHandler;
  href?: string;
  to?: To;
  color?: Colors;
}
