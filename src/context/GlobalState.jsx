import { createContext, useReducer } from "react";
import {
  initialState,
  globalReducer,
  ACTION_TYPES,
} from "../reducers/AppReducer";

export const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const addTransaction = (transaction) =>
    dispatch({
      type: ACTION_TYPES.ADD_TRANSACTION,
      payload: transaction,
    });

  return (
    <GlobalState.Provider
      value={{ transactions: state.transactions, addTransaction }}
    >
      {children}
    </GlobalState.Provider>
  );
};
