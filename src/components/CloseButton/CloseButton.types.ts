import type { MouseEventHandler } from 'react';
import type { SpaceSize } from '../../theme/space.types';

export type AlignmentWrapperProps = {
  $marginCompensation?: SpaceSize;
  className: string;
};

export interface CloseButtonProps {
  /**
   * Callback called when the close button is clicked
   */
  onClose: MouseEventHandler;
  /**
   *
   */
  marginCompensation?: AlignmentWrapperProps['$marginCompensation'];
  /**
   * Accessible label for the close button
   */
  ariaLabel?: string;
  /**
   * option for semantic color backgrounds
   */
  isInverted?: boolean;
  className?: string;
}

export interface CloseButtonWrapperProps {
  /**
   * option for semantic color backgrounds
   */
  $isInverted?: boolean;
}
