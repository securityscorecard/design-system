/* eslint-disable no-console */
import { useContext } from 'react';

import { DSContext } from '../theme/DSProvider/DSProvider';

const styles = ['font-weight: bold'];
export const logStyles = ['color: darkturquoise', ...styles].join(';');
export const warnStyles = ['color: darkorange', ...styles].join(';');
export const errorStyles = ['color: crimson', ...styles].join(';');

export const logError = (namespace, message, ...data: unknown[]) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(
      `%c[design-system/${namespace}]  `,
      errorStyles,
      message,
      ...data,
    );
    throw new Error(`[design-system/${namespace}] ${message}`);
  } else {
    console.error(
      `%c[design-system/${namespace}]  `,
      errorStyles,
      message,
      ...data,
    );
  }
};
export const useLogger = (namespace: string) => {
  const { debugMode } = useContext(DSContext);

  return {
    log: (message: string, ...data: unknown[]) => {
      if (!debugMode) {
        return;
      }
      console.log(
        `%c[design-system/${namespace}]  `,
        logStyles,
        message,
        ...data,
      );
    },
    warn: (message: string, ...data: unknown[]) => {
      if (process.env.NODE_ENV === 'production') {
        return;
      }
      console.warn(
        `%c[design-system/${namespace}]  `,
        warnStyles,
        message,
        ...data,
      );
    },
    error: (message: string, ...data: unknown[]) => {
      logError(namespace, message, ...data);
    },
  };
};
