import type { ValueOf } from './types';

import { useEffect } from 'react';

export const useManagerEvents = <A extends Record<string, string>>(listeners: {
  [key in ValueOf<A>]: (e: CustomEvent) => void;
}) => {
  useEffect(() => {
    let isMounted = true;
    Object.keys(listeners).forEach((eventName) => {
      window.addEventListener(eventName, (e: CustomEvent) => {
        if (isMounted) {
          listeners[eventName as ValueOf<A>](e);
        }
      });
    });

    return () => {
      isMounted = false;
      Object.keys(listeners).forEach((eventName) => {
        window.removeEventListener(eventName, (e: CustomEvent) => {
          listeners[eventName as ValueOf<A>](e);
        });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
