import { useEffect } from 'react';

import { InteractiveElement } from '../components/Dropdown/Dropdown.types';

const interactiveElSelector = `
    a[href],
    button,
    input,
    textarea,
    select,
    details,
    [tabindex]:not([tabindex="-1"])
`;

// Check if element is inside a React Aria modal/dialog context
const isInsideReactAriaModal = (element: HTMLElement): boolean => {
  let current = element.parentElement;
  while (current) {
    // Check for React Aria dialog role or data attributes
    if (
      current.getAttribute('role') === 'dialog' ||
      current.hasAttribute('data-react-aria-modal') ||
      current.querySelector('[role="dialog"]') !== null
    ) {
      return true;
    }
    current = current.parentElement;
  }
  return false;
};

// Get all focusable elements within a container
const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const elements = Array.from(
    container.querySelectorAll<HTMLElement>(interactiveElSelector),
  );

  // Filter out elements that are not actually focusable
  return elements.filter((el) => {
    // Skip hidden elements
    if (el.offsetParent === null) return false;

    // Skip disabled elements
    if (el.hasAttribute('disabled')) return false;

    // Skip elements with aria-hidden="true"
    if (el.getAttribute('aria-hidden') === 'true') return false;

    return true;
  });
};

export const useFocusTrap = ({
  el,
  enabled,
  onClickOut,
}: {
  el: HTMLElement;
  enabled: boolean;
  onClickOut?: () => void;
}) => {
  useEffect(() => {
    if (!el || !enabled) return;

    const active = document.activeElement;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isInsideReactAriaModal(el)) {
        e.preventDefault();
        e.stopPropagation();
        onClickOut?.();
      }
      if (e.key === 'Tab') {
        const focusableElements = getFocusableElements(el);
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          const currentElement = document.activeElement as HTMLElement;

          // Check if focus is about to leave the container
          if (!el.contains(currentElement)) {
            e.preventDefault();
            firstElement.focus();
          }

          // Handle reverse tab (Shift+Tab) on first element
          if (e.shiftKey && currentElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }

          // Handle forward tab on last element
          if (!e.shiftKey && currentElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const shouldCapture = isInsideReactAriaModal(el);

    document.addEventListener('keydown', handleKeydown, {
      capture: shouldCapture,
    });
    // eslint-disable-next-line consistent-return, @typescript-eslint/no-unused-expressions
    return () => {
      document.removeEventListener('keydown', handleKeydown, {
        capture: shouldCapture,
      });
      (active as InteractiveElement)?.focus();
    };
  }, [el, enabled, onClickOut]);
};
