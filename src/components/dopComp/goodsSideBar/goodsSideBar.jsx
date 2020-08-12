import React from "react";
import s from "./goodsSideBar.module.css";
import { GoodsBlock } from "./goodsBlock/goodsBlock";
import { connect } from "react-redux";
import { useHistory } from "react-router";

export const GoodsSideBa = (props) => {
  let loc = useHistory().location.pathname.split("__")[0].split("/")[2];

  return (
    <div className={s.goodsArrBox}>
      <span className={s.sideBarTitle}>Вы недавно смотрели</span>
      <div className={s.goodsArrInBox}>
        {props.arr
          ? props.arr.map((item) => (
              <GoodsBlock key={item._id} data={item} loc={loc} />
            ))
          : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    arr: state.oneGoods.visitedArr,
    product: state.oneGoods.product,
  };
};

export const GoodsSideBar = connect(mapStateToProps, null)(GoodsSideBa);
