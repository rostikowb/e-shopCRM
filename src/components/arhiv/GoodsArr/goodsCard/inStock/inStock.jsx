import s from "./inStock.module.css";
import React from "react";

export const InStock = (props) => {
  let nal = props.stock;

  return (
    <div className={s.inStockBox}>
      {nal > 0 ? (
        <span className={s.nal}>В наличии 😅</span>
      ) : (
        <span className={s.notNal}>Нет в наличии 😫</span>
      )}
    </div>
  );
};
