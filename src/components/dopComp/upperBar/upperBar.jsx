import React from "react";
import s from "./upperBar.module.css";
import { Sort } from "./sort/sort";
import { Salt } from "./salt/salt";

export const UpperBar = (props) => {
  return (
    <div className={s.upperBar}>
      <Salt name={props.name} />
      {!props.name ? <Sort /> : null}
    </div>
  );
};
