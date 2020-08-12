import React, { useState } from "react";
import { TextField, Container, makeStyles, Button } from "@material-ui/core";
import s from "./login.module.css";
import { connect } from "react-redux";
import {
  authSendApi,
  authStubOn,
  changeIsForm,
} from "../../../redux/auth/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typo: {
    color: "black",
  },
}));

// L-login
// R-registration
// V-vostanovlenir(recovery)

const AuthFor = (props) => {
  const classes = useStyles();
  const isFormF = (data) => props.changeIsForm(data);
  const isForm = props.isForm;
  const stub = props.stub;
  const errMsg = props.invalid;

  const [data, setData] = useState({ name: "", email: "", pass: "" });
  const [dataV, setDataV] = useState({
    name: false,
    email: false,
    pass: false,
  });

  const changeName = (e) => {
    let isValid = e.target.value.length > 1;
    if (isValid) {
      data.name = e.target.value;
      dataV.name = true;
      setData({ ...data });
    } else {
      dataV.name = false;
    }
    setDataV({ ...dataV });
  };

  const validateEmail = (email) => {
    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  };

  const changeEmail = (e) => {
    let isValid = validateEmail(e.target.value);
    if (isValid) {
      data.email = e.target.value;
      dataV.email = true;
      setData({ ...data });
    } else {
      dataV.email = false;
    }
    setDataV({ ...dataV });
  };

  const changePass = (e) => {
    let isValid = e.target.value.length > 8;
    if (isValid) {
      data.pass = e.target.value;
      dataV.pass = true;
      setData({ ...data });
    } else {
      dataV.pass = false;
    }
    setDataV({ ...dataV });
  };

  const startAuth = (type) => {
    props.authStubOn();
    props.authSendApi(type, data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div
        style={{ marginTop: "0px" }}
        className={classes.paper + "" + s.formBox}
      >
        <h2 className={s.title}>
          {isForm === "L"
            ? "Авторизация"
            : isForm === "R"
            ? "Регистрация"
            : "Востановление пароля"}
        </h2>
        {/*<form className={classes.form}>*/}
        {isForm === "R" ? (
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="name"
            label="Имя"
            autoComplete="name"
            name="name"
            type="text"
            autoFocus
            error={!dataV.name}
            onChange={(event) => changeName(event)}
          />
        ) : null}
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth
          id="email"
          label="Емейл Адрес"
          name="email"
          autoComplete="email"
          error={!dataV.email}
          type="email"
          helperText={
            !dataV.email ? "Пример email'a - example@gmail.com" : null
          }
          onChange={(event) => changeEmail(event)}
          autoFocus
        />
        {isForm !== "V" ? (
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete={isForm === "R" ? "new-password" : "current-password"}
            onChange={(event) => changePass(event)}
            error={!dataV.pass}
            helperText={!dataV.pass ? "Минимум 8 знаков" : null}
          />
        ) : null}
        {errMsg ? <span className={s.errMsg}>{errMsg}</span> : null}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={stub || !dataV.pass || !dataV.email}
          onClick={() =>
            startAuth(
              isForm === "L" ? "login" : isForm === "R" ? "signup" : "recov"
            )
          }
        >
          {stub
            ? "Отправляю!"
            : isForm === "L"
            ? "Авторизоваться"
            : isForm === "R"
            ? "Зарегистрироватся"
            : "Прислать на почту"}
        </Button>
        <div className={s.secLoginMenu}>
          {isForm !== "V" ? (
            <span onClick={() => isFormF("V")}>Пароль утерян...</span>
          ) : null}
          {isForm === "V" || isForm === "L" ? (
            <span onClick={() => isFormF("R")}>Создать аккаунт</span>
          ) : null}

          {isForm === "V" || isForm === "R" ? (
            <span onClick={() => isFormF("L")}>Уже есть аккаунт</span>
          ) : null}
        </div>
        {/*</form>*/}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    isForm: state.auth.isForm,
    stub: state.auth.stub,
    invalid: state.auth.invalid,
    token: state.auth.token,
  };
};

export const AuthForm = connect(mapStateToProps, {
  changeIsForm,
  authStubOn,
  authSendApi,
})(AuthFor);
