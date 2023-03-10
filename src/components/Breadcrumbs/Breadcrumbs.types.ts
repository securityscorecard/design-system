import type { To } from 'history';
import type { ReactNode } from 'react';
import type { SSCIcons } from '../Icon/Icon.types';
import type { LinkProps } from '../typographyLegacy/Link/Link.types';

export interface BreadcrumbItemProps extends Omit<LinkProps, 'color'> {
  /**
   * The breadcrumb item name
   */
  children: string;
  isSelected?: boolean;
  to?: To;
  href?: string;
  iconName?: SSCIcons | string;
  [key: string]: unknown;
}

export interface BreadcrumbsProps {
  /**
   * The list of breadcrumb items
   */
  children: ReactNode[];
  className?: string;
}
