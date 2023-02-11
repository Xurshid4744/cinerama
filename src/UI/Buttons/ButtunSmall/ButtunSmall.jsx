import React from "react";
import style from "./index.module.scss";
const ButtunSmall = ({title}) => {
  return <button className={style.btn}>{title}</button>;
};

export default ButtunSmall;
