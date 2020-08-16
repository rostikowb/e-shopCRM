import React from "react";
import s from "./createGoods.module.css";
import { createStubGoods } from "../../../../redux/goods/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export const createGoodsMen = (props) => {
  const id = props?.product?._id;
  console.log(id);

  return !id ? (
    <div
      className={s.startCreate}
      onClick={() => props.createStubGoods(props.token)}
    >
      Почати занесення товару! Після нажаття кнопки в базі створеться позиція!
    </div>
  ) : (
    <Redirect to={`/goods/create/` + id} />
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    product: state.goods.one,
  };
};

export const createGoodsMenu = connect(mapStateToProps, {
  createStubGoods,
})(createGoodsMen);
