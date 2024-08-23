import type { ComponentProps, ElementRef, ElementType, Ref } from 'react';

import type { IconNames, RegularIconTypes } from '../Icon';

export type BaseIcon = {
  name: IconNames;
  type?: RegularIconTypes;
};
export type Variants =
  | 'base'
  | 'highlight'
  | 'danger'
  | 'subtle'
  | 'ghost'
  | 'highlight-ghost'
  | 'danger-ghost';
export type Sizes = 'sm' | 'md' | 'lg';

type ButtonOwnProps<Element extends ElementType> = {
  /** Button label */
  children: string | string[];
  /** Visual variant of the button */
  variant?: Variants;
  /** Sizing variant */
  size?: Sizes;
  /** Definition of icon that appears before button label */
  iconStart?: BaseIcon;
  /** Definition of icon that appears after button label */
  iconEnd?: BaseIcon;
  /** Button minimal width in px. This property is not set by default */
  minWidth?: number;
  /** Disable the button to prevent clicking */
  isDisabled?: boolean;
  /** Display loading spinner and disable button to prevent clicking */
  isLoading?: boolean;
  /** Text displayed next to spinner in loading state */
  loadingText?: string;
  /** Expands button to full width of the parrent component */
  isExpanded?: boolean;
  /** Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router  */
  as?: Element;
  elRef?: Ref<ElementRef<Element>>;
};

export type ButtonV2Props<Element extends ElementType> =
  ButtonOwnProps<Element> &
    Omit<ComponentProps<Element>, keyof ButtonOwnProps<Element>>;

type IconButtonOwnProps<Element extends ElementType> = {
  /** Human-readable label used for accessibility */
  label: string;
  /** Visual variant of the button */
  variant?: Variants;
  /** Sizing variant */
  size?: Sizes;
  /** Name of the used icon */
  iconName: IconNames;
  /** Icon family from where the icon is used */
  iconType?: RegularIconTypes;
  /** Disable the button to prevent clicking */
  isDisabled?: boolean;
  /** Display loading spinner and disable button to prevent clicking */
  isLoading?: boolean;
  /** Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router  */
  as?: Element;
  elRef?: Ref<ElementRef<Element>>;
};

export type IconButtonProps<Element extends ElementType> =
  IconButtonOwnProps<Element> &
    Omit<ComponentProps<Element>, keyof IconButtonOwnProps<Element>>;
