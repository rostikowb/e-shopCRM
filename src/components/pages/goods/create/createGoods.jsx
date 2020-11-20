import React, { useEffect, useState } from "react";
import s from "./createGoods.module.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import {
  createStubGoods,
  fetchOneGoods,
  updateGoodsOne,
  uploadFiles,
} from "../../../../redux/goods/actions";
import { useLocation } from "react-router";
import { option } from "../../../../option";
import Select from "react-select";
import Button from "@material-ui/core/es/Button/Button";

const fileToBasw64 = async (value) => {
  return await new Promise((resolve, reject) => {
    try {
      let reader = new FileReader();
      reader.readAsDataURL(value[0]);
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    } catch (e) {
      reject(e);
    }
  });
};

const defSel = (type, value) => {
  try {
    return option[type].find(
      (item) => item.value.toString() === value.toString()
    );
  } catch (e) {
    return false;
  }
};

export const CreateGood = (props) => {
  const _id = useLocation().pathname.split("/")[3];
  const d = props.product;
  const imgArr = props.imgArr;

  const [data, setData] = useState({
    avlbl: true,
    drUrl: "",
    ctgrId: 0,
    shipper: "",
    drPaId: 0,
    optPrc: 0,
    dopPrc: 0,
    dscnt: 0,
    rtlPrc: 0,
    dscrptn: "",
    img: [],
    mdl: "",
    nm: "",
    prm: [],
    stck_qntt: 0,
    vndr: "",
  });

  const prmCHange = (index, atr, value) => {
    data.prm[index][atr] = value;
    setData({ ...data });
  };

  const delPrmBtn = (index) => {
    data.prm.splice(index, 1);
    setData({ ...data });
  };

  const addPrmBtn = () => {
    data.prm[data.prm.length] = { name: "", value: "" };
    setData({ ...data });
  };

  const chngInpLn = (type, value) => {
    data[type] = value;
    if (type === "optPrc" || type === "dopPrc" || type === "dscnt") {
      data.rtlPrc =
        Number(data.optPrc) +
        Number(data.optPrc / 100) * Number(data.dopPrc - data.dscnt);
    }
    setData({ ...data });
  };

  const chngSelect = (type, value) => {
    data[type] = value;
    setData({ ...data });
  };

  const changeImg = async (count, value) => {
    if (value) {
      const base64 = await fileToBasw64(value);
      props.uploadFiles(props.token, base64, _id, count, value[0].name);
    }
  };

  const send = () => {
    props.updateGoodsOne(props.token, data);
  };

  useEffect(() => {
    if (_id) {
      props.fetchOneGoods(_id);
    }
  }, [_id]);

  useEffect(() => {
    console.log("imgArr");
    // setIsLoad(true);

    data.img = imgArr;
    setData({ ...data });
  }, [imgArr]);

  useEffect(() => {
    if (d) {
      let price = d.optPrc + (d.optPrc / 100) * (d.dopPrc - d.dscnt);
      setData({
        _id: d._id,
        avlbl: d.avlbl || true,
        drUrl: d.drUrl || "",
        ctgrId: d.ctgrId || 0,
        shipper: d.shipper || "",
        optPrc: d.optPrc || 0,
        dopPrc: d.dopPrc || 0,
        dscnt: d.dscnt || 0,
        rtlPrc: price || 0,
        dscrptn: d.dscrptn || "",
        img: d.img || [],
        mdl: d.mdl || "",
        nm: d.nm || "",
        prm: d.prm || [],
        stck_qntt: d.stck_qntt || 0,
        vndr: d.vndr || "",
      });
      // setSelect({ ctgrId: defSel("goods", d.ctgrId) });
      // setSelect({ shipper: defSel("shipper", d.shipper) });
    }
  }, [d]);

  console.log(data);
  return (
    <div className={s.createBox}>
      <div className={s.createGoodsInBox}>
        <div className={s.inputBox}>
          <h2>У наявності?</h2>
          <Select
            defaultValue={{ label: "Так", value: true }}
            options={[
              { label: "Так", value: true },
              { label: "Ні", value: false },
            ]}
            onChange={(e) => props.setCupon(e.value)}
            name="cupon"
            className={s.cuponSelect}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Силка на сторінку у поставщика</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Силка на сторінку у поставщика"
            type="text"
            value={data.drUrl}
            onChange={(event) => chngInpLn("drUrl", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Назва товару</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Назва товару"
            type="text"
            value={data.nm}
            onChange={(event) => chngInpLn("nm", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Вибрать каталог</h2>
          <Select
            defaultValue={{ label: "Вибрать каталог", value: false }}
            value={defSel("goods", data.ctgrId)}
            options={option.goods}
            onChange={(e) => chngSelect("ctgrId", e.value)}
            name="ctgrId"
            className={s.cuponSelect}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Вибрать поставщика</h2>
          <Select
            defaultValue={{ label: "Вибрать поставщика", value: false }}
            value={defSel("shipper", data.shipper)}
            options={option.shipper}
            onChange={(e) => chngSelect("shipper", e.value)}
            name="shipper"
            className={s.cuponSelect}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Ціна поставщика</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Ціна поставщика"
            type="number"
            value={data.optPrc}
            onChange={(event) => chngInpLn("optPrc", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Наша наценка в %</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Наша наценка в % (рекомендовано 50)"
            type="number"
            value={data.dopPrc}
            onChange={(event) => chngInpLn("dopPrc", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Скидка в %</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Скидка в %"
            type="number"
            value={data.dscnt}
            onChange={(event) => chngInpLn("dscnt", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Ціна для покупця</h2>
          <span className={s.priceEnd}>
            {data.rtlPrc.toLocaleString("ru-RU") || "Введіть попередні поля"}
          </span>
        </div>
        <div className={s.inputBox}>
          <h2>Описання на РУС</h2>
          <CKEditor
            editor={ClassicEditor}
            data={data.dscrptn}
            // onInit={(editor) => {
            //   // You can store the "editor" and use when it is needed.
            //   console.log("Editor is ready to use!", editor);
            // }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            // onBlur={(event, editor) => {
            //   console.log("Blur.", editor);
            // }}
            // onFocus={(event, editor) => {
            //   console.log("Focus.", editor);
            // }}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Характеристики</h2>
          {data.prm.map((item, index) => {
            return (
              <div key={item.value + index} className={s.prmItemBox}>
                <div>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => prmCHange(index, "name", e.target.value)}
                  />
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => prmCHange(index, "value", e.target.value)}
                  />
                </div>
                <span
                  title="Удалить характеристику"
                  onClick={() => delPrmBtn(index)}
                  className={s.delPrmBtn}
                >
                  X
                </span>
              </div>
            );
          })}
          <span
            title="Добавить характеристику"
            onClick={() => addPrmBtn()}
            className={s.addPrmBtn}
          >
            +++
          </span>
        </div>
        <div className={s.inputBox}>
          <h2>Модель продукту</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Модель продукту"
            type="text"
            value={data.mdl}
            onChange={(event) => chngInpLn("mdl", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Кількість на складі</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Кількість на складі"
            type="number"
            value={data.stck_qntt}
            onChange={(event) => chngInpLn("stck_qntt", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Бренд</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            label="Бренд"
            type="text"
            value={data.vndr}
            onChange={(event) => chngInpLn("vndr", event.target.value)}
          />
        </div>
        <div className={s.inputBox}>
          <h2>Фото</h2>
          <div className={s.imgAllBox}>
            {data.img.length
              ? data.img.map((item, index) => (
                  <div key={_id + index} className={s.ImgBox}>
                    <div className={s.img}>
                      <img
                        src={
                          option.api +
                          "/static/webp/" +
                          _id +
                          "/" +
                          item +
                          "-400.webp"
                        }
                        alt=""
                      />
                    </div>

                    <Button
                      className={s.addImg}
                      variant="contained"
                      component="label"
                    >
                      +
                      <input
                        type="file"
                        onChange={(e) => changeImg(index, e.target.files)}
                        style={{ display: "none" }}
                      />
                    </Button>
                  </div>
                ))
              : null}
            <div className={s.ImgBox}>
              <div className={s.img}></div>
              <Button
                className={s.addImg}
                variant="contained"
                component="label"
              >
                +
                <input
                  type="file"
                  onChange={(e) => changeImg(data.img.length, e.target.files)}
                  style={{ display: "none" }}
                />
              </Button>
            </div>
          </div>

          {/*<div onClick={() => sendToSave(files)}>Otpravit</div>*/}
        </div>
        <div onClick={() => send()} className={s.sendBtn}>
          Обновити сторінку товару
        </div>
        {props.errMsg ? (
          <span className={s.errMsg}>Якась проблема {props.errMsg}</span>
        ) : null}
        {props.doneMsg ? (
          <span className={s.doneMsg}>Все нормально обновилось</span>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    product: state.goods.one,
    imgArr: state.goods.imgArr,
    errMsg: state.goods.errMsg,
    doneMsg: state.goods.doneMsg,
  };
};

export const CreateGoods = connect(mapStateToProps, {
  uploadFiles,
  fetchOneGoods,
  createStubGoods,
  updateGoodsOne,
})(CreateGood);
