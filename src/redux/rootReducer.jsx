import { combineReducers } from "redux";
import modal from "./modal/reducer";
import { AllGoodsR } from "./goodsArr/AllGoodsReducer";
import { oneGoods } from "./oneGoods/reducer";
import { addLikesBasket } from "./likesBasket/reducer";
import { auth } from "./auth/reducer";
// import { checkout } from "./checkout/reducer";
import { orders } from "./orders/reducer";
import { tickets } from "./tickets/reducer";
import { users } from "./users/reducer";
import { goods } from "./goods/reducer";

export default combineReducers({
  modal,
  oneGoods,
  AllGoodsR,
  addLikesBasket,
  auth,
  orders,
  tickets,
  users,
  goods,
});
