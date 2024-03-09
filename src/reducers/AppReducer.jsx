export const initialState = {
  transactions: [],
};

export const globalReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TRANSACTION": {
        return [...state.transactions, action.payload]
    }

    default:
      return state;
  }
};
