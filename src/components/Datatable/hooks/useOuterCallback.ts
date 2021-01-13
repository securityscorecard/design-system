import { useEffect, useRef } from 'react';

export const useOuterClick = (
  callback: (e: React.MouseEvent) => void,
): React.MutableRefObject<HTMLDivElement> => {
  const innerRef = useRef(null);
  const callbackRef = useRef(null);

  // read most recent callback and innerRef dom node from refs
  function handleClick(e) {
    if (
      innerRef.current &&
      callbackRef.current &&
      !innerRef.current.contains(e.target)
    ) {
      callbackRef.current(e);
    }
  }

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []); // no need for callback + innerRef dep

  return innerRef; // return ref; client can omit `useRef`
};
