import {
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_LIKE_MODAL,
  GET_ARR_ORDERS,
  GET_ONE_ORDERS,
  GET_ORDERS,
} from "../types";
import bent from "bent";
import { option } from "../../option";

export const setFetchArrOrders = (arr) => {
  return {
    type: GET_ARR_ORDERS,
    action: arr,
  };
};

const req = async (url, token, arr = false) =>
  await bent(
    option.api,
    "string",
    "POST",
    "json",
    200
  )(
    url,
    { arr },
    {
      authorization: token,
    }
  );

export const fetchAllOrders = (token, arr) => {
  return async (dispatch) => {
    const res = await req("/bought/readAll", token, arr);

    dispatch({
      type: GET_ORDERS,
      arr: res["arr"],
    });
  };
};
export const fetchOneOrder = (token, id) => {
  return async (dispatch) => {
    const res = await req("/bought/readOne/" + id, token);

    dispatch({
      type: GET_ONE_ORDERS,
      payload: res,
    });
  };
};
