import s from "./filtersReModal.module.css";
import React, { useState } from "react";
import DialogComponent from "../../../HelperComponents/DialogComponent/DialogComponent";
import "../style/goodsGlobalStyle.css";
import Button from "@material-ui/core/Button";
import bent from "bent";
import { option } from "../../../../option";
import { connect } from "react-redux";
import { req } from "../../../../redux/req";

const FiltersReModa = (props) => {
  const { ChangeModal, isOpen, token } = props;
  const [isDone, setIsDone] = useState(false);

  const handleSendApiFiltersRe = async () => {
    const res = await req("/filter/reCreate", {
      header: { authorization: token },
    });

    setIsDone(res.msg);
  };

  return (
    <DialogComponent handleClose={ChangeModal} open={isOpen} width={"200px"}>
      <div className={"modalBox"}>
        <h2>ID товара</h2>

        <h3>По нажатию кнопки будут переиндексированы все фильтры</h3>

        {isDone}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => handleSendApiFiltersRe()}
        >
          Начать!
        </Button>
      </div>
    </DialogComponent>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    // errMsg: state.orders.errMsg,
    // order: state.orders.one,
  };
};

// const mapDispatchToProps = {
//   fetchOneOrder,
// };

export const FiltersReModal = connect(mapStateToProps, null)(FiltersReModa);
