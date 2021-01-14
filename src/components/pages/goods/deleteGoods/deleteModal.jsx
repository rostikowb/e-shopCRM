import s from "./deleteModal.module.css";
import React, { useState } from "react";
import DialogComponent from "../../../HelperComponents/DialogComponent/DialogComponent";
import "../style/goodsGlobalStyle.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { req } from "../../../../redux/req";
import { useSelector } from "react-redux";

export const GoodsDeleteModal = ({ ChangeModal, isOpen }) => {
  const [isAgree, setIsAgree] = useState(false);
  const [id, setId] = useState("");
  const [res, setRes] = useState("");

  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const handleChecked = (e) => setIsAgree(e.target.checked);

  const handleSendToApi = async () => {
    const res = await req("/goods/delete", {
      header: { authorization: token },
      body: { _id: id },
    });

    setRes(res.msg ? <h3>{res.msg}</h3> : <h3>Готово</h3>);
  };

  return (
    <DialogComponent handleClose={ChangeModal} open={isOpen} width={"200px"}>
      <div className={"modalBox"}>
        <h2>ID товара</h2>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChecked}
              checked={isAgree}
              color="primary"
            />
          }
          label="Я знаю что делаю"
          labelPlacement="end"
        />
        {res}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isAgree}
          onClick={() => handleSendToApi()}
        >
          Удалить!
        </Button>
      </div>
    </DialogComponent>
  );
};
