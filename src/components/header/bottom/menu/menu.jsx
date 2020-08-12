import s from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { menuContent as Menu } from "../../../menuContent/menuContent";
import { TovZnk } from "../../../dopComp/tovZnk/tovZnk";
import React, { useState } from "react";
import { Drawer } from "react-pretty-drawer";

export default function TemporaryDrawer() {
  let [visible, setIsVisible] = useState(false);
  const closeDrawer = () => setIsVisible(false);
  const openDrawer = () => setIsVisible(true);

  return (
    <div className={s.menu}>
      <>
        <Drawer
          width={"auto"}
          visible={visible}
          onClose={closeDrawer}
          height={"auto"}
          style={{ overflow: "hidden" }}
        >
          <div className={s.menuBox}>
            <Menu />
            <TovZnk />
          </div>
        </Drawer>
        <button onClick={openDrawer}>
          <FontAwesomeIcon className={s.icon} icon={faBars} />
        </button>
      </>
    </div>
  );
}
