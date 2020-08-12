import s from "./btns.module.css";
import React from "react";
import ss from "../../../GoodsArr/goodsCard/basket/cardBasket.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index.es";
import { connect } from "react-redux";
import {
  addProdToCash,
  delProdToCash,
} from "../../../../../redux/likesBasket/actions";
import { ADD_BASKET, ADD_LIKES, DEL_LIKES } from "../../../../../redux/types";
import { changeStateBasketModal } from "../../../../../redux/modal/actions";

export const OGBt = (props) => {
  let d = props.data;
  let lr = props.likeArr;
  let isLikes = lr ? lr.find((item) => item._id == d._id) : null;
  let br = props.basketArr;
  let isBasket = br ? br.find((item) => item._id == d._id) : null;

  const add = (type) => {
    props.addProdToCash(d["_id"], type, false, d);
  };
  const remove = (type) => {
    props.delProdToCash(type, d);
  };

  return (
    <div className={s.btnBox}>
      {!isBasket ? (
        <div
          onClick={() => add(ADD_BASKET)}
          className={s.saleBtn + " " + ss.cardBoxAll}
          title="Добавить товар в корзину."
        >
          Купить
        </div>
      ) : (
        <div
          onClick={() => add(props.changeStateBasketModal())}
          className={s.saleBtn + " " + ss.cardBoxAll}
          title="Показать содержимое корзины."
        >
          Откр. Корзину
        </div>
      )}

      <div
        onClick={() => (isLikes ? remove(DEL_LIKES) : add(ADD_LIKES))}
        className={s.likeBtn}
      >
        <FontAwesomeIcon
          className={s.icon + " " + (isLikes ? s.likeBtnAct : null)}
          title={
            !isLikes
              ? "Добавить товар в избранное/понравившееся."
              : "Убрать товар из избранного/понравившегося."
          }
          icon={faHeart}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    likeArr: state.addLikesBasket.likesArr,
    basketArr: state.addLikesBasket.basketArr,
  };
};

export const OGBtn = connect(mapStateToProps, {
  addProdToCash,
  delProdToCash,
  changeStateBasketModal,
})(OGBt);
