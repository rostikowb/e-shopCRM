import bent from "bent";
import { option } from "../../option";
import { GET_ONE_GOODS, UPDATE_GOODS, UPLOAD_IMG } from "../types";

export const updateGoodsOne = (token, obj) => {
  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )(
      "/goods/update",
      { obj },
      {
        authorization: token,
      }
    );
    console.log(res);
    dispatch({
      type: UPDATE_GOODS,
      arr: res["arr"],
      invalid: res["invalid"],
      msg: res["msg"],
    });
  };
};
export const uploadFiles = (token, file, _id, count, name) => {
  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )(
      "/img/save",
      { file, _id, count, name },
      {
        authorization: token,
      }
    );
    console.log(res);
    dispatch({
      type: UPLOAD_IMG,
      arr: res["arr"],
      invalid: res["invalid"],
      msg: res["msg"],
    });
  };
};
export const createStubGoods = (token) => {
  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )(
      "/goods/createStub",
      { isAdmin: true },
      {
        authorization: token,
      }
    );

    dispatch({
      type: GET_ONE_GOODS,
      product: res.result,
    });
  };
};
export const fetchOneGoods = (urlId) => {
  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )("/goods/" + urlId, { isAdmin: true });

    dispatch({
      type: GET_ONE_GOODS,
      product: res,
    });
  };
};
