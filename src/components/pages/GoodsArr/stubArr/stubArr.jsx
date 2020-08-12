import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes } from "@fortawesome/free-solid-svg-icons/index";
import s from "./stubArr.module.css";
import sParent from "../goodsArr.module.css";
import { option } from "../../../../option";

export const StubArr = () => {
  return (
    <>
      {Array(option.GC + 1)
        .fill(
          <li className={sParent.stubElem + " " + s.stubElem}>
            <FontAwesomeIcon title="Прелоадер." icon={faBoxes} />
          </li>
        )
        .map((value, index) => (
          <li className={sParent.stubElem + " " + s.stubElem} key={index}>
            <FontAwesomeIcon title="Прелоадер." icon={faBoxes} />
          </li>
        ))}
    </>
  );
};
