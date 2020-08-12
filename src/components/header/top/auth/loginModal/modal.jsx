import React from "react";
import { connect } from "react-redux";
import { AuthForm } from "../../../../dopComp/loginForm/AuthForm.jsx";
import s from "./modal.module.css";
import { changeStateAuthModal } from "../../../../../redux/modal/actions";

const mapStateToProps = (state) => {
  return {
    modal: state.modal.auth,
    isLogin: state.auth.isLogin,
  };
};

export const ModalAuth = connect(mapStateToProps, { changeStateAuthModal })(
  (props) => {
    return props.modal ? (
      <div>
        <div
          onClick={() => props.changeStateAuthModal()}
          className={s.modal_login_box}
        />
        <div className={s.modal_login}>
          <AuthForm />
        </div>
      </div>
    ) : null;
  }
);
