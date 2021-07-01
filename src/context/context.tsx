import React, { useState, createContext, ReactNode } from "react";

export const AppContext = createContext(null);

interface ContextProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: ContextProps) => {
  const [context, setContext] = useState(null);

  return (
    <AppContext.Provider value={[context, setContext]}>
      {children}
    </AppContext.Provider>
  );
};
