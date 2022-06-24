import { createContext, useContext } from 'react';

export function createCtx<P>(errorMessage: string) {
  const ctx = createContext<P | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error(errorMessage);
    return c;
  }
  return {
    useContext: useCtx,
    Provider: ctx.Provider,
  } as const;
}
