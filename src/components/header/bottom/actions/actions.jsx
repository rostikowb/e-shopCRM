import React from "react";
import s from "./actions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  changeStateBasketModal,
  changeStateLikeModal,
} from "../../../../redux/modal/actions";

export const Action = (props) => {
  let ml = props.changeStateLikeModal;
  let mb = props.changeStateBasketModal;
  let lc = props.likeArr;
  let bc = props.basketArr;

  return (
    <div className={s.actionBox}>
      <div className={s.heartBox} onClick={() => ml()}>
        <FontAwesomeIcon className={s.icon + " " + s.heart} icon={faHeart} />
        {lc && lc.length ? <span className={s.count}>{lc.length}</span> : null}
      </div>
      <div className={s.basketBox} onClick={() => mb()}>
        <FontAwesomeIcon
          className={s.icon + " " + s.basket}
          icon={faShoppingBasket}
        />
        {bc && bc.length ? <span className={s.count}>{bc.length}</span> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    like: state.modal.like,
    basket: state.modal.basket,
    likeArr: state.addLikesBasket.likesArr,
    basketArr: state.addLikesBasket.basketArr,
  };
};

export const Actions = connect(mapStateToProps, {
  changeStateLikeModal,
  changeStateBasketModal,
})(Action);
