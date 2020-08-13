import { GET_TICKETS } from "../types";

const initialState = {
  arr: [],
  one: null,
};

export const tickets = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      if (action.arr) state.arr = action.arr;
      return { ...state };
    // case GET_ONE_ORDERS:
    //   state.one = action.one;
    //   return { ...state };

    default:
      return state;
  }
};
