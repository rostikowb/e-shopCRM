import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import s from "./users.module.css";
import ss from "./../orders/orders.module.css";
import { connect } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import { fetchAllUsers } from "../../../redux/users/actions";
import { setFetchArrOrders } from "../../../redux/orders/actions";

export const User = (props) => {
  const id = useLocation().pathname.split("/")[2] || false;
  const setOrdersArr = (arr) => {
    props.setFetchArrOrders(arr);
  };

  useEffect(() => {
    props.fetchAllUsers(props.token, id);
  }, [id]);
  return (
    <div className={ss.mainBox}>
      <div className={ss.ordersBox}>
        {props.users.map((item) => {
          return (
            <Paper
              elevation={3}
              key={item._id + "orderAll"}
              className={ss.orderItem}
            >
              <div className={ss.orderItemTop}>
                <div>
                  <NavLink className={ss.Id} to={`/users/${item._id}`}>
                    Редактировать
                  </NavLink>
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
              <div className={ss.orderItemBottom}>
                <div className={ss.userInfo}>
                  <div>
                    <span>Имя: </span>
                    <span>{item.FN}</span>
                  </div>
                  <div>
                    <span>Фамилия: </span>
                    <span>{item.LN}</span>
                  </div>
                  <div>
                    <span>Отчество: </span>
                    <span>{item.SN}</span>
                  </div>
                  <div>
                    <span>email: </span>
                    <span>{item.email}</span>
                  </div>
                  <div>
                    <span>Телефон: </span>
                    <span>{item.tel}</span>
                  </div>
                  <div>
                    <span>Город: </span>
                    <span>{item.city}</span>
                  </div>
                  <div>
                    <span>Отделение: </span>
                    <span>{item.branchN}</span>
                  </div>
                  <div>
                    <span>Купоны: </span>
                    <span>
                      {item.cupon.length
                        ? item.cupon.map((cupon) => <span>{cupon}</span>)
                        : "Нету"}
                    </span>
                  </div>
                  <div>
                    <span>Заказы: </span>
                    <NavLink
                      className={ss.Id}
                      to={`/orders`}
                      onClick={() => setOrdersArr(item.boughtArr)}
                    >
                      Показать
                    </NavLink>
                  </div>
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
    users: state.users.arr,
    token: state.auth.token,
  };
};

export const Users = connect(mapStateToProps, {
  fetchAllUsers,
  setFetchArrOrders,
})(User);
