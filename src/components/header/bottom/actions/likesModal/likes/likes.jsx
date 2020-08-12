import React from "react";
import s from "./likes.module.css";
import {
  addProdToCash,
  delProdToCash,
} from "../../../../../../redux/likesBasket/actions";
import { connect } from "react-redux";
import { GoodsCard } from "../../../../../pages/GoodsArr/goodsCard/goodsCard";

export const Like = (props) => {
  let lr = props.likesArr;
  return (
    <>
      <h2 className={s.title}>Избранное</h2>
      <ul className={s.likeBoxIn}>
        {lr?.length ? (
          lr.map((item) => (
            <li className={s.goodsElem} key={item._id + "likeCard"}>
              <GoodsCard data={[item, true, true]} />
            </li>
          ))
        ) : (
          // lr.map((item) => <LikesCard key={item._id + "likeCard"} data={item} />)
          <span className={s.empLikMsg}>
            Добавьте понравившейся товар в <b>&nbsp;избранное&nbsp;</b> что бы
            не потерять!
          </span>
        )}
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    likesArr: state.addLikesBasket.likesArr,
  };
};

export const Likes = connect(mapStateToProps, {
  addProdToCash,
  delProdToCash,
})(Like);
