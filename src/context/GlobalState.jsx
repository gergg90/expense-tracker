import { createContext, useEffect, useReducer } from "react";
import { globalReducer, ACTION_TYPES } from "../reducers/AppReducer";

export const GlobalState = createContext();

const initialState = {
  transactions: [],
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) =>
    dispatch({
      type: ACTION_TYPES.ADD_TRANSACTION,
      payload: transaction,
    });

  const deleteTransaction = (id) =>
    dispatch({
      type: ACTION_TYPES.DELETE_TRANSACTION,
      payload: id,
    });

  return (
    <GlobalState.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
