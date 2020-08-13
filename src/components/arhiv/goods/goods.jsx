import React, { useEffect } from "react";
import s from "./goods.module.css";
import { UpperBar } from "../../dopComp/upperBar/upperBar";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router";
import { fetchOneGoods } from "../../../redux/oneGoods/action";
import { setCatalog } from "../../../redux/goodsArr/actions";
import { Imgs } from "./imgs/imgs";
import { DopInf } from "./dopInf/dopInf";
import { DescChar } from "./descChar/descChar";
import { CommentBox } from "./commentBox/commentBox";
// import cyrillicToTranslit from "cyrillic-to-translit-js";
// console.log(cyrillicToTranslit().transform("Привет Мир!"));

function useLoc() {
  return {
    query: new URLSearchParams(useLocation().search),
    path: useParams(),
  };
}

const Good = (props) => {
  let loc = useLoc().path;
  let catalog = loc.catalog;
  let productId = loc.product.split("__")[0];
  let productLabel = props.product?.nm;

  const loadOneGoods = () => {
    props.setCatalog(catalog);
    props.fetchOneGoods(productId);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    loadOneGoods();
  }, [productId]);

  return (
    <div className={s.goodsBox}>
      {props.product ? (
        <>
          <div className={s.goodsInfo}>
            <Imgs data={props.product} />
            <DopInf data={props.product} />
          </div>
          <div className={s.descCharComBox}>
            <DescChar data={[props.product.dscrptn, props.product.prm]} />
            <CommentBox />
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.oneGoods.product,
  };
};

export const Goods = connect(mapStateToProps, {
  fetchOneGoods,
  setCatalog,
})(Good);
