import s from "./rating.module.css";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import { NavLink } from "react-router-dom";

export const RatingBox = (props) => {
  const data = props.data;
  const link = props.link;
  const commArr = data?.comments?.length || 0;
  const rating = data?.rating || 0;

  return (
    <div className={s.ratingBox}>
      <Rating
        name="read-only"
        value={Math.ceil(rating)}
        size={"small"}
        readOnly
      />
      {commArr > 3 ? (
        <NavLink to={`/${data["ctgrId"]}/${link}#comments`}>
          - {commArr} оценивших
        </NavLink>
      ) : null}
    </div>
  );
};
