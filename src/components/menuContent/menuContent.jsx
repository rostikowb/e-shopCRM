import React from "react";
import s from "./menuContent.module.css";
import { Auth } from "./auth/auth";
import { Logo } from "./logo/logo";
import { Info } from "./info/info";
import { FilterBox } from "./filter/filter";
import { connect } from "react-redux";

export const menuConten = (props) => {
  return (
    <div className={s.mainMenuBox}>
      <Logo />
      {!props.token ? <Auth /> : null}
      <Info />
      <FilterBox />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export const menuContent = connect(mapStateToProps, null)(menuConten);
