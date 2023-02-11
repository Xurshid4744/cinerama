import { Drawer } from "antd";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import style from "./index.module.scss";
const SearchInput = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <RiSearchLine onClick={showDrawer} />
      <Drawer
        placement={"top"}
        closable={false}
        onClose={onClose}
        open={open}
        className={style.drawer}
      >
        <div className={style.searchInput}>
          <input
            type={"search"}
            className={style.input}
            placeholder="Поиск"
            onChange={onChange}
          />
          <AiOutlineClose onClick={onClose} />
        </div>
        {inputValue.length > 0 && (
          <div className={style.content}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            tempora eos voluptates eius quo exercitationem itaque hic
            reiciendis, quidem perferendis libero nisi aperiam dicta optio odit,
            vel aspernatur soluta sit illum veniam maiores totam numquam. Ipsa
            ut aperiam soluta distinctio reprehenderit? Sed modi quis corporis
            cumque molestias fugit, esse laudantium?
          </div>
        )}
      </Drawer>
    </>
  );
};

export default SearchInput;
