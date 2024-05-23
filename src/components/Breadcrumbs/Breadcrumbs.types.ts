import type { To } from 'history';

import type { IconNames, RegularIconTypes } from '../Icon/Icon.types';
import { LinkProps } from '../typographyLegacy/Link/Link.types';

export interface BreadcrumbItemProps extends Omit<LinkProps, 'color'> {
  /**
   * The breadcrumb item name
   */
  children: string;
  isSelected?: boolean;
  to?: To;
  href?: string;
  iconName?: IconNames;
  iconType?: RegularIconTypes;
  [key: string]: unknown;
}

export interface BreadcrumbsProps {
  /**
   * The list of breadcrumb items
   */
  children: React.ReactNode[];
  className?: string;
}
