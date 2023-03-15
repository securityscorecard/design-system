import { createContext, useContext } from 'react';

import { useLogger } from '../../hooks/useLogger';

export function createCtx<P>(namespace: string, errorMessage: string) {
  const ctx = createContext<P | undefined>(undefined);
  function useCtx() {
    const { error } = useLogger(namespace);
    const c = useContext(ctx);
    if (!c) error(errorMessage);
    return c;
  }
  return {
    useContext: useCtx,
    Provider: ctx.Provider,
  } as const;
}
