import React from "react";
import { Acordeon } from "../../dopComp/acardeon/acardeon";
import { AuthForm } from "../../dopComp/loginForm/AuthForm";

export const Auth = () => {
  return (
    <Acordeon
      info={{
        title: "Авторизация",
        content: <AuthForm />,
      }}
    />
  );
};
