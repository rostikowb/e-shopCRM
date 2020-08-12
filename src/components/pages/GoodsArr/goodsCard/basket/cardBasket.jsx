import s from "./cardBasket.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faCheck,
} from "@fortawesome/free-solid-svg-icons/index";
import { addProdToCash } from "../../../../../redux/likesBasket/actions";
import { connect } from "react-redux";
import { ADD_BASKET } from "../../../../../redux/types";
import { changeStateBasketModal } from "../../../../../redux/modal/actions";

export const CardBasketBo = (props) => {
  let d = props.data;
  let br = props.basketArr;
  let isBasket = br ? br.find((item) => item._id == d._id) : null;
  const add = (type) => {
    props.addProdToCash(d["_id"], type);
  };
  return (
    <>
      {!isBasket ? (
        <div
          onClick={() => add(ADD_BASKET)}
          className={s.cardBox + " " + s.cardBoxAll}
        >
          <FontAwesomeIcon
            className={s.icon}
            icon={faShoppingBasket}
            title="Добавить товар в корзину."
          />
        </div>
      ) : (
        <span
          onClick={() => props.changeStateBasketModal()}
          className={s.inBasket}
        >
          Откр. Корзину
        </span>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    basketArr: state.addLikesBasket.basketArr,
  };
};

export const CardBasketBox = connect(mapStateToProps, {
  addProdToCash,
  changeStateBasketModal,
})(CardBasketBo);
