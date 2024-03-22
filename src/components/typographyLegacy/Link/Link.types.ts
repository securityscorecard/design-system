import {
  ComponentProps,
  ElementType,
  MouseEventHandler,
  ReactNode,
} from 'react';
import type { To } from 'history';

import { Colors } from '../../_internal/BaseLink';

export interface LinkProps extends ComponentProps<'a'> {
  onClick?: MouseEventHandler;
  href?: string;
  to?: To;
  color?: Colors;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}
