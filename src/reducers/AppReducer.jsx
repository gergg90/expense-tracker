export const initialState = {
  transactions: [],
};

export const ACTION_TYPES = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TRANSACTION: {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    }

    default:
      return state;
  }
};
