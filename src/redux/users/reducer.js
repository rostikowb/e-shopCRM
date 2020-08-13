import { GET_USERS } from "../types";

const initialState = {
  arr: [],
  one: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      if (action.arr) state.arr = action.arr;
      return { ...state };
    // case GET_ONE_ORDERS:
    //   state.one = action.one;
    //   return { ...state };

    default:
      return state;
  }
};
