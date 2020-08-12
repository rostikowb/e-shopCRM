import { set, get, contains } from "../../localStorage/localStorFunc";
import { COMMENTS_ERROR, PRODUCT, SET_IMG } from "../types";

const addVisitedArr = (state, value) => {
  if (!contains(state, value)) {
    if (state.length > 6) {
      state.shift();
      return [...state, value];
    } else {
      return [...state, value];
    }
  } else {
    return state;
  }
};
let visArr = get("goods/visited");
const initialState = {
  product: null,
  imgOnShow: null,
  visitedArr: visArr?.length ? visArr : set("goods/visited", ""),
  commErrMsg: null,
};

export const oneGoods = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT:
      if (!state.visitedArr) state.visitedArr = get("goods/visited");
      if (action.payload && action.payload !== state.product)
        state.product = action.payload;
      state.imgOnShow = action.payload.img[0];
      state.visitedArr = addVisitedArr(state.visitedArr, action.payload);
      state.commErrMsg = null;
      set("goods/visited", state.visitedArr);
      return { ...state };

    case SET_IMG:
      if (state.imgOnShow !== action.img) state.imgOnShow = action.img;
      return { ...state };

    case COMMENTS_ERROR:
      if (action.msg) state.commErrMsg = action.msg;
      return { ...state };

    default:
      return state;
  }
};
