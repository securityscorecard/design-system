import type { MutableRefObject } from 'react';

import { useCallback, useState } from 'react';
import { isNull } from 'ramda-adjunct';

import { useStickyObserver } from './useStickyObserver';
import { useDebouncedHandler } from './useDebouncedHandler';

export const useStickyHeader = (
  modalRef: MutableRefObject<HTMLElement>,
  modalHeaderRef: MutableRefObject<HTMLElement>,
): { isFixed: boolean } => {
  const [isFixed, setIsFixed] = useState(false);

  const isInView = useCallback(() => {
    if (isNull(modalRef.current) || isNull(modalHeaderRef.current)) return;
    const scrollOffset = modalRef.current.scrollTop;
    const headerHeight = modalHeaderRef.current.scrollHeight;

    if (isFixed && scrollOffset <= headerHeight) {
      setIsFixed(false);
    } else if (!isFixed && scrollOffset > headerHeight) {
      setIsFixed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFixed]);
  const debouncedIsInView = useDebouncedHandler(isInView);

  useStickyObserver(modalRef, modalHeaderRef, debouncedIsInView);

  return {
    isFixed,
  };
};
