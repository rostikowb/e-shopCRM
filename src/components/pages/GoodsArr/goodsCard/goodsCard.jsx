import React from "react";
import LazyLoad from "react-lazyload";
import Paper from "@material-ui/core/es/Paper/Paper";
import s from "./goodsCard.module.css";
import { Img } from "./img/img";
import { Title } from "./title/title";
import { RatingBox } from "./rating/rating";
import { PriceBox } from "./price/price";
import { InStock } from "./inStock/inStock";
import { CardLikeBox } from "./like/cardLike";
import { CardBasketBox } from "./basket/cardBasket";
import { ShortHaractBox } from "./shortHaract/shortHaract";

export const GoodsCard = (props) => {
  let dt = props.data[0];
  let isLike = props.data[1];
  let dvnld = props.data[2];
  let link = dt._id + "__" + dt["nm"].replace(/\s/gi, "_").replace(/\//gi, "-");
  return (
    <Paper className={!isLike ? s.cardBox : s.cardBoxLite} elevation={3}>
      <div className={s.goodsInner}>
        <div className={s.top}>
          <LazyLoad once height={200} offset={100}>
            <Img
              data={{
                data: dt,
                link: link,
                download: dvnld,
              }}
            />
          </LazyLoad>
          <Title
            data={{
              data: dt,
              link: link,
              download: dvnld,
            }}
          />
          <RatingBox data={dt} link={link} />
        </div>

        <div className={s.bottom}>
          <PriceBox price={[dt["rtlPrc"], dt["dscnt"]]} />
          <InStock stock={dt["stck_qntt"]} />
        </div>
        <div className={s.underInfo}>
          <ShortHaractBox id={dt._id} param={dt["prm"]} />
        </div>
        {dt["stck_qntt"] > 0 ? null : <div className={s.notAval} />}
      </div>
      <CardLikeBox data={dt} />
      {dt["stck_qntt"] > 0 ? <CardBasketBox data={dt} /> : null}
    </Paper>
  );
};
