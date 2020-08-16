import React, { useEffect, useState } from "react";
import s from "./createGoods.module.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import {
  createStubGoods,
  fetchOneGoods,
  uploadFiles,
} from "../../../../redux/goods/actions";
import { useLocation } from "react-router";
import { option } from "../../../../option";
import Select from "react-select";

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
  const [files, setFiles] = useState(null);
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
  console.log("ddddddddddddddddddddddd", d._id);
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
        data.optPrc + (data.optPrc / 100) * (data.dopPrc - data.dscnt);
    }
    setData({ ...data });
  };

  const chngSelect = (type, value) => {
    data[type] = value;
    setData({ ...data });
  };

  const changeImg = async (value) => {
    if (value) {
      const base64 = await fileToBasw64(value);
      props.uploadFiles(props.token, base64, "sssssd", "1");
    }
  };

  useEffect(() => {
    if (_id) {
      props.fetchOneGoods(_id);
    }
  }, [_id]);

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
            label="Наша наценка в %"
            type="number"
            value={data.dopPrc || 50}
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
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
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
          {data.img.length
            ? data.img.map((item) => (
                <div className={s.ImgBox}>
                  <img src={item} alt="" /> <div className={s.addImg}>+</div>
                </div>
              ))
            : null}
          <div className={s.ImgBox}>
            <div className={s.addImg}>+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    product: state.goods.one,
  };
};

export const CreateGoods = connect(mapStateToProps, {
  uploadFiles,
  fetchOneGoods,
  createStubGoods,
})(CreateGood);
