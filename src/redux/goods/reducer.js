import { GET_USER, GET_USERS } from "../types";

const initialState = {
  arr: [],
  one: [],
  createData: {},
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      if (action.arr) state.arr = action.arr;
      return { ...state };
    // case GET_USER:
    //   if (action.arr) state.arr = [action.arr];
    //   return { ...state };

    default:
      return state;
  }
};
