import { Carousel } from "antd";
import React from "react";
import style from "./index.module.scss";
const MainSwiper = () => {
  return (
    <Carousel autoplay className={style.carusel}>
      <div className={style.caruselItem}>
        <img
          src="https://files.cinerama.uz/images/banners/2022/12/26/b1e997a6-b5fb-410c-a44c-6f08f29d5268.png"
          alt=""
        />
      </div>
      <div className={style.caruselItem}>
        <img
          src="https://files.cinerama.uz/images/banners/2023/01/16/6e8a2d79-e0d5-4c5a-85d5-bbea4668869b.png"
          alt=""
        />
      </div>
      <div className={style.caruselItem}>
        <img
          src="https://files.cinerama.uz/images/banners/2023/01/06/a6c887be-2315-479e-ac26-f26f0e8a20c0.png"
          alt=""
        />
      </div>
      <div className={style.caruselItem}>
        <img
          src="https://files.cinerama.uz/images/banners/2022/12/26/866a626a-ee8c-477e-b46b-7d93fd8d9426.png"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default MainSwiper;
