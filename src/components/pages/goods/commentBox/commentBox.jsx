import React, { useState, useEffect } from "react";
import s from "./commentBox.module.css";
import { fetchOneGoods } from "../../../../redux/oneGoods/action";
import { connect } from "react-redux";
import { setCatalog } from "../../../../redux/goodsArr/actions";
import { changeStateCommentsModal } from "../../../../redux/modal/actions";
import { authUpdateUD } from "../../../../redux/auth/actions";
import { CommentModal } from "./commentModal/commentModal";
import { NotComments } from "./notComments/notComments";
import { CommentsArr } from "./commentsArr/commentsArr";
import { AddCommentsBtn } from "./addCommentsBtn/addCommentsBtn";

export const CommentBo = (props) => {
  const UD = props.UD;
  const comments = props.product?.comments;
  const token = props.token;
  const goodsId = props.product._id;
  const commAdd = props.changeStateCommentsModal;
  const [isBuy, setIsBuy] = useState(false);
  const [boughtIndex, setBoughtIndex] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const isBuyS = isBuy === 0 || isBuy === 1 || isBuy === 2;
  // console.log(isComment);
  const UD_Update = () => {
    if (isBuyS) props.authUpdateUD(token);
  };

  // console.log(comments);
  const isBuyF = () => {
    UD.boughtArr.forEach((item, index) => {
      if (
        item.goods.find((item2) => {
          if (item2.goodsId === goodsId) {
            setIsComment(item2.comment);
          } else {
            setIsComment(false);
          }
          // console.log(item2.comment);
          return item2.goodsId === goodsId && !item2.comment;
        })
      ) {
        setBoughtIndex(index);
        setIsBuy(item.stage);
      } else {
        setIsBuy(false);
      }
    });
  };
  useEffect(() => {
    UD_Update();
  }, [isBuy, token]);

  useEffect(() => {
    token ? isBuyF() : setIsBuy(false);
  }, [props.product, token]);

  return (
    <div className={s.commentBox}>
      <h2>Отзывы</h2>
      {/*
      //
      //
      //
      */}
      {comments?.length ? (
        <>
          {isBuy === 3 && !isComment ? <AddCommentsBtn data={commAdd} /> : null}
          <CommentsArr data={comments} />
        </>
      ) : (
        <div className={s.commentInBox}>
          <NotComments data={isBuy} />
          {isBuy === 3 && !isComment ? <AddCommentsBtn data={commAdd} /> : null}
        </div>
      )}
      {/*
      //
      //
      //
      */}
      {props.modal ? (
        <CommentModal
          data={{ boughtId: UD.boughtArr[boughtIndex]._id, boughtIndex }}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    UD: state.auth.userData,
    product: state.oneGoods.product,
    token: state.auth.token,
    modal: state.modal.comments,
  };
};

export const CommentBox = connect(mapStateToProps, {
  fetchOneGoods,
  setCatalog,
  changeStateCommentsModal,
  authUpdateUD,
})(CommentBo);
