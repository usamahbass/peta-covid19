import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import { initalState, reducer, initialStateType } from "./reducer";

interface ContextProps {
  children: ReactNode;
}

export const AppContext = createContext<{
  state: initialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initalState,
  dispatch: () => null,
});

export const Store = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
