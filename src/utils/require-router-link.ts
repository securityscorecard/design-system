import type { ReactNode } from 'react';

import { logError } from '../hooks/useLogger';

export const requireRouterLink = (): ReactNode | null => {
  try {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    return require('react-router-dom').Link;
  } catch (e) {
    // eslint-disable-next-line no-console
    logError(
      'router-link',
      `You're trying to use Link component without 'react-router-dom' installed as dependency
of your project. To resolve this issue you can:
- install 'react-router-dom' as project dependency
- replace 'to' property with 'href'
- pass your custom Link component in 'as' property
`,
    );
    return null;
  }
};
