import React, { useState } from "react";
import s from "./goods.module.css";
import { GoodsEditorModal } from "./editGoods/editModal";
import { GoodsDeleteModal } from "./deleteGoods/deleteModal";
import { FiltersReModal } from "./filtersRe/filtersReModal";

export const Goods = (props) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalFiltersRe, setIsOpenModalFiltersRe] = useState(false);

  const handleClickCreateGoods = () => props.history.push("/goods/create");
  const handleChangeModalEdit = () => setIsOpenModalEdit(!isOpenModalEdit);
  const handleChangeModalDelete = () =>
    setIsOpenModalDelete(!isOpenModalDelete);
  const handleChangeModalFilterRe = () =>
    setIsOpenModalFiltersRe(!isOpenModalFiltersRe);

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
      <div onClick={() => handleChangeModalFilterRe()} className={s.btns}>
        Переписать фильтры
      </div>

      <GoodsEditorModal
        ChangeModal={handleChangeModalEdit}
        isOpen={isOpenModalEdit}
      />
      <GoodsDeleteModal
        ChangeModal={handleChangeModalDelete}
        isOpen={isOpenModalDelete}
      />
      <FiltersReModal
        ChangeModal={handleChangeModalFilterRe}
        isOpen={isOpenModalFiltersRe}
      />
    </div>
  );
};
