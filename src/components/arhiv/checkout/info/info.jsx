import React from "react";
import s from "./info.module.css";
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../../redux/modal/actions";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { setCupon } from "../../../../redux/checkout/actions";

const CheckoutInf = (props) => {
  const arr = props.basketArr;
  const UD = props.userData;
  const defOpt = { value: 0, label: "Нет" };
  const dscnt = props.cupon;
  const cupon = UD.cupon.map((item) => {
    return { value: item, label: item + "% скидки!" };
  });
  const allPrice = Math.round(
    props.basketSum.sum - (props.basketSum.sum / 100) * dscnt
  ).toLocaleString("ru-RU");

  return (
    <div className={s.mainInfoBox}>
      <div className={s.infoInBox}>
        <div className={s.goodsBox}>
          <div className={s.cuponSelectBox}>
            <span className={s.cuponTitle}>Применить купон: </span>
            <Select
              defaultValue={defOpt}
              options={[defOpt, ...cupon]}
              onChange={(e) => props.setCupon(e.value)}
              name="cupon"
              className={s.cuponSelect}
            />
          </div>
          {arr.map((g) => (
            <div key={"checkout" + g._id} className={s.goods}>
              <div className={s.left}>
                <NavLink to={`/${g["ctgrId"]}/${g._id}`} className={s.imgBox}>
                  <img src={g.img[0]} alt={`Фото ${g.nm}`} />
                </NavLink>
                <NavLink to={`/${g["ctgrId"]}/${g._id}`} className={s.title}>
                  {g.nm}
                </NavLink>
              </div>
              <div className={s.right}>
                <div className={s.count}>{g.countSale} шт.</div>
                <div className={s.price}>
                  {Math.round(
                    g["rtlPrc"] - (g["rtlPrc"] / 100) * g["dscnt"]
                  ).toLocaleString("ru-RU")}{" "}
                  грн.
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={s.infoBox}>
          <div className={s.suma}>
            <div className={s.sumaText}>Сума заказа:</div>
            <div className={s.sumaCount}>{allPrice} грн.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    basketArr: state.addLikesBasket.basketArr,
    basketSum: state.addLikesBasket.basketSum,
    cupon: state.checkout.cupon,
  };
};

export const CheckoutInfo = connect(mapStateToProps, {
  changeStateAuthModal,
  setCupon,
})(CheckoutInf);
