import React from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import style from "./index.module.scss";

import FilmCard from "components/Cards/FilmCard";
const CardSwiper = ({ name, title }) => {
  const data = require(`data/${title}/1.json`);
  const filmData =
    data?.pageProps?.dehydratedState?.queries[0]?.state?.data?.data;
  return (
    <section className={`container ${style.swiperContainer}`}>
      <div className={style.swiperTitle}>
        <h6>{name}</h6>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        className={style.swiper}
      >
        <SwiperSlide>
          <div className={style.swiperSlide}>
            {filmData?.ids.filter(item => item > 35798).map((item) => (
              <FilmCard id={item} pool={filmData?.pool} key={item} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CardSwiper;
