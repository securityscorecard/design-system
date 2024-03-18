/* eslint-disable no-param-reassign */
import { useCallback, useEffect, useLayoutEffect } from 'react';

export const useAutosize = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
) => {
  const setHeight = useCallback(() => {
    if (textAreaRef) {
      textAreaRef.style.height = 'auto';
      textAreaRef.style.height = `${textAreaRef.scrollHeight}px`;
    }
  }, [textAreaRef]);
  useLayoutEffect(() => {
    setHeight();
  }, [setHeight, value]);

  useEffect(() => {
    window.addEventListener('resize', setHeight);
    document.fonts.addEventListener('loadingdone', setHeight);
    return () => {
      window.removeEventListener('resize', setHeight);
      document.fonts.removeEventListener('loadingdone', setHeight);
    };
  }, [setHeight]);
};
