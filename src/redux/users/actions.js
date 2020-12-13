import { GET_USERS } from "../types";
import bent from "bent";
import { option } from "../../option";

export const fetchAllUsers = (token, userId = false, UD = false) => {
  const path = UD ? "/users/update" : "/users/readAll";

  return async (dispatch) => {
    let res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )(
      path,
      { userId, UD },
      {
        authorization: token,
      }
    );
    console.log(res);
    dispatch({
      type: GET_USERS,
      arr: res["arr"],
      msg: res.err || false,
    });
  };
};
