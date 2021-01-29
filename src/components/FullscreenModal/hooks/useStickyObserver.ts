import { useEffect, useRef } from 'react';
import { isNotNull } from 'ramda-adjunct';

export const useStickyObserver = (
  modalRef: React.MutableRefObject<HTMLElement>,
  elementRef: React.MutableRefObject<HTMLElement>,
  isInView: () => void,
): void => {
  const observerRef = useRef(null);
  const listeners = useRef(null);
  const areListenersAdded = useRef(false);

  useEffect(() => {
    const currentModalRef = modalRef.current;
    listeners.current = {
      resizeListener: isInView,
      scrollListener: isInView,
    };

    if (areListenersAdded.current && isNotNull(listeners.current)) {
      currentModalRef.removeEventListener(
        'scroll',
        listeners.current.scrollListener,
      );
      window.removeEventListener('resize', listeners.current.resizeListener);
    }

    if (isNotNull(observerRef.current)) {
      observerRef.current.disconnect();
    }
    observerRef.current = new MutationObserver(() => isInView());

    if (isNotNull(currentModalRef) && isNotNull(elementRef.current)) {
      observerRef.current.observe(currentModalRef, {
        childList: true,
        subtree: true,
        attributes: true,
      });
      isInView();

      currentModalRef.addEventListener(
        'scroll',
        listeners.current.scrollListener,
      );
      window.addEventListener('resize', listeners.current.resizeListener);
      areListenersAdded.current = true;
    }
    return () => {
      observerRef.current.disconnect();
      currentModalRef.removeEventListener(
        'scroll',
        listeners.current.scrollListener,
      );
      window.removeEventListener('resize', listeners.current.resizeListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
};
