import React, { useEffect } from "react";
import s from "./goodsArr.module.css";
import { UpperBar } from "../../dopComp/upperBar/upperBar";
import { connect } from "react-redux";
import { fetchGoods, stubOn, thisUrl } from "../../../redux/goodsArr/actions";
import { FETCH_GOODS, STUB_ON } from "../../../redux/types";
import { StubArr } from "./stubArr/stubArr";
import { GoodsArrLoad } from "./goodsArrLoad/goodsArrLoad";
import { useLocation, useParams } from "react-router";

function useLoc() {
  return {
    query: new URLSearchParams(useLocation().search),
    path: useParams().catalog,
  };
}

const GoodsAr = (props) => {
  let location = useLoc();
  let page = Number(location.query.get("page"));
  let sort = location.query.get("sort") || props.sort;
  let path = useLocation().pathname.slice(1);

  const firstLoad = () => {
    props.stubOn({ type: STUB_ON });
    props.fetchGoods({
      type: FETCH_GOODS,
      catalog: path,
      sort: sort,
      page: page,
    });
  };

  useEffect(() => {
    firstLoad();
  }, [path]);

  return (
    <div className={s.goodsArr}>
      {/*<UpperBar />*/}
      <ul className={s.goodsBox}>
        {/*Підгружені карточки товару*/}
        {!props.stub && !props.stub ? <GoodsArrLoad /> : null}

        {/*Заглушка*/}
        {props.stubP || props.stub ? <StubArr /> : null}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    isFirstL: state.AllGoodsR.isFirstL,
    catalog: state.AllGoodsR.catalog,
    sort: state.AllGoodsR.sort,
    stub: state.AllGoodsR.stub,
    stubP: state.AllGoodsR.stubP,
    url: state.AllGoodsR.url,
  };
};

export const GoodsArr = connect(mapStateToProps, {
  fetchGoods,
  thisUrl,
  stubOn,
})(GoodsAr);
