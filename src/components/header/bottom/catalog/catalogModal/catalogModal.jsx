import React from "react";
import { connect } from "react-redux";
import s from "./catalogModal.module.css";
import { fetchGoods, stubOn } from "../../../../../redux/goodsArr/actions";
import { NavLink } from "react-router-dom";
import { option } from "../../../../../option";
import { FETCH_GOODS, STUB_ON } from "../../../../../redux/types";
import { changeStateCatalogModal } from "../../../../../redux/modal/actions";

const mapStateToProps = (state) => {
  return {
    isActive: state.modal.catalog,
    sort: state.AllGoodsR.sort,
  };
};

export const CatalogModal = connect(mapStateToProps, {
  changeStateCatalogModal,
  fetchGoods,
  stubOn,
})((props) => {
  const loadGoods = (value) => {
    // console.log("path", path);
    props.changeStateCatalogModal();
    // props.stubOn({ type: STUB_ON });
    // props.fetchGoods({
    //   type: FETCH_GOODS,
    //   catalog: value,
    //   page: 0,
    //   sort: props.sort,
    // });
  };
  let opt = option;
  return props.isActive ? (
    <div>
      <div
        onClick={() => props.changeStateCatalogModal()}
        className={s.modal_catalog_box}
      />
      <div className={s.modal_catalog}>
        <div className={s.forSmart}>
          <span>Для смартфона</span>
          <ul>
            <li onClick={() => loadGoods(opt.goods[0].value)}>
              <NavLink to={"/" + opt.goods[0].value}>
                {opt.goods[0].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[1].value)}>
              <NavLink to={"/" + opt.goods[1].value}>
                {opt.goods[1].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[2].value)}>
              <NavLink to={"/" + opt.goods[2].value}>
                {opt.goods[2].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[3].value)}>
              <NavLink to={"/" + opt.goods[3].value}>
                {opt.goods[3].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[4].value)}>
              <NavLink to={"/" + opt.goods[4].value}>
                {opt.goods[4].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[5].value)}>
              <NavLink to={"/" + opt.goods[5].value}>
                {opt.goods[5].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[6].value)}>
              <NavLink to={"/" + opt.goods[6].value}>
                {opt.goods[6].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[7].value)}>
              <NavLink to={"/" + opt.goods[7].value}>
                {opt.goods[7].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[8].value)}>
              <NavLink to={"/" + opt.goods[8].value}>
                {opt.goods[8].label}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={s.smallElec}>
          <span>Малая электроника</span>
          <ul>
            <li onClick={() => loadGoods(opt.goods[9].value)}>
              <NavLink to={"/" + opt.goods[9].value}>
                {opt.goods[9].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[10].value)}>
              <NavLink to={"/" + opt.goods[10].value}>
                {opt.goods[10].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[11].value)}>
              <NavLink to={"/" + opt.goods[11].value}>
                {opt.goods[11].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[12].value)}>
              <NavLink to={"/" + opt.goods[12].value}>
                {opt.goods[12].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[13].value)}>
              <NavLink to={"/" + opt.goods[13].value}>
                {opt.goods[13].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[14].value)}>
              <NavLink to={"/" + opt.goods[14].value}>
                {opt.goods[14].label}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={s.another}>
          <span>Другое</span>
          <ul>
            <li onClick={() => loadGoods(opt.goods[15].value)}>
              <NavLink to={"/" + opt.goods[15].value}>
                {opt.goods[15].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[16].value)}>
              <NavLink to={"/" + opt.goods[16].value}>
                {opt.goods[16].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[17].value)}>
              <NavLink to={"/" + opt.goods[17].value}>
                {opt.goods[17].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[18].value)}>
              <NavLink to={"/" + opt.goods[18].value}>
                {opt.goods[18].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[19].value)}>
              <NavLink to={"/" + opt.goods[19].value}>
                {opt.goods[19].label}
              </NavLink>
            </li>
            <li onClick={() => loadGoods(opt.goods[20].value)}>
              <NavLink to={"/" + opt.goods[20].value}>
                {opt.goods[20].label}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
});
