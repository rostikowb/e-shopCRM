import React, { useState } from "react";
import s from "./descChar.module.css";

export const DescChar = (props) => {
  const [isActive, setActive] = useState(0);

  return (
    <div className={s.descCharBox}>
      {props.data[1] ? (
        <div className={s.charBox}>
          <h2>Характеристики</h2>
          <ul>
            {props.data[1].map((item, index) => {
              return (
                <li key={index}>
                  <span className={s.prmName}>{item.name}</span>
                  <span className={s.prmValue}>{item.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div className={s.descBox}>
        <h2>Описание</h2>
        <div
          // style={{ maxHeight: !isActive ? "187px" : "1700px" }}
          className={s.desc}
          dangerouslySetInnerHTML={{ __html: props.data[0] }}
        />
        {/*<span onClick={() => setActive(!isActive)} className={s.openBtn}>*/}
        {/*{!isActive ? "Развернуть" : "Свернуть"}*/}
        {/*</span>*/}
      </div>
    </div>
  );
};
