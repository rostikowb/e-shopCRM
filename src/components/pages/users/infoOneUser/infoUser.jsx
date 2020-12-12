import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { fetchAllUsers } from "../../../../redux/users/actions";
import { setFetchArrOrders } from "../../../../redux/orders/actions";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import DialogComponent from "../../../HelperComponents/DialogComponent/DialogComponent";
import RenderField from "../../../HelperComponents/RenderField/RenderField";
import "./infoUser.css";

class infoUser extends Component {
  state = {
    isOpenModal: false,
  };

  componentDidMount() {
    const {
      match: { params },
      token,
      fetchAllUsers,
    } = this.props;
    fetchAllUsers(token, params.id);
  }

  handleOpenModal = () => {
    this.setState({ isOpenModal: true });
  };
  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };
  handleSetUserOrders = (ordersArr) => {
    this.props.setFetchArrOrders(ordersArr);
  };

  render() {
    const {
      match: { params },
      users,
    } = this.props;
    const { isOpenModal } = this.state;

    const user = users[0];
    if (!user) {
      return <p>Loading....</p>;
    }
    return (
      <div className="wrapper-info-user">
        <NavLink to="/users" className="arrow">
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
          <p>Users</p>
        </NavLink>
        <div className="container__info-user">
          <h2>Id: {params.id}</h2>
          <ul className="list__info-user">
            <div className="item__user-info">
              <li className="label__user-info">Имя</li>
              <li>{user.FN}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Фамилия</li>
              <li>{user.LN}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Отчество</li>
              <li>{user.SN}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Email</li>
              <li>{user.email}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Телефон</li>
              <li>{user.tel}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Город</li>
              <li>{user.city}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Отделение</li>
              <li>{user.branchN}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Права</li>
              <li>В планах</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Купоны</li>
              <li>{user.cupon.length === 0 ? "Нету" : user.cupon}</li>
            </div>
            <div className="item__user-info">
              <li className="label__user-info">Заказы</li>
              <li
                className="label__user-links"
                onClick={this.handleSetUserOrders(user.boughtArr)}
              >
                {user.boughtArr.length ? (
                  <NavLink to="/orders">Перейти</NavLink>
                ) : (
                  "Нету"
                )}
              </li>
            </div>
          </ul>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleOpenModal}
          >
            Изменить
          </Button>
        </div>
        <DialogComponent handleClose={this.handleCloseModal} open={isOpenModal}>
          <div className="user-modal">
            <h1>Изменение данных</h1>
            <Formik
              initialValues={{
                name: user.FN || "",
                last_name: user.LN || "",
                patronymic: user.SN || "",
                email: user.email || "",
                phone: user.tel || "",
                city: user.city || "",
                department: user.branchN || "",
                // 0 - User, 1 - Moder, 2 - Admin
                rights: user.rights || 0,
                // coupon: "",
                // order: "",
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              <Form>
                <Field
                  type="text"
                  name="name"
                  placeholder="Имя"
                  component={RenderField}
                />
                <Field
                  type="text"
                  name="last_name"
                  placeholder="Фамилия"
                  component={RenderField}
                />
                <Field
                  type="text"
                  name="patronymic"
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
                  name="phone"
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
                  name="department"
                  placeholder="Отделение"
                  component={RenderField}
                />
                <Field
                  type="number"
                  name="rights"
                  placeholder="Права"
                  component={RenderField}
                />
                {/*<Field*/}
                {/*  type="text"*/}
                {/*  name="coupon"*/}
                {/*  placeholder="Купоны"*/}
                {/*  component={RenderField}*/}
                {/*/>*/}
                {/*<Field*/}
                {/*  type="text"*/}
                {/*  name="order"*/}
                {/*  placeholder="Заказы"*/}
                {/*  component={RenderField}*/}
                {/*/>*/}

                {/* <Field name="lastName" placeholder="Doe" component={MyInput} /> */}
                <button type="submit">Отправить</button>
              </Form>
            </Formik>
          </div>
        </DialogComponent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.arr,
    token: state.auth.token,
  };
};

const mapDispatchToProps = {
  fetchAllUsers,
  setFetchArrOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(infoUser);
