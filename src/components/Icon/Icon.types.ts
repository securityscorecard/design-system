import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { AriaAttributes, MouseEventHandler } from 'react';

import { Color } from '../../theme/colors.types';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { SpacingProps } from '../../types/spacing.types';

export type SSCIcons = typeof SSCIconNames[keyof typeof SSCIconNames];
export type Types = typeof IconTypes[keyof typeof IconTypes];

export interface BaseIconProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  name: SSCIcons | (string & {});
  type?: Types;
}

export interface IconProps
  extends BaseIconProps,
    SpacingProps,
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
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: Color;
  className?: string;
  hasFixedWidth?: boolean;
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
