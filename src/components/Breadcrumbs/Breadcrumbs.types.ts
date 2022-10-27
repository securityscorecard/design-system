import { LinkProps } from '../typographyLegacy/Link/Link.types';

export interface BreadcrumbItemProps extends Omit<LinkProps, 'color'> {
  /**
   * The breadcrumb item name
   */
  children: React.ReactNode;
  isSelected?: boolean;
}

export interface BreadcrumbsProps {
  /**
   * The list of breadcrumb items
   */
  children: React.ReactNode[];
  className?: string;
}
