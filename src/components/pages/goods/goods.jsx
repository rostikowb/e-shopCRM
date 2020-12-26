import React, { useState } from "react";
import s from "./goods.module.css";
import { GoodsEditorModal } from "./editGoods/editModal";
import { GoodsDeleteModal } from "./deleteGoods/deleteModal";

export const Goods = (props) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const handleClickCreateGoods = () => props.history.push("/ssssss");
  const handleChangeModalEdit = () => setIsOpenModalEdit(!isOpenModalEdit);
  const handleChangeModalDelete = () =>
    setIsOpenModalDelete(!isOpenModalDelete);

  return (
    <div className={s.goodsBox}>
      <div onClick={() => handleClickCreateGoods()} className={s.btns}>
        Создать
      </div>
      <div onClick={() => handleChangeModalEdit()} className={s.btns}>
        Редактировать
      </div>
      <div onClick={() => handleChangeModalDelete()} className={s.btns}>
        Удалить
      </div>

      <GoodsEditorModal
        ChangeModal={handleChangeModalEdit}
        isOpen={isOpenModalEdit}
      />
      <GoodsDeleteModal
        ChangeModal={handleChangeModalDelete}
        isOpen={isOpenModalDelete}
      />
    </div>
  );
};
