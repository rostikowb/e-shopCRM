import React, { useEffect } from "react";
import "./tickets.css";
import ss from "./../orders/orders.module.css";
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchAllTickets } from "../../../redux/tickets/actions";
import { NavLink } from "react-router-dom";
import CardTicket from "../../HelperComponents/CardTicket/CardTicket";

export const Ticket = (props) => {
  useEffect(() => {
    props.fetchAllTickets(props.token);
  }, []);
  return (
    <div className="wrapper-tickets">
      <div className="tickets-list">
        {props.tickets.map((ticket, index) => {
          return <CardTicket color="darkred" ticket={ticket} key={index} />;
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
