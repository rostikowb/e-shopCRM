import bent from "bent";
import { option } from "../../option";
import { CREATE_STUB_GOODS, GET_ONE_GOODS, PRODUCT } from "../types";

export const uploadFiles = (token, file, pathname, count) => {
  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )(
      "/img/save",
      { file, pathname, count },
      {
        authorization: token,
      }
    );
    console.log(res);
    // dispatch({
    //   type: GET_USERS,
    //   arr: res["arr"],
    // });
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
