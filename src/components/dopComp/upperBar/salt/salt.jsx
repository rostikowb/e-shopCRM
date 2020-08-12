import React from "react";
import s from "./salt.module.css";
import { NavLink } from "react-router-dom";
import { FETCH_GOODS, STUB_ON } from "../../../../redux/types";
import { connect } from "react-redux";
import { fetchGoods, stubOn } from "../../../../redux/goodsArr/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons/index";
import { option } from "../../../../option";
import { useLocation } from "react-router";

export const Sal = (props) => {
  let path = useLocation().pathname;
  let prodLab = path.split("/");
  let catalogLabel = props.catalog
    ? option.goods.find((e) => e.value === props.catalog.toString()).label
    : null;

  const mainPage = () => {
    props.stubOn({ type: STUB_ON });
    props.fetchGoods({ type: FETCH_GOODS, catalog: null, sort: props.sort });
  };

  const catalogPage = () => {
    props.stubOn({ type: STUB_ON });
    props.fetchGoods({
      type: FETCH_GOODS,
      catalog: props.catalog,
      sort: props.sort,
    });
  };

  return (
    <div className={s.saltBox}>
      <NavLink to="/">
        <span onClick={() => mainPage()}>Главная</span>
      </NavLink>{" "}
      <FontAwesomeIcon className={s.icon} icon={faGhost} />
      {prodLab[1] ? (
        <>
          <NavLink to={"/" + props.catalog}>
            <span onClick={() => catalogPage()}> {catalogLabel}</span>
          </NavLink>
          {prodLab[2] ? (
            <>
              &nbsp;
              <FontAwesomeIcon className={s.icon} icon={faGhost} />{" "}
              <span className={s.goodsName}>{props.name} </span>
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    stub: state.AllGoodsR.stub,
    catalog: state.AllGoodsR.catalog,
    sort: state.AllGoodsR.sort,
  };
};

export const Salt = connect(mapStateToProps, {
  fetchGoods,
  stubOn,
})(Sal);
