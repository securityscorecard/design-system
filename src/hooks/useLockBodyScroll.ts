import { useLayoutEffect } from 'react';

// Inspired by https://usehooks.com/useLockBodyScroll/
export const useLockBodyScroll = ({ enabled } = { enabled: true }): void => {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount unless disabled (eg. modals or drawers without backdrop)
    document.body.style.overflow = enabled ? 'hidden' : 'auto';
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [enabled]); // Empty array ensures effect is only run on mount and unmount
};
