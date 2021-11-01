import React, { createContext, FC, ReactElement, useContext } from 'react';
import { MainStore } from '../stores/MainStore';

interface ContextProviderProps {
  children: ReactElement;
}

const MainContext = createContext<MainStore | null>(null);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {

  const store = new MainStore();
  return <MainContext.Provider value={store}>
    {children}
  </MainContext.Provider>;
};

export const useMainContext = (): MainStore => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error('To use useMainContext should use a context provider');
  }

  return context;
};
