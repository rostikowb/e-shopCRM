import React, { useState } from "react";
import s from "./createGoods.module.css";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { uploadFiles } from "../../../../redux/goods/actions";

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

export const CreateGood = (props) => {
  const [files, setFiles] = useState(null);

  const sendToSave = async (value) => {
    if (value) {
      const base64 = await fileToBasw64(value);
      props.uploadFiles(props.token, base64, "sssssd", "1");
    }
  };

  return (
    <div className={s.createBox}>
      <div className={s.createGoodsInBox}>
        <Button variant="contained" component="label">
          Upload File
          <input
            type="file"
            // onSelect={(e) => sendToSave(e)}
            onChange={(e) => setFiles(e.target.files)}
            // multiple={true}
            style={{ display: "none" }}
          />
        </Button>
        <div onClick={() => sendToSave(files)}>Otpravit</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export const CreateGoods = connect(mapStateToProps, {
  uploadFiles,
})(CreateGood);
