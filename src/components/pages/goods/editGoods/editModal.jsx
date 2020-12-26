import s from "./editModal.module.css";
import React from "react";
import DialogComponent from "../../../HelperComponents/DialogComponent/DialogComponent";
import "../style/goodsGlobalStyle.css";
import Button from "@material-ui/core/Button";

export const GoodsEditorModal = ({ ChangeModal, isOpen }) => {
  return (
    <DialogComponent handleClose={ChangeModal} open={isOpen} width={"200px"}>
      <div className={"modalBox"}>
        <h2>ID товара</h2>
        <input type="text" />
        <Button type="submit" fullWidth variant="contained">
          Перейти
        </Button>
      </div>
    </DialogComponent>
  );
};
