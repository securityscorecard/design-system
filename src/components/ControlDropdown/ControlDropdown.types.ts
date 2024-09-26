import type { MutableRefObject, ReactNode } from 'react';

import { Placements } from '../Dropdown/Dropdown.types';

export interface ControlDropdownProps {
  /**
   * Reference to opener button used to calculate correct position
   */
  parentRef: MutableRefObject<HTMLSpanElement | null>;
  /**
   * Title in dropdown header
   */
  title: string;
  /**
   * Flag to control show/hide of the dropdown
   */
  isOpen?: boolean;
  /**
   * Callback when dropdown is closed
   */
  onClose: () => void;
  /**
   * Callback when Reset to defaults is clicked. When not provided button will not show.
   */
  onReset?: () => void;
  /**
   * Callback when Apply button is clicked
   */
  onSubmit: () => void;
  /**
   *  Label of submit button in footer
   */
  submitLabel?: string;
  /**
   *  Label of close button in footer
   */
  closeLabel?: string;
  /**
   *  Label of reset button in footer
   */
  resetLabel?: string;
  /**
   * Position to which dropdown will be aligned
   */
  placement?: Placements;
  /**
   * Width of the dropdown
   */
  width?: number;
  children: ReactNode;
}
