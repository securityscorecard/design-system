import { DefaultTheme } from 'styled-components';
import { ReactComponentLike } from 'prop-types';
import React from 'react';

import { SpaceSize } from '../../theme/space.types';
import { ActionKinds } from '../../types/action.types';

export interface CardActionsProps {
  /**
   * List of available actions for the Card footer (maximal number of actions is 2)
   */
  actions: ActionKinds<React.MouseEvent[]>[];
  /**
   * Adornment placed on the right side.
   */
  rightAdornment: React.ReactNode;
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
  actions?: ActionKinds<React.MouseEvent[]>[];
  /**
   * Actions menu aria label
   */
  actionsButtonLabel?: string;
  /**
   * Adornment placed on the left side.
   */
  leftAdornment?: React.ReactNode;
  /**
   *  Callback called when help button is clicked. Determines whether the help button is rendered or not.
   */
  onHelpClick?: () => void;
  /**
   * Node that shows as a tooltip on help button hover. Determines whether the help button is rendered or not.
   */
  helpTooltip?: React.ReactNode;
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
  style?: React.CSSProperties;
  /**
   * Alternative text from media elements
   */
  alt?: string;
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
  children: React.ReactNode;
  shouldAlignLastItemToBottom?: boolean;
}

export interface CardWrapperProps {
  paddingSize: SpaceSize;
}

export interface CardWrapperPropsWithTheme extends CardWrapperProps {
  theme: DefaultTheme;
}
