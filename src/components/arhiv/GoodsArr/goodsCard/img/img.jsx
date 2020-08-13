import React from "react";
import s from "./img.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOneGoods } from "../../../../../redux/oneGoods/action";
import { setCatalog } from "../../../../../redux/goodsArr/actions";
import { changeStateLikeModal } from "../../../../../redux/modal/actions";

const Im = (props) => {
  let d = props.data.data;
  let link = props.data.link;
  let dvnld = props.data.download;

  let styleImg1 = {
    display: "",
  };
  let styleImg2 = {
    display: "",
  };
  if (d?.img.length < 2) {
    styleImg1.display = "block";
    styleImg2.display = "none";
  }

  const loadOneGoods = () => {
    props.setCatalog(d["ctgrId"]);
    props.fetchOneGoods(d["_id"], false, d);
    props.changeStateLikeModal();
  };

  return (
    <div onClick={() => (dvnld ? loadOneGoods() : null)}>
      <Link className={s.imgBox} to={`/${d["ctgrId"]}/${link}`}>
        <img style={styleImg1} className={s.imgOne} src={d?.img[0]} alt="" />
        <img style={styleImg2} className={s.imgTwo} src={d?.img[1]} alt="" />
      </Link>
    </div>
  );
};
export const Img = connect(null, {
  fetchOneGoods,
  setCatalog,
  changeStateLikeModal,
})(Im);
