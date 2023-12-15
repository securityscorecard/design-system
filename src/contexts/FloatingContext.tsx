import React, { createContext, useContext } from 'react';

const FloatingContext = createContext<boolean>(null);
export const FloatingProvider = ({ children }) => {
  return <FloatingContext.Provider value>{children}</FloatingContext.Provider>;
};
export const useFloatingContext = () => useContext(FloatingContext);
