import React from "react";
import Top from "./top/top.jsx";
import { Bottom } from "./bottom/bottom.jsx";
import s from "./header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Top />
        <Bottom />
      </div>
    </header>
  );
}
