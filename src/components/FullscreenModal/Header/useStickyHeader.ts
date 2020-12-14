import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export const useStickyHeader = (
  modalRef: React.MutableRefObject<HTMLElement>,
  modalHeaderRef: React.MutableRefObject<HTMLElement>,
): { isFixed: boolean } => {
  const [isFixed, setIsFixed] = useState(false);

  const isInView = useCallback(() => {
    if (modalRef.current === null || modalHeaderRef.current === null) return;
    const scrollOffset = modalRef.current.scrollTop;
    const headerHeight = modalHeaderRef.current.scrollHeight;

    if (isFixed && scrollOffset <= headerHeight) {
      setIsFixed(false);
    } else if (!isFixed && scrollOffset > headerHeight) {
      setIsFixed(true);
    }
  }, [isFixed, setIsFixed, modalRef, modalHeaderRef]);
  const [observer] = useState(new MutationObserver(() => isInView()));

  useEffect(() => {
    if (modalRef.current !== null && modalHeaderRef.current !== null) {
      observer.observe(modalRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      isInView();
      modalRef.current.addEventListener('scroll', debounce(isInView, 100));
      window.addEventListener('resize', debounce(isInView, 200));
    }
    return () => {
      observer.disconnect();
    };
  }, [observer, modalRef, modalHeaderRef, isInView]);

  return {
    isFixed,
  };
};
