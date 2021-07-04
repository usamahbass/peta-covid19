import React, { useState, createContext, ReactNode } from "react";
import { PropListDataModel } from "~/models";

export const AppContext = createContext(null);

interface ContextProps {
  children: ReactNode;
}

interface ContextType {
  dataInfo: object | any;
  basemap: string;
  markerType: string;
  position: null;
}

export const AppContextProvider = ({ children }: ContextProps) => {
  const [context, setContext] = useState<ContextType>({
    dataInfo: {},
    basemap: "googlemap",
    markerType: "covid",
    position: null,
  });

  return (
    <AppContext.Provider value={[context, setContext]}>
      {children}
    </AppContext.Provider>
  );
};
