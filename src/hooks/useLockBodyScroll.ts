import { useLayoutEffect } from 'react';

const DATA_ATTR = 'sscdsLocked';

const BodyLock = {
  lock: () => {
    document.body.dataset[DATA_ATTR] = 'true';
  },
  unlock: () => {
    // eslint-disable-next-line
    delete document.body.dataset[DATA_ATTR];
  },
  isLocked: () => document.body.dataset[DATA_ATTR] === 'true',
};

// Inspired by https://usehooks.com/useLockBodyScroll/
export const useLockBodyScroll = ({ enabled } = { enabled: true }): void => {
  useLayoutEffect(() => {
    const locked = BodyLock.isLocked();
    if (!locked) {
      BodyLock.lock();
      // Check if radix disabled scrolling (e.g. DropdownMenu)
      const isRadixBlockScroll = document.body.dataset.scrollLocked === '1';
      // Check if there is overflow in inline style
      const hasInlineOverflow = document.body.style.overflow !== '';
      // Get original body overflow
      const originalStyle = isRadixBlockScroll
        ? 'hidden auto'
        : window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount unless disabled (eg. modals or drawers without backdrop)
      document.body.style.overflow = enabled ? 'hidden' : originalStyle;
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = hasInlineOverflow ? originalStyle : '';
        BodyLock.unlock();
      };
    }
    return undefined;
  }, [enabled]); // Empty array ensures effect is only run on mount and unmount
};
