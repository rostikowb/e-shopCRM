import bent from "bent";
import { option } from "../../option";

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
