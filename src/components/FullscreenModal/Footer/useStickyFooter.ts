import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

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
    if (modalRef.current === null) return;
    const isScrollable =
      modalRef.current.scrollHeight > modalRef.current.offsetHeight;
    setShouldShowScrollToTopButton(isScrollable);
    setIsFixed(false);
  }, [modalRef, setShouldShowScrollToTopButton]);

  useEffect(() => {
    showScrollToTopButton();
    window.addEventListener('resize', debounce(showScrollToTopButton, 200));
  }, [modalRef, showScrollToTopButton]);

  const isInView = useCallback(() => {
    if (modalRef.current === null || modalFooterRef.current === null) return;
    const scrollOffset =
      modalRef.current.scrollTop + modalRef.current.offsetHeight;
    const contentHeight =
      modalRef.current.scrollHeight - modalFooterRef.current.scrollHeight;

    if (isFixed && scrollOffset >= contentHeight) {
      setIsFixed(false);
    } else if (
      !isFixed &&
      scrollOffset < contentHeight - contentHeight * 0.001
    ) {
      setIsFixed(true);
    }
  }, [isFixed, setIsFixed, modalRef, modalFooterRef]);
  const [observer] = useState(new MutationObserver(() => isInView()));

  useEffect(() => {
    if (
      modalRef.current !== null &&
      modalFooterRef.current !== null &&
      shouldShowScrollToTopButton
    ) {
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
  }, [
    observer,
    modalRef,
    modalFooterRef,
    shouldShowScrollToTopButton,
    isInView,
  ]);

  return {
    isFixed,
    shouldShowScrollToTopButton,
  };
};
