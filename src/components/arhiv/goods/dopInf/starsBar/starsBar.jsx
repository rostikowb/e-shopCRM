import React from "react";
import s from "./starsBar.module.css";
import { Rating } from "@material-ui/lab/es";
import { NavLink } from "react-router-dom";

export const StarsBar = (props) => {
  const data = props.data;
  const commArr = data?.comments?.length || 0;
  const rating = data?.rating || 0;

  return (
    <div className={s.ratingBox}>
      <span className={s.ratingTitle}>Оценка: </span>
      <Rating
        name="read-only"
        value={Math.ceil(rating)}
        size={"large"}
        readOnly
      />
      {commArr > 3 ? (
        <NavLink to={`#comments`}> - {commArr} оценивших</NavLink>
      ) : null}
    </div>
  );
};
