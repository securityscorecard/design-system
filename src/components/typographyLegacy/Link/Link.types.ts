import type { To } from 'history';
import type { MouseEventHandler } from 'react';
import type { Colors } from '../../_internal/BaseLink';

export interface LinkProps {
  onClick?: MouseEventHandler;
  href?: string;
  to?: To;
  color?: Colors;
  className?: string;
}
