import { GET_ONE_GOODS, UPDATE_GOODS, UPLOAD_IMG } from "../types";

const initialState = {
  arr: [],
  imgArr: [],
  one: false,
  createData: {},
  errMsg: null,
  doneMsg: null,
};

export const goods = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_GOODS:
      if (action.msg) state.errMsg = action.msg;
      state.one = action.product;
      return { ...state };

    case UPLOAD_IMG:
      if (action.invalid) {
        state.errMsg = action.msg;
      } else {
        state.imgArr = action.arr;
      }
      // console.log(state.imgArr);
      return { ...state };

    case UPDATE_GOODS:
      if (action.invalid) {
        state.errMsg = action.msg;
      } else {
        state.doneMsg = action.msg;
      }
      // console.log(state.imgArr);
      return { ...state };

    default:
      return state;
  }
};
