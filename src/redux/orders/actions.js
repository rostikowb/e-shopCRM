import {
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_LIKE_MODAL,
  GET_ARR_ORDERS,
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
export const fetchAllOrders = (token, arr) => {
  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )(
      "/bought/readAll",
      { arr },
      {
        authorization: token,
      }
    );
    console.log(res);
    dispatch({
      type: GET_ORDERS,
      arr: res["arr"],
    });
  };
};
