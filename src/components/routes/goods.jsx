import React from "react";
import s from "./goods.module.css";
import Header from "../header/header";
import { GoodsSideBar } from "../dopComp/goodsSideBar/goodsSideBar";
import Sidebar from "../sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import { GoodsArr } from "../pages/GoodsArr/goodsArr";
import { Goods } from "../pages/goods/goods";
import { UpperBar } from "../dopComp/upperBar/upperBar";
import { fetchOneGoods } from "../../redux/oneGoods/action";
import { connect } from "react-redux";
import { setCatalog } from "../../redux/goodsArr/actions";

// let productLabel = props.product?.nm;

export const GoodsRout = (props) => {
  let productLabel = props.product?.nm;

  return (
    <>
      <Header />
      <div className="main">
        <div className={s.leftSidebarBox}>
          <Sidebar />
        </div>
        <div className={s.rightMain}>
          <UpperBar name={productLabel} />
          <Switch>
            <Route exact path={["/", "/:catalog"]} component={GoodsArr} />
            <Route path="/:catalog/:product" component={Goods} />
          </Switch>
        </div>
      </div>
      <GoodsSideBar />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.oneGoods.product,
  };
};

export const GoodsRoute = connect(mapStateToProps, {
  fetchOneGoods,
  setCatalog,
})(GoodsRout);
