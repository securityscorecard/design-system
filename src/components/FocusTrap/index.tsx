import React from 'react';

import type { UseFocusTrapOptions } from './useFocusTrap';
import useFocusTrap from './useFocusTrap';

export interface FocusTrapProps extends Omit<UseFocusTrapOptions, 'isActive'> {
  /**
   * Children to render within the focus trap
   */
  children: React.ReactNode;
  /**
   * Whether the focus trap is active
   */
  isActive: boolean;
  /**
   * Additional CSS class name for the container
   */
  className?: string;
  /**
   * Additional props to pass to the container div
   */
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Custom element type for the container
   */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * FocusTrap component for constraining keyboard navigation within modals, drawers, and overlays.
 *
 * This component automatically manages focus trapping when active and provides
 * accessible behavior following WCAG guidelines for modal dialogs.
 *
 * @example
 * ```tsx
 * const MyModal = ({ isOpen, onClose }) => {
 *   return (
 *     <FocusTrap
 *       isActive={isOpen}
 *       onDeactivate={onClose}
 *       allowEscapeKey={true}
 *       allowClickOutside={true}
 *       containerProps={{
 *         role: 'dialog',
 *         'aria-modal': 'true',
 *         'aria-labelledby': 'modal-title'
 *       }}
 *     >
 *       <div>
 *         <h2 id="modal-title">Modal Title</h2>
 *         <p>Modal content goes here</p>
 *         <button onClick={onClose}>Close</button>
 *       </div>
 *     </FocusTrap>
 *   );
 * };
 * ```
 */
const FocusTrap: React.FunctionComponent<FocusTrapProps> = ({
  children,
  isActive,
  restoreFocus = true,
  className,
  containerProps = {},
  as: Component = 'div',
}) => {
  const { trapRef } = useFocusTrap({
    isActive,
    restoreFocus,
  });
  return React.createElement(
    Component,
    {
      ref: trapRef,
      className,
      ...containerProps,
    },
    children,
  );
};

export default FocusTrap;
