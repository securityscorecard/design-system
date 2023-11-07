import { useRef } from 'react';

type Callback<P> = (params: P) => void;

export const useDebounce = <P>(callback: Callback<P>): Callback<P> => {
  const timeout = useRef<number | null>(null);

  return (params) => {
    if (timeout.current) {
      window.cancelAnimationFrame(timeout.current);
    }
    timeout.current = window.requestAnimationFrame(() => {
      callback(params);
    });
  };
};
