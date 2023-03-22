import type { DefaultTheme } from 'styled-components';
import type { ReactComponentLike } from 'prop-types';
import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import type { SpaceSize } from '../../theme/space.types';
import type { ActionKinds } from '../../types/action.types';
import type { SSCIcons, Types } from '../Icon/Icon.types';

export interface CardActionsProps {
  /**
   * List of available actions for the Card footer (maximal number of actions is 2)
   */
  actions: ActionKinds<
    MouseEvent[],
    void,
    {
      isDisabled?: boolean;
      iconName?: SSCIcons | string;
      iconType?: Types | string;
      ariaLabel?: string;
    }
  >[];
  /**
   * Adornment placed on the right side.
   */
  rightAdornment: ReactNode;
}

export interface CardHeaderProps {
  /**
   * Card main title
   */
  title: string;
  /**
   * Subtitle text
   */
  subtitle?: string;
  /**
   * List of available actions in the dropdown menu
   */
  actions?: ActionKinds<MouseEvent[]>[];
  /**
   * Actions menu aria label
   */
  actionsButtonLabel?: string;
  /**
   * Adornment placed on the left side.
   */
  leftAdornment?: ReactNode;
  /**
   *  Callback called when help button is clicked. Determines whether the help button is rendered or not.
   */
  onHelpClick?: () => void;
  /**
   * Node that shows as a tooltip on help button hover. Determines whether the help button is rendered or not.
   */
  helpTooltip?: ReactNode;
  /**
   * Title max number of lines.
   */
  maxTitleLinesCount?: number;
  /**
   * Subtitle max number of lines.
   */
  maxSubtitleLinesCount?: number;
}

export interface CardMediaProps {
  /**
   * `src` attribute for media elements. If no media element is specified in the `as` property this
   * source will be used as a `background-image` for element.
   */
  mediaSrc?: string;
  /**
   * Custom css `style` attribute
   */
  style?: CSSProperties;
  /**
   * Alternative text from media elements
   */
  alt: string;
  /**
   * Can specify any element or React component.
   */
  as?: ReactComponentLike;
}

export interface CardMediaWrapperProps {
  $isMediaComponent: boolean;
  $isImageComponent: boolean;
}

export interface CardProps {
  children: ReactNode;
  as?: ReactComponentLike;
  onClick?: (event: Event) => void;
  to?: string;
  href?: string;
  shouldAlignLastItemToBottom?: boolean;
  className?: string;
}

export interface CardWrapperProps {
  paddingSize: SpaceSize;
}

export interface CardWrapperPropsWithTheme extends CardWrapperProps {
  theme: DefaultTheme;
}
