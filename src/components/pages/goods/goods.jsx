import React from "react";
import s from "./goods.module.css";
import { NavLink } from "react-router-dom";

export const Goods = () => {
  return (
    <div>
      <NavLink to={`/goods/create`}>CREATE</NavLink>
    </div>
  );
};
