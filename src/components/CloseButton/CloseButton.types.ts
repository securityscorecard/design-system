import { SpaceSize } from '../../theme/space.types';

export type AlignmentWrapperProps = {
  $marginCompensation?: SpaceSize;
};

export interface CloseButtonProps {
  /**
   * Callback called when the close button is clicked
   */
  onClose: React.MouseEventHandler;
  /**
   *
   */
  marginCompensation?: AlignmentWrapperProps['$marginCompensation'];
  /**
   * Accessible label for the close button
   */
  ariaLabel?: string;
}
