import React, { useEffect } from "react";
import s from "./imgs.module.css";
import { imgOnShowSet } from "../../../../redux/oneGoods/action";
import { connect } from "react-redux";

const Img = (props) => {
  // console.log(props.data);

  // useEffect(() => {
  //   props.imgOnShowSet(props.data.img[0]);
  // }, []);
  return (
    <div className={s.imgsBox}>
      <div className={s.imgBig}>
        <img src={props.img} alt="" />
      </div>
      <div className={s.imgArr}>
        {props.data.img.map((item, index) => (
          <img onClick={() => props.imgOnShowSet(item)} key={item} src={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    img: state.oneGoods.imgOnShow,
  };
};

export const Imgs = connect(mapStateToProps, {
  imgOnShowSet,
})(Img);
