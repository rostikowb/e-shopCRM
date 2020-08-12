import { combineReducers } from "redux";
import modal from "./modal/reducer";
import { AllGoodsR } from "./goodsArr/AllGoodsReducer";
import { oneGoods } from "./oneGoods/reducer";
import { addLikesBasket } from "./likesBasket/reducer";
import { auth } from "./auth/reducer";
import { checkout } from "./checkout/reducer";

export default combineReducers({
  modal,
  oneGoods,
  AllGoodsR,
  addLikesBasket,
  auth,
  checkout,
});
