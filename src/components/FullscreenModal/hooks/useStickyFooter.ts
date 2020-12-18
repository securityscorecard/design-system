import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { isNull } from 'ramda-adjunct';

import { useStickyObserver } from './useStickyObserver';

export const useStickyFooter = (
  modalRef: React.MutableRefObject<HTMLElement>,
  modalFooterRef: React.MutableRefObject<HTMLElement>,
): { isFixed: boolean; shouldShowScrollToTopButton: boolean } => {
  const [isFixed, setIsFixed] = useState(false);
  const [
    shouldShowScrollToTopButton,
    setShouldShowScrollToTopButton,
  ] = useState(false);

  const showScrollToTopButton = useCallback(() => {
    if (isNull(modalRef.current)) return;
    const isScrollable =
      modalRef.current.scrollHeight > modalRef.current.offsetHeight;
    setShouldShowScrollToTopButton(isScrollable);
    setIsFixed(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resizeListener = debounce(showScrollToTopButton, 200);
  useEffect(() => {
    showScrollToTopButton();
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isInView = useCallback(() => {
    if (isNull(modalRef.current) || isNull(modalFooterRef.current)) return;
    const scrollOffset =
      modalRef.current.scrollTop + modalRef.current.offsetHeight;
    const contentHeight =
      modalRef.current.scrollHeight - modalFooterRef.current.scrollHeight;
    const fixedAtThreshold = contentHeight * 0.001;

    if (isFixed && scrollOffset >= contentHeight) {
      setIsFixed(false);
    } else if (!isFixed && scrollOffset < contentHeight - fixedAtThreshold) {
      setIsFixed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFixed]);

  useStickyObserver(modalRef, modalFooterRef, isInView);

  return {
    isFixed,
    shouldShowScrollToTopButton,
  };
};
