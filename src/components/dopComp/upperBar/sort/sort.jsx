import React from "react";
import s from "./sort.module.css";
import { connect } from "react-redux";
import Select from "react-select";
import {
  fetchGoods,
  stubOn,
  thisUrl,
} from "../../../../redux/goodsArr/actions";
import { FETCH_GOODS, STUB_ON } from "../../../../redux/types";
import { useHistory } from "react-router";

const options = [
  // { value: "random", label: "Стандарту" },
  { value: "byRating", label: "По рейтингу" },
  { value: "priceMinMax", label: "Цена: min-max" },
  { value: "priceMaxMin", label: "Цена: max-min" },

  // { value: "byDate", label: "По дате поступления" },
];

const Sor = (props) => {
  let history = useHistory();
  const loadGoods = (value) => {
    history.push("?sort=" + value.value);
    props.stubOn({ type: STUB_ON });
    props.fetchGoods({
      type: FETCH_GOODS,
      sort: value.value,
      catalog: props.catalog,
    });
  };
  let defaul = options.find((e) => e.value === props.sort);
  return (
    <div className={s.selects}>
      <span>Отсортировать по: </span>
      <Select
        defaultValue={defaul}
        options={options}
        onChange={(e) => loadGoods(e)}
        name="Сортировка"
        className={s.sortSelect}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currGoods: state.AllGoodsR.currGoods,
    catalog: state.AllGoodsR.catalog,
    sort: state.AllGoodsR.sort,
    url: state.AllGoodsR.url,
  };
};

export const Sort = connect(mapStateToProps, {
  fetchGoods,
  thisUrl,
  stubOn,
})(Sor);
