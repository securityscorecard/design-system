import { useRef } from 'react';

type Handler<E> = (event?: E) => void;

export const useDebouncedHandler = <Event>(
  fn: Handler<Event>,
): Handler<Event> => {
  const timeout = useRef(null);

  return (event) => {
    if (timeout.current) {
      window.cancelAnimationFrame(timeout.current);
    }
    timeout.current = window.requestAnimationFrame(() => {
      fn(event);
    });
  };
};
