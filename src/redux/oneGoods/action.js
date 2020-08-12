import {
  CHANGE_COMMENTS_MODAL,
  COMMENTS_ERROR,
  PRODUCT,
  SET_IMG,
  UD_COMMENT,
} from "../types";
import bent from "bent";
import { option } from "../../option";

export const imgOnShowSet = (img) => {
  return { type: SET_IMG, img: img };
};

export const fetchOneGoods = (urlId, isLoad = true, data) => {
  return async (dispatch) => {
    let res = isLoad
      ? JSON.parse(
          await bent(option.api, "string", "POST", 200)("/goods/" + urlId)
        )
      : data;

    dispatch({
      type: PRODUCT,
      payload: res,
    });
  };
};
export const addComments = (obj, token, goodsId, boughtId, boughtIndex) => {
  obj.goodsId = goodsId;
  obj.boughtId = boughtId;

  console.log(boughtIndex);

  return async (dispatch) => {
    dispatch({
      type: COMMENTS_ERROR,
      msg: null,
    });
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )("/goods/addComment", obj, {
      authorization: token,
    });

    console.log(res);

    if (res["invalid"]) {
      dispatch({
        type: COMMENTS_ERROR,
        msg: res["msg"],
      });
    } else {
      dispatch({
        type: PRODUCT,
        payload: res["oneGoods"],
      });
      dispatch({
        type: UD_COMMENT,
        // id: res["oneGoods"]["_id"],
        gIndex: res["gIndex"],
        bIndex: boughtIndex,
      });
      dispatch({ type: CHANGE_COMMENTS_MODAL });
    }
  };
};
