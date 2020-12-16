import { useCallback, useState } from 'react';
import { isNull } from 'ramda-adjunct';

import { useStickyObserver } from './useStickyObserver';

export const useStickyHeader = (
  modalRef: React.MutableRefObject<HTMLElement>,
  modalHeaderRef: React.MutableRefObject<HTMLElement>,
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

  useStickyObserver(modalRef, modalHeaderRef, isInView);

  return {
    isFixed,
  };
};
