import React, { createContext, Dispatch, useReducer, FC } from "react";
import { initialState, reducer, initialStateType } from "./reducer";

export const AppContext = createContext<{
  state: initialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const Store: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
