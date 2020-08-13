import React from "react";
import s from "./guarantee.module.css";

export const GuaranteeGoodPage = () => {
  return (
    <div className={s.guaranteeBox}>
      {/*<span>Гарантия и возврат</span>*/}
      <div>
        <span>
          Возврат возможен в течении <b>14 дней</b> с получения товара
        </span>
        <span>
          <b>Гарантия 12 месяцев</b>
        </span>
      </div>
    </div>
  );
};
