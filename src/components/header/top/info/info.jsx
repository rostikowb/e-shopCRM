import React from "react";
import { NavLink } from "react-router-dom";
import s from "./info.module.css";
export const Info = () => {
  return (
    <ul className={s.infoBox}>
      <li>
        <NavLink aria-label="Контакты" to="/contacts">
          Контакты
        </NavLink>
      </li>
      <li>
        <NavLink aria-label="QA" to="/qa">
          Ответы на частые вопросы
        </NavLink>
      </li>
    </ul>
  );
};
