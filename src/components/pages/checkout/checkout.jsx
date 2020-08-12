import React from "react";
import s from "./checkout.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../redux/modal/actions";
import { CheckoutForm } from "./form/form";
import { CheckoutInfo } from "./info/info";

const Checkou = (props) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerWrapper}>
          <NavLink to={`/`}>Вернутся на главную</NavLink>
          <NavLink to={`/`}>Контакты</NavLink>
        </div>
      </header>
      <div className={`main ${s.wrapper}`}>
        <div className={s.content}>
          <CheckoutForm />
          <CheckoutInfo />
        </div>
      </div>
    </>
  );
};

// Зробить систему купонів на клієнті!!!!

export const Checkout = connect(null, {
  changeStateAuthModal,
})(Checkou);
