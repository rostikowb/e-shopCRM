import React from "react";
import s from "./dopInf.module.css";
import ss from "../../../../../pages/GoodsArr/goodsCard/basket/cardBasket.module.css";
import { NavLink } from "react-router-dom";

export const SumInf = (props) => {
  let count = props.data[0];
  let sum = props.data[1];
  let deliv = Math.round(60 + sum * 0.02).toLocaleString("ru-RU");

  return (
    <div className={s.suma}>
      {/*<div className={s.sumaInBox}>*/}
      <span className={s.countSum}>
        {count} шт. = <span className={s.red}>&nbsp;{sum}&nbsp;</span> грн.
      </span>
      <ul className={s.deliv}>
        <span className={s.delivTitle}>Расчетная стоимость доставки</span>
        <li>
          <span>При оплате картой: </span>
          <b>~40 грн.</b>
        </li>
        <li>
          <span>Наложенным платежем: </span>
          <b>~{deliv} грн.</b>
        </li>
      </ul>
      {/*Количество: <span>{count}</span>В суме:*/}
      {/*<span>{sum.toLocaleString("ru-RU")}</span>*/}
      {/*</div>*/}
      <div className={s.sumaBtnBox}>
        <span className={s.sumaBtn + " " + ss.cardBoxAll}>
          <NavLink to={`/checkout`}>Пройти на касу!</NavLink>
        </span>
      </div>
    </div>
  );
};
