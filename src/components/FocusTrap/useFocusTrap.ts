import { useCallback, useEffect, useRef } from 'react';

export interface UseFocusTrapOptions {
  /**
   * Whether the focus trap is active
   */
  isActive: boolean;
  /**
   * Whether to restore focus to the previously focused element when deactivating
   */
  restoreFocus?: boolean;
}

export interface UseFocusTrapReturn {
  /**
   * Ref to attach to the focus trap container element
   */
  trapRef: React.RefObject<HTMLElement>;
  /**
   * Manually activate the focus trap
   */
  activate: () => void;
  /**
   * Manually deactivate the focus trap
   */
  deactivate: () => void;
  /**
   * Whether the focus trap is currently active
   */
  isActive: boolean;
}

// Standard selectors for focusable elements
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]',
  'audio[controls]',
  'video[controls]',
  'summary',
].join(', ');

/**
 * Custom hook for managing focus trapping in modals, drawers, and other overlay components.
 * Provides an accessible way to constrain keyboard navigation within a specific element.
 *
 * @example
 * ```tsx
 * const MyModal = ({ isOpen, onClose }) => {
 *   const { trapRef, isActive } = useFocusTrap({
 *     isActive: isOpen,
 *     restoreFocus: true,
 *   });
 *
 *   if (!isOpen) return null;
 *
 *   return (
 *     <div ref={trapRef} role="dialog" aria-modal="true">
 *       <h2>Modal Title</h2>
 *       <button onClick={onClose}>Close</button>
 *     </div>
 *   );
 * };
 * ```
 */
const useFocusTrap = ({
  isActive,
  restoreFocus = true,
}: UseFocusTrapOptions): UseFocusTrapReturn => {
  const trapRef = useRef<HTMLElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const isActiveRef = useRef(false);

  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!trapRef.current) return [];

    const elements = Array.from(
      trapRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
    );

    // Filter out elements that are not visible or have negative tabindex
    return elements.filter((element) => {
      const style = window.getComputedStyle(element);
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        element.offsetParent !== null &&
        !element.hasAttribute('disabled') &&
        element.tabIndex !== -1
      );
    });
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActiveRef.current || !trapRef.current) return;

      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement as HTMLElement;

        if (event.shiftKey) {
          // Shift + Tab: going backwards
          if (activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
          return;
        }

        // Tab: going forwards
        if (activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    },
    [getFocusableElements],
  );

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Node;

    // Allow clicks within the ssc-portals element
    const sscPortalsElement = document.getElementById('ssc-portals');
    if (sscPortalsElement && sscPortalsElement.contains(target)) {
      return;
    }

    if (!trapRef.current.contains(target)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, []);

  const activate = useCallback(() => {
    if (!trapRef.current || isActiveRef.current) return;

    if (restoreFocus) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
    }

    isActiveRef.current = true;

    requestAnimationFrame(() => {
      trapRef.current?.setAttribute('tabindex', '-1');
      trapRef.current?.focus({ preventScroll: true });
    });

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
  }, [restoreFocus, handleKeyDown, handleClickOutside]);

  const deactivate = useCallback(() => {
    if (!isActiveRef.current) return;

    isActiveRef.current = false;

    // Remove event listeners
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('click', handleClickOutside);

    if (restoreFocus && previouslyFocusedElement.current) {
      // Use setTimeout to ensure the element is visible/focusable
      setTimeout(() => {
        previouslyFocusedElement.current?.focus();
        previouslyFocusedElement.current = null;
      }, 0);
    }
  }, [restoreFocus, handleKeyDown, handleClickOutside]);

  useEffect(() => {
    if (isActive) {
      activate();
    } else {
      deactivate();
    }

    return () => {
      if (isActiveRef.current) {
        deactivate();
      }
    };
  }, [isActive, activate, deactivate]);

  return {
    trapRef,
    activate,
    deactivate,
    isActive: isActiveRef.current,
  };
};

export default useFocusTrap;
