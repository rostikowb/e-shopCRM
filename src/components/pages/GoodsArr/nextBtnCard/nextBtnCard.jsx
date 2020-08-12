import React from "react";
import { connect } from "react-redux";
import { faSync } from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index.es";
import Paper from "@material-ui/core/es/Paper/Paper";
import s from "./nextBtnCard.module.css";
import ss from "../goodsArr.module.css";
import { NavLink } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import { FETCH_GOODS, STUB_ON, STUB_ON_P } from "../../../../redux/types";
import { fetchGoods, stubOn } from "../../../../redux/goodsArr/actions";

function useLoc() {
  return {
    query: new URLSearchParams(useLocation().search),
    path: useParams().id,
  };
}

const NextBtnCar = (props) => {
  let locat = useLoc();
  let page = Number(locat.query.get("page")) + 1;
  let sort = props.sort;
  const loadGoods = () => {
    props.stubOn({ type: STUB_ON_P });
    props.fetchGoods({
      type: FETCH_GOODS,
      sort: sort,
      page: page,
      catalog: props.catalog,
    });
  };
  let queryStr = "";
  if (sort) {
    queryStr = "?sort=" + sort + "&page=" + page;
  } else {
    queryStr = "?page=" + page;
  }

  return (
    <li className={ss.stubElem}>
      <NavLink onClick={() => loadGoods()} to={queryStr}>
        <Paper className={s.cardBox} elevation={3}>
          <FontAwesomeIcon
            className={s.icon}
            title="Подгрузить еще!"
            icon={faSync}
          />
          <span>Подгрузить еще!</span>
        </Paper>
      </NavLink>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    sort: state.AllGoodsR.sort,
    catalog: state.AllGoodsR.catalog,
  };
};

export const NextBtnCard = connect(mapStateToProps, { fetchGoods, stubOn })(
  NextBtnCar
);
