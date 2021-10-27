import { useEffect, useRef } from 'react';
import { isNotNull } from 'ramda-adjunct';

export const useOuterClick = (
  callback: (e: React.MouseEvent) => void,
): React.MutableRefObject<HTMLDivElement> => {
  const innerRef = useRef(null);
  const callbackRef = useRef(null);
  const isListenersAdded = useRef(false);

  // read most recent callback and innerRef dom node from refs
  const handleClick = (e) => {
    if (
      innerRef.current &&
      callbackRef.current &&
      !innerRef.current.contains(e.target)
    ) {
      callbackRef.current(e);
    }
  };

  const handleKeypress = (e) => {
    if (e.key === 'Escape') {
      handleClick(e);
    }
  };

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (isListenersAdded.current && isNotNull(callbackRef.current)) {
      window.removeEventListener('scroll', handleClick);
      isListenersAdded.current = false;
    }

    document.addEventListener('keydown', handleKeypress);
    document.addEventListener('click', handleClick);
    isListenersAdded.current = true;

    return () => {
      document.removeEventListener('keydown', handleKeypress);
      document.removeEventListener('click', handleClick);
      isListenersAdded.current = false;
    };
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
};
