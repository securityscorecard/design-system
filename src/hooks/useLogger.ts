import { useContext } from 'react';

import { DSContext } from '../theme/DSProvider/DSProvider';

const styles = ['font-weight: bold'];
export const logStyles = ['color: darkturquoise', ...styles].join(';');
export const warnStyles = ['color: darkorange', ...styles].join(';');
export const errorStyles = ['color: crimson', ...styles].join(';');

export const logError = (namespace, message) => {
  if (process.env.NODE_ENV !== 'production') {
    throw new Error(`[design-system/${namespace}] ${message}`);
  } else {
    // eslint-disable-next-line no-console
    console.error(`%c[design-system/${namespace}]  `, errorStyles, message);
  }
};
// eslint-disable-next-line import/prefer-default-export
export const useLogger = (namespace: string) => {
  const { debugMode } = useContext(DSContext);

  return {
    log: (message: string) => {
      if (!debugMode) {
        return;
      }
      // eslint-disable-next-line no-console
      console.log(`%c[design-system/${namespace}]  `, logStyles, message);
    },
    warn: (message: string) => {
      if (process.env.NODE_ENV === 'production') {
        return;
      }
      // eslint-disable-next-line no-console
      console.warn(`%c[design-system/${namespace}]  `, warnStyles, message);
    },
    error: (message: string) => {
      logError(namespace, message);
    },
  };
};
