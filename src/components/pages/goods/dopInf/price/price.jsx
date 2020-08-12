import React from "react";
import s from "./price.module.css";

export const OGPrice = (props) => {
  const price = props.price[0];
  const interest = props.price[1];
  const discount = Math.round(price - (price / 100) * interest).toLocaleString(
    "ru-RU"
  );
  return (
    <div className={s.priceBox}>
      <div className={s.priceInBox}>
        <span className={s.oldPrice}>{price.toLocaleString("ru-RU")}₴</span>
        <span className={s.newPrice}>{discount}грн.</span>
      </div>
      {props.price[2] === "true" ? (
        <span className={s.avlbl + " " + s.avlblYes}>В наличии</span>
      ) : (
        <span className={s.avlbl + " " + s.avlblNo}>Нет в наличии</span>
      )}
    </div>
  );
};
