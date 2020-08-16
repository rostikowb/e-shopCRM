import { GET_ONE_GOODS } from "../types";

const initialState = {
  arr: [],
  one: false,
  createData: {},
  errMsg: null,
};

export const goods = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_GOODS:
      if (action.msg) state.errMsg = action.msg;
      state.one = action.product;
      return { ...state };

    default:
      return state;
  }
};
