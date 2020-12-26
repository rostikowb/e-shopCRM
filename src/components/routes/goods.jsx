import React from "react";
import s from "./goods.module.css";
import Header from "../header/header";
// import { GoodsSideBar } from "../dopComp/goodsSideBar/goodsSideBar";
// import Sidebar from "../sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
// import { GoodsArr } from "../pages/GoodsArr/goodsArr";
// import { Goods } from "../pages/goods/goods";
// import { UpperBar } from "../dopComp/upperBar/upperBar";
import { fetchOneGoods } from "../../redux/oneGoods/action";
import { connect } from "react-redux";
import { setCatalog } from "../../redux/goodsArr/actions";
import { Goods } from "../pages/goods/goods";
import { Users } from "../pages/users/users";
import { Tickets } from "../pages/tickets/tickets";
import { Orders } from "../pages/orders/orders";
import { CreateGoods } from "../pages/goods/create/createGoods";
import { createGoodsMenu } from "../pages/goods/create/createGoodsMenu";
import infoUser from "../pages/users/infoOneUser/infoUser";
import { OneOrder } from "../pages/orders/oneOrder/oneOrder";

// let productLabel = props.product?.nm;

export const GoodsRout = (props) => {
  let productLabel = props.product?.nm;

  return (
    <>
      <Header />
      <div className="main">
        <div className={s.leftSidebarBox}>{/*<Sidebar />*/}</div>
        <div className={s.rightMain}>
          {/*<UpperBar name={productLabel} />*/}
          <Switch>
            <Route path="/goods/create/:goodsId" component={CreateGoods} />
            <Route path="/goods/create" component={createGoodsMenu} />
            <Route path="/goods" component={Goods} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/:id" component={infoUser} />
            {/*<Route path="/users/read:id" component={Users} />*/}
            <Route path="/tickets" component={Tickets} />
            <Route path="/orders/userId/:userId" component={Orders} />
            <Route path="/orders/:id" component={OneOrder} />
            <Route path="/orders" component={Orders} />
            {/*<Route exact path={["/", "/:catalog"]} component={GoodsArr} />*/}
            {/*<Route path="/:catalog/:product" component={Goods} />*/}
          </Switch>
        </div>
      </div>
      {/*<GoodsSideBar />*/}
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
