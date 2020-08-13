import React from "react";
import s from "./delivery.module.css";

export const DeliveryGoodsPage = () => {
  return (
    <div className={s.deliveryBox}>
      {/*<h3>Оплата и доставка:</h3>*/}
      <span>
        Доставка в отделение <b>Новой Почты.</b>
      </span>
      <ul>
        <li>
          <span>Способ оплаты</span>
          <span>Стоимость доставки</span>
        </li>
        <li>
          <span>Картой</span>
          <span>
            <b>от 40 грн.</b>
          </span>
        </li>
        <li>
          <span>Наложеным платежом/наличными</span>
          <span>
            <b>от 60 грн.</b>
          </span>
        </li>
      </ul>
    </div>
  );
};
