import { useEffect } from 'react';

import { InteractiveElement } from '../components/Dropdown/Dropdown.types';

const interactiveElSelector = `
    a[href],
    button,
    input,
    textarea,
    select,
    details
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

export const useFocusTrap = ({
  el,
  enabled,
}: {
  el: HTMLElement;
  enabled: boolean;
}) => {
  useEffect(() => {
    if (!el || !enabled) return;

    // Disable if inside React Aria modal to avoid conflicts
    if (isInsideReactAriaModal(el)) {
      return;
    }
    const active = document.activeElement;
    const handleKeydown = (e) => {
      setTimeout(() => {
        if (e.key === 'Tab' && !el.contains(document.activeElement)) {
          e.preventDefault();
          const focusableChild = el?.querySelector<InteractiveElement>(
            interactiveElSelector,
          );
          focusableChild?.focus();
        }
      }, 0);
    };
    document.addEventListener('keydown', handleKeydown);
    // eslint-disable-next-line
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      (active as InteractiveElement)?.focus();
    };
  }, [el, enabled]);
};
