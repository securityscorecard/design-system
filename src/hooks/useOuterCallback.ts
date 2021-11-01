import React, { useEffect, useRef } from 'react';

export const useOuterClick = <E extends HTMLElement>(
  callback: (e: React.MouseEvent) => void,
): React.MutableRefObject<E> => {
  const innerRef = useRef<E>(null);
  const callbackRef = useRef(null);

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    // read most recent callback and innerRef dom node from refs
    const fireCallback = (e: MouseEvent | KeyboardEvent): void => {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target as Node) &&
        document.body.contains(e.target as Node)
      ) {
        callbackRef.current(e);
      }
    };

    const handleKeypress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        fireCallback(e);
      }
    };

    document.addEventListener('keydown', handleKeypress);
    document.addEventListener('click', fireCallback);

    return () => {
      document.removeEventListener('keydown', handleKeypress);
      document.removeEventListener('click', fireCallback);
    };
  }, []);

  return innerRef; // return ref; client can omit `useRef`
};
