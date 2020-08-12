import bent from "bent";
import { SUM_BASKET } from "../types";

export const addProdToCash = (urlId, type, isLoad = true, data) => {
  let url = "http://192.168.1.106:3001/goods/" + urlId;

  return async (dispatch) => {
    let res = isLoad
      ? JSON.parse(await bent(url, "string", "POST", 200)())
      : data;

    dispatch({
      type: type,
      payload: res,
    });
  };
};
export const delProdToCash = (type, data) => {
  return async (dispatch) => {
    dispatch({
      type: type,
      payload: data,
    });
  };
};
export const sumProdToCash = (data, plus) => {
  return async (dispatch) => {
    dispatch({
      type: SUM_BASKET,
      payload: data,
      plus: plus,
    });
  };
};
