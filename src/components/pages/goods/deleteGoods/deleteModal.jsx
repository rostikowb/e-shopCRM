import s from "./deleteModal.module.css";
import React, { useState } from "react";
import DialogComponent from "../../../HelperComponents/DialogComponent/DialogComponent";
import "../style/goodsGlobalStyle.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

export const GoodsDeleteModal = ({ ChangeModal, isOpen }) => {
  const [isAgree, setIsAgree] = useState(false);

  const handleChecked = (e) => setIsAgree(e.target.checked);

  return (
    <DialogComponent handleClose={ChangeModal} open={isOpen} width={"200px"}>
      <div className={"modalBox"}>
        <h2>ID товара</h2>
        <input type="text" />
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isAgree}
          // onClick={() => sendData()}
        >
          Удалить!
        </Button>
      </div>
    </DialogComponent>
  );
};
