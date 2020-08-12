import s from "./cardLike.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/index";
import {
  addProdToCash,
  delProdToCash,
} from "../../../../../redux/likesBasket/actions";
import { connect } from "react-redux";
import { ADD_LIKES, DEL_LIKES } from "../../../../../redux/types";

export const CardLikeBo = (props) => {
  let d = props.data;
  let lr = props.likeArr;
  let isLikes = lr ? lr.find((item) => item._id == d._id) : null;
  const add = (type) => {
    props.addProdToCash(d["_id"], type);
  };

  const remove = (type) => {
    props.delProdToCash(type, d);
  };
  return (
    <div
      onClick={() => (isLikes ? remove(DEL_LIKES) : add(ADD_LIKES))}
      className={s.likeBox + " " + (isLikes ? s.likeBoxAct : null)}
    >
      <FontAwesomeIcon
        style={{ color: isLikes ? "white" : null }}
        className={s.icon}
        title={
          !isLikes
            ? "Добавить товар в избранное/понравившееся."
            : "Убрать товар из избранного/понравившегося."
        }
        icon={faHeart}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    likeArr: state.addLikesBasket.likesArr,
  };
};
export const CardLikeBox = connect(mapStateToProps, {
  addProdToCash,
  delProdToCash,
})(CardLikeBo);
