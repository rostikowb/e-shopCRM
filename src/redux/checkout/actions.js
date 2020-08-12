import bent from "bent";
import { option } from "../../option";
import { AUTH_API, CHE_OPT, CUPON_SET, OPT_DONE } from "../types";

export const optStubOn = (type) => {
  return (dispatch) => {
    dispatch({
      type: type,
    });
  };
};

export const setCupon = (cupon) => {
  return (dispatch) => {
    dispatch({
      type: CUPON_SET,
      cupon,
    });
  };
};

const auth = (res) => {
  return {
    type: AUTH_API,
    payload: res,
    userData: res.UD,
  };
};

const send_API_NP = async (typeOpt, str, ref = "") => {
  let url = `https://api.novaposhta.ua`;
  let obj = {
    apiKey: option.NPkey,
    modelName: typeOpt === "city" ? "Address" : "AddressGeneral",
    calledMethod: typeOpt === "city" ? "searchSettlements" : "getWarehouses",
    methodProperties: {
      CityRef: ref,
      CityName: typeOpt === "city" ? str : "",
      Limit: typeOpt === "city" ? 5 : 500,
      Language: "ru",
    },
  };
  return await bent(url, "string", "POST", "json", 200)("/v2.0/json/", obj);
};

export const searchCityNP = (str) => {
  return async (dispatch) => {
    let res = await send_API_NP("city", str);
    res = res?.success ? res?.data[0]["Addresses"] : [];
    let res2 = await send_API_NP("branchN", str, res[0]?.DeliveryCity);
    res2 = res2?.data;

    dispatch({
      type: CHE_OPT,
      arrCity: res,
      arrBranchN: res2,
    });
  };
};
export const sendToDB = (obj, token) => {
  return async (dispatch) => {
    const res = await bent(
      option.api,
      "string",
      "POST",
      "json",
      200
    )("/bought/create/", obj, {
      authorization: token,
    });

    if (res?.UD) dispatch(auth(res));
    dispatch({
      type: OPT_DONE,
      res: res?.result,
      invalid: res?.invalid,
      UD: res?.UD,
      token: res?.token,
    });
  };
};
