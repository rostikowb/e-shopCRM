import React from "react";
import s from "./title.module.css";

export const GoodsTitle = (props) => {
  return <h1 className={s.goodsTitle}>{props.data}</h1>;
};
