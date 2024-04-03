import type { To } from 'history';

import type { SSCIcons, Types } from '../Icon/Icon.types';
import { LinkProps } from '../typographyLegacy/Link/Link.types';

export interface BreadcrumbItemProps extends Omit<LinkProps, 'color'> {
  /**
   * The breadcrumb item name
   */
  children: string;
  isSelected?: boolean;
  to?: To;
  href?: string;
  iconName?: SSCIcons | string;
  iconType?: Types;
  [key: string]: unknown;
}

export interface BreadcrumbsProps {
  /**
   * The list of breadcrumb items
   */
  children: React.ReactNode[];
  className?: string;
}
