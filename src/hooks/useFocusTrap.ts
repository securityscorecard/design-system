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

export const useFocusTrap = ({
  el,
  enabled,
}: {
  el: HTMLElement;
  enabled: boolean;
}) => {
  useEffect(() => {
    if (!el || !enabled) return;
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
