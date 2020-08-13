import { GET_ARR_ORDERS, GET_ONE_ORDERS, GET_ORDERS } from "../types";

const initialState = {
  loadArr: [],
  arr: [],
  one: null,
};

export const orders = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      if (action.arr) state.arr = action.arr;
      return { ...state };
    case GET_ONE_ORDERS:
      state.one = action.one;
      return { ...state };
    case GET_ARR_ORDERS:
      state.loadArr = action.loadArr;
      return { ...state };

    default:
      return state;
  }
};
