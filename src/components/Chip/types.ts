import type { ComponentProps, ElementType, ReactNode } from 'react';

import type { IconNames, RegularIconTypes } from '../Icon';
import { PillColors } from '../Pill';

export type Sizes = 'sm' | 'md';

export type ChipLabelProps = {
  /** String label of the chip */
  children: string | number;
  /** Font weight. When true ChipLabel will be rendered as bold */
  isStrong?: boolean;
};

export type ChipIconProps = {
  /** Used icon name */
  name: IconNames;
  /** Used icon type, `ssc` or `far` */
  type?: RegularIconTypes;
};

export type ChipProps = {
  /**
   * Chip content can be composed from `ChipLabel` and `ChipIcon` components to achieve
   * desired visual style. Those components can be used in variable order
   */
  children: ReactNode;
  /** Chip size variant */
  size?: Sizes;
  /** Chip color variant */
  color?: PillColors;
};

type InteractiveChipOwnProps<Element extends ElementType> = {
  /** Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router  */
  as?: Element;
} & ChipProps;

export type InteractiveChipProps<Element extends ElementType> =
  InteractiveChipOwnProps<Element> &
    Omit<ComponentProps<Element>, keyof InteractiveChipOwnProps<Element>>;
