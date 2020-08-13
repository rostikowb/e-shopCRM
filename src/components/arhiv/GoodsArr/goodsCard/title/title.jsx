import React from "react";
import s from "./title.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOneGoods } from "../../../../../redux/oneGoods/action";
import { setCatalog } from "../../../../../redux/goodsArr/actions";
import { changeStateLikeModal } from "../../../../../redux/modal/actions";

const Titl = (props) => {
  let d = props.data.data;
  let link = props.data.link;
  let dvnld = props.data.download;

  const loadOneGoods = () => {
    props.setCatalog(d["ctgrId"]);
    props.fetchOneGoods(d["_id"], false, d);
    props.changeStateLikeModal();
  };

  return (
    <div onClick={() => (dvnld ? loadOneGoods() : null)} className={s.title}>
      <NavLink to={`/${d["ctgrId"]}/${link}`}>
        <h3>{d["nm"]} </h3>
      </NavLink>
    </div>
  );
};
export const Title = connect(null, {
  fetchOneGoods,
  setCatalog,
  changeStateLikeModal,
})(Titl);
