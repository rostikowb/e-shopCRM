import React from "react";
import s from "./addCommentsBtn.module.css";
import ss from "../../../GoodsArr/goodsCard/basket/cardBasket.module.css";

export const AddCommentsBtn = (props) => {
  const commAdd = props.data;
  return (
    <div
      onClick={() => commAdd()}
      className={s.addCommentBtn + " " + ss.cardBoxAll}
    >
      Написать отзыв!
    </div>
  );
};
