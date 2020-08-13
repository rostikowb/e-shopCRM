import {
  CHANGE_AUTH_MODAL,
  CHANGE_BASKET_MODAL,
  CHANGE_CATALOG_MODAL,
  CHANGE_COMMENTS_MODAL,
  CHANGE_LIKE_MODAL,
  GET_ORDERS,
  GET_TICKETS,
} from "../types";
import bent from "bent";
import { option } from "../../option";

export const fetchAllTickets = (token) => {
  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )(
      "/ticket/readAll",
      {},
      {
        authorization: token,
      }
    );
    console.log(res);
    dispatch({
      type: GET_TICKETS,
      arr: res["arr"],
    });
  };
};
