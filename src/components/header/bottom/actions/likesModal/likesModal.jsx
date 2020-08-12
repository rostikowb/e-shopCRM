import React from "react";
import s from "./likesModal.module.css";
import { connect } from "react-redux";
import { changeStateLikeModal } from "../../../../../redux/modal/actions";
import { Likes } from "./likes/likes";

export const LikesModa = (props) => {
  return props.like ? (
    <div>
      <div
        onClick={() => props.changeStateLikeModal()}
        className={s.modal_liked_box}
      />
      <div className={s.modal_liked}>
        <Likes />
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    like: state.modal.like,
  };
};

export const LikesModal = connect(mapStateToProps, {
  changeStateLikeModal,
})(LikesModa);
