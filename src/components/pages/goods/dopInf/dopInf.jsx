import React from "react";
import s from "./dopInf.module.css";
import { OGPrice } from "./price/price";
import { DeliveryGoodsPage } from "./delivery/delivery";
import { GuaranteeGoodPage } from "./guarantee/guarantee";
import { GoodsTitle } from "./title/title";
import { StarsBar } from "./starsBar/starsBar";
import { OGBtn } from "./btns/btns";

export const DopInf = (props) => {
  let data = props.data;
  return (
    <div className={s.dopInfBox}>
      <GoodsTitle data={data["nm"]} />
      <div className={s.topInfBox}>
        <OGPrice price={[data["rtlPrc"], data["dscnt"], data["avlbl"]]} />
        <StarsBar data={data} />
        <OGBtn data={data} />
      </div>
      <DeliveryGoodsPage />
      <GuaranteeGoodPage />
      {/*<div></div>*/}
      {/*<div></div>*/}
    </div>
  );
};
