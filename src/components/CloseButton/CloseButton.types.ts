import { CSSProperties } from 'react';

import { SpaceSize } from '../../theme/space.types';

export type AlignmentWrapperProps = {
  $marginCompensation?: SpaceSize;
  className: string;
};

export interface CloseButtonProps {
  /**
   * Callback called when the close button is clicked
   */
  onClose: React.MouseEventHandler;
  /**
   * Allows user to add negative margin to the CloseButton to adjust alignment
   */
  marginCompensation?: AlignmentWrapperProps['$marginCompensation'];
  /**
   * Accessible label for the close button
   */
  ariaLabel?: string;
  /**
   * Option for semantic color backgrounds
   */
  isInverted?: boolean;
  className?: string;
  style?: CSSProperties;
}
