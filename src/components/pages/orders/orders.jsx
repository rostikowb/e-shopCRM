import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import s from "./orders.module.css";
import { connect } from "react-redux";
import { fetchAllOrders } from "../../../redux/orders/actions";
import { NavLink } from "react-router-dom";

export const Order = (props) => {
  const order = props.orders;
  useEffect(() => {
    const userId = props.match?.params?.userId;
    if (userId) props.fetchAllOrders(props.token, { userId });
    else props.fetchAllOrders(props.token, props.loadArr);
  }, []);

  if (!order.length) return <div>Loading...</div>;

  return (
    <div className={s.mainBox}>
      <div className={s.ordersBox}>
        {props.orders.map((item) => {
          let sumaPrice = 0;
          return (
            <Paper
              elevation={3}
              key={item._id + "orderAll"}
              className={s.orderItem}
            >
              <div className={s.orderItemTop}>
                <div>
                  <NavLink className={s.Id} to={`/orders/${item._id}`}>
                    Подробней
                  </NavLink>
                  {/*<NavLink className={s.Id} to={`/users/${item.UD?.userId}`}>*/}
                  {/*  userId*/}
                  {/*</NavLink>*/}
                </div>
                <div>
                  {new Date(item.date).toLocaleString("ru-RU", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </div>
              </div>
              <div className={s.orderItemBottom}>
                <div className={s.userInfo}>
                  {/*<div>*/}
                  <div>
                    <span>Пользователь: </span>
                    {item.UD?.userId ? (
                      <NavLink
                        className={s.Id}
                        to={`/users/${item.UD?.userId}`}
                      >
                        Подробней
                      </NavLink>
                    ) : (
                      "Нет аккаунта"
                    )}
                  </div>
                  <div>
                    <span>Имя: </span>
                    <span>{item.UD.FN}</span>
                  </div>
                  <div>
                    <span>Фамилия: </span>
                    <span>{item.UD.LN}</span>
                  </div>
                  <div>
                    <span>Отчество: </span>
                    <span>{item.UD.SN}</span>
                  </div>
                  <div>
                    <span>email: </span>
                    <span>{item.UD.email}</span>
                  </div>
                  <div>
                    <span>Телефон: </span>
                    <span>{item.UD.tel}</span>
                  </div>
                  <div>
                    <span>Город: </span>
                    <span>{item.UD.city}</span>
                  </div>
                  <div>
                    <span>Отделение: </span>
                    <span>{item.UD.branchN}</span>
                  </div>
                  {/*</div>*/}
                </div>
                <div className={s.goodsInfoBox}>
                  {item.goods.map((good) => {
                    let price = Math.round(
                      good.price - (good.price / 100) * item.cupon
                    ).toLocaleString("ru-RU");
                    sumaPrice += good.count * price;
                    return (
                      <div
                        key={good._id + "goods"}
                        className={s.orderOnGoodBox}
                      >
                        <div>
                          <span>
                            <NavLink
                              className={s.Id}
                              to={`/goods/create/${good.goodsId}`}
                            >
                              goodsId
                            </NavLink>
                          </span>
                        </div>
                        <div>
                          <span>{good.count}шт.</span>
                        </div>
                        <div>
                          <span>Цена: </span>
                          <span>{`${good.count * good.price} - ${
                            item.cupon
                          }% = ${good.count * price}грн. `}</span>
                        </div>
                      </div>
                    );
                  })}
                  <div className={s.sumaPrice}>Сума заказа: {sumaPrice}</div>
                </div>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    orders: state.orders.arr,
    loadArr: state.orders.loadArr,
    token: state.auth.token,
  };
};

export const Orders = connect(mapStateToProps, {
  fetchAllOrders,
})(Order);
