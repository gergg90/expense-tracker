import { createContext } from "react";

export const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  return (
    <GlobalState.Provider value={{ total: 100 }}>
      {children}
    </GlobalState.Provider>
  );
};
