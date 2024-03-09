import { createContext, useReducer } from "react";
import { initialState, globalReducer } from "../reducers/AppReducer";

export const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalState.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalState.Provider>
  );
};
