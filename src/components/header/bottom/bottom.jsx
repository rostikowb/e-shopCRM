import React from "react";
import { connect } from "react-redux";
import s from "./bottom.module.css";
import MenuBtn from "./menu/menu";
import Logo from "./logo/logo";
import CatalogBtn from "./catalog/catalogBtn/catalogBtn";
import Search from "./searchInput/search";
import { Actions } from "./actions/actions";
import { CatalogModal } from "./catalog/catalogModal/catalogModal";
import { changeStateCatalogModal } from "../../../redux/modal/actions";

const mapStateToProps = (state) => {
  return {
    like: state.modal.like,
    basket: state.modal.basket,
    catalog: state.modal.catalog,
  };
};

export const Bottom = connect(mapStateToProps, {
  changeStateCatalogModal,
})((props) => {
  return (
    <div className={s.headerBottom}>
      <MenuBtn />
      <Logo />
    </div>
  );
});
