import { fetchOneOrder } from "../../../../redux/orders/actions";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import s from "./oneOrder.module.css";
import "../../users/infoOneUser/infoUser.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import DialogComponent from "../../../HelperComponents/DialogComponent/DialogComponent";
import { Field, Form, Formik } from "formik";
import RenderField from "../../../HelperComponents/RenderField/RenderField";

const OneOrde = (props) => {
  const { token, order, errMsg } = props;
  const { id } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(order);
  useEffect(() => {
    props.fetchOneOrder(token, id);
  }, []);

  const handleSendDataToApi = () => {};

  if (!order) return <div>Loading...</div>;

  return (
    <div className="wrapper-info-user">
      <NavLink to="/orders" className="arrow">
        <svg width={20} height={20} viewBox="0 0 50 80">
          <path
            fill="none"
            stroke="#610c36"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            d="M45.63 75.8L.375 38.087 45.63.375"
          />
        </svg>
        <p>Все заказы</p>
      </NavLink>
      <div className="container__info-user">
        <h2>Id: {order._id}</h2>
        <ul className="list__info-user">
          <div className="item__user-info">
            <li className="label__user-info">Имя</li>
            <li>{order.UD.FN}</li>
          </div>
          <div className="item__user-info">
            <li className="label__user-info">Фамилия</li>
            <li>{order.UD.LN}</li>
          </div>
          <div className="item__user-info">
            <li className="label__user-info">Отчество</li>
            <li>{order.UD.SN}</li>
          </div>
          <div className="item__user-info">
            <li className="label__user-info">Email</li>
            <li>{order.UD.email}</li>
          </div>
          <div className="item__user-info">
            <li className="label__user-info">Телефон</li>
            <li>{order.UD.tel}</li>
          </div>
          <div className="item__user-info">
            <li className="label__user-info">Город</li>
            <li>{order.UD.city}</li>
          </div>
          <div className="item__user-info">
            <li className="label__user-info">Отделение</li>
            <li>{order.UD.branchN}</li>
          </div>
        </ul>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setIsOpenModal(true)}
        >
          Изменить
        </Button>
      </div>
      <DialogComponent
        handleClose={() => setIsOpenModal(false)}
        open={isOpenModal}
      >
        <div className="user-modal">
          <h1>Изменение данных</h1>
          <Formik
            initialValues={{
              FN: order.UD.FN || "",
              LN: order.UD.LN || "",
              SN: order.UD.SN || "",
              email: order.UD.email || "",
              tel: order.UD.tel || "",
              city: order.UD.city || "",
              branchN: order.UD.branchN || "",
              // 0 - User, 1 - Moder, 2 - Admin
              rights: order.UD.rights,
            }}
            onSubmit={(values, actions) => {
              handleSendDataToApi(values);
              // console.log(user);
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   actions.setSubmitting(false);
              // }, 1000);
            }}
          >
            <Form>
              <Field
                type="text"
                name="FN"
                placeholder="Имя"
                component={RenderField}
              />
              <Field
                type="text"
                name="LN"
                placeholder="Фамилия"
                component={RenderField}
              />
              <Field
                type="text"
                name="SN"
                placeholder="Отчество"
                component={RenderField}
              />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                component={RenderField}
              />
              <Field
                type="text"
                name="tel"
                placeholder="Телефон"
                component={RenderField}
              />
              <Field
                type="text"
                name="city"
                placeholder="Город"
                component={RenderField}
              />
              <Field
                type="text"
                name="branchN"
                placeholder="Отделение"
                component={RenderField}
              />
              <button type="submit">Отправить</button>
            </Form>
          </Formik>
          <span className="user-modal-errMsg">{errMsg.toString()}</span>
        </div>
      </DialogComponent>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    errMsg: state.orders.errMsg,
    order: state.orders.one,
  };
};

const mapDispatchToProps = {
  fetchOneOrder,
};

export const OneOrder = connect(mapStateToProps, mapDispatchToProps)(OneOrde);
