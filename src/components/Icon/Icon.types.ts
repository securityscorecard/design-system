import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { AriaAttributes, MouseEventHandler } from 'react';

import { Color } from '../../theme/colors.types';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { SpacingProps } from '../../types/spacing.types';

export type SSCIcons = (typeof SSCIconNames)[keyof typeof SSCIconNames];
export type Types = (typeof IconTypes)[keyof typeof IconTypes];
// eslint-disable-next-line @typescript-eslint/ban-types
export type IconNames = SSCIcons | (string & {});
export type RegularIconTypes = Exclude<Types, 'fal'>;
export type LightIconTypes = Exclude<Types, 'far'>;

interface BaseIconComponentProps
  extends SpacingProps,
    AriaAttributes,
    Pick<
      FontAwesomeIconProps,
      | 'rotation'
      | 'transform'
      | 'flip'
      | 'listItem'
      | 'tabIndex'
      | 'title'
      | 'titleId'
      | 'style'
    > {
  name: IconNames;
  /** Changes icon color to defined color from theme */
  color?: Color;
  className?: string;
  /** Sets icon width to fixed size. Useful for aligning icons */
  hasFixedWidth?: boolean;
  /** Apply wrapper box with fixed width and height around the icon. */
  hasFixedSize?: boolean;
  [index: `data-${string}`]: string;
  /**
   * **DEPRECATED** kept for backwards compatibility until we remove.
   * The `size` or styled component should be use for setting size.
   *
   * @deprecated Use "size" or font size in styled-component */
  fontSize?: number | string;
  /**
   * **DEPRECATED** kept for backwards compatibility until we remove.
   * You should always use Button or Link component for interactions.
   *
   * @deprecated Always use Button or Link component for interactions */
  onClick?: MouseEventHandler;
}

type RegularIcon = {
  /**
   * Apply wrapper box with fixed width and height around the icon. The `size` property has to be
   * defined if set to `true`.
   */
  hasFixedSize?: never;
  /** Sets icon size to one of the predefined sizes */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Selects correct icon variant from DS or FontAwesome. The `ssc` and `fab` (brand) can be used
   * with any size. The XL size can be used with `fal` (light) but not with `far` (regular) type.
   * Smaller sizes can be used with `far` (regular) but not with `fal` (light) type.
   */
  type?: RegularIconTypes;
};
type LightIcon = {
  hasFixedSize?: never;
  size: 'xl';
  type?: LightIconTypes;
};
export type RegularIconWithSize = {
  hasFixedSize: true;
  size: 'sm' | 'md' | 'lg';
  type?: RegularIconTypes;
};
type LightIconWithSize = {
  hasFixedSize: true;
  size: 'xl';
  type?: LightIconTypes;
};

export type IconProps = (
  | RegularIcon
  | LightIcon
  | RegularIconWithSize
  | LightIconWithSize
) &
  BaseIconComponentProps;
