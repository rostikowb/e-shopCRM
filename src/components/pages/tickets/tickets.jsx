import React, { useEffect } from "react";
import s from "./tickets.module.css";
import ss from "./../orders/orders.module.css";
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchAllTickets } from "../../../redux/tickets/actions";
import { NavLink } from "react-router-dom";

export const Ticket = (props) => {
  useEffect(() => {
    props.fetchAllTickets(props.token);
  }, []);
  return (
    <div className={ss.mainBox}>
      <div className={ss.ordersBox}>
        {props.tickets.map((item) => {
          return (
            <Paper
              elevation={3}
              key={item._id + "orderAll"}
              className={ss.orderItem}
            >
              <div className={ss.orderItemTop}>
                <div>
                  {item.userId ? (
                    <NavLink className={ss.Id} to={`/users/${item?.userId}`}>
                      userId
                    </NavLink>
                  ) : (
                    "Аноним"
                  )}
                </div>
                <div>
                  {item.date
                    ? new Date(item.date).toLocaleString("ru-RU", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })
                    : null}
                </div>
              </div>
              <div className={s.orderItemBottom}>
                <div className={ss.userInfo}>
                  {/*<div>*/}
                  <div>
                    <span>Тема: </span>
                    <span>{item.question}</span>
                  </div>
                  <div>
                    <span>Связь: </span>
                    <span>{item.comm}</span>
                  </div>
                  <div>
                    <span>Адресс: </span>
                    <span>{item.email || item.tel || item.telegram}</span>
                  </div>
                </div>
                <div className={s.msgBox}>{item.msg}</div>
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
    tickets: state.tickets.arr,
    token: state.auth.token,
  };
};

export const Tickets = connect(mapStateToProps, {
  fetchAllTickets,
})(Ticket);
