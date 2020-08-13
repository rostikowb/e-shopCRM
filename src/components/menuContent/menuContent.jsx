import React from "react";
import s from "./menuContent.module.css";
import { Auth } from "./auth/auth";
import { Logo } from "./logo/logo";
import { Info } from "./info/info";
import { FilterBox } from "./filter/filter";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const menuConten = (props) => {
  return (
    <div className={s.mainMenuBox}>
      <Logo />
      {!props.token ? <Auth /> : null}
      <div className={s.menuItemBox}>
        <h2>
          <NavLink to={`/goods`}>Товары</NavLink>
        </h2>
        <span></span>
      </div>
      <div className={s.menuItemBox}>
        <h2>
          <NavLink to={`/users`}>Пользователи</NavLink>
        </h2>
        <span></span>
      </div>
      <div className={s.menuItemBox}>
        <h2>
          <NavLink to={`/tickets`}>Тикеты</NavLink>
        </h2>
        <span></span>
      </div>
      <div className={s.menuItemBox}>
        <h2>
          <NavLink to={`/orders`}>Заказы</NavLink>
        </h2>
        <span></span>
      </div>
      {/*<h2>Товары</h2>*/}

      {/*<Info />*/}
      {/*<FilterBox />*/}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export const menuContent = connect(mapStateToProps, null)(menuConten);
