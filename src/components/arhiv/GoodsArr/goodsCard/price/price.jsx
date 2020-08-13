import s from "./price.module.css";
import React from "react";

export const PriceBox = (props) => {
  // console.log(props.rtlPrc);
  const price = props.price[0];
  const interest = props.price[1];
  const sty = props.price[2];
  const style = {
    flexDirection: sty ? "row" : "column",
    justifyContent: sty ? "center" : "flex-end",
  };
  const discount = Math.round(price - (price / 100) * interest).toLocaleString(
    "ru-RU"
  );

  return (
    <div style={style} className={s.priceBox}>
      <span className={s.oldPrice}>{price.toLocaleString("ru-RU")}₴</span>
      <span className={s.newPrice}>{discount}₴</span>
    </div>
  );
};
