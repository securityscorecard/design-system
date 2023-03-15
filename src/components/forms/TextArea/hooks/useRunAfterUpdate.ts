import { useLayoutEffect, useRef } from 'react';

export const useRunAfterUpdate = (): ((callback: () => void) => void) => {
  const afterPaintRef = useRef(null);
  useLayoutEffect(() => {
    if (afterPaintRef.current) {
      afterPaintRef.current();
      afterPaintRef.current = null;
    }
  });
  return (callback) => {
    afterPaintRef.current = callback;
  };
};
