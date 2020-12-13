import { GET_USERS } from "../types";

const initialState = {
  arr: [],
  one: [],
  msg: "",
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      if (action.msg) {
        state.msg = action.msg;
        console.log("UPDATE_ERROR::: ", action.msg);
      }
      if (action.arr) state.arr = action.arr;

      return { ...state };

    default:
      return state;
  }
};
