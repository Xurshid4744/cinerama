import { CollectionCard } from "components/Cards/CollectionCard";
import FilmCard from "components/Cards/FilmCard";
import CardSwiper from "components/Swiper/CardSwiper";
import MainSwiper from "components/Swiper/MainSwiper/MainSwiper";
import React from "react";
import style from "./index.module.scss"
const HomeModule = () => {
  return (
    <>
      <MainSwiper />
      <CardSwiper name={"Сериалы"} title={"series"}/>
      {/* <CollectionCard/> */}
      {/* <CardSwiper name={"Фильмы"}/>
      <CardSwiper name={"Мультфильмы"}/>
      <CardSwiper name={"Узбеккино"}/>
      <CardSwiper name={"Аниме"}/> */}
    </>
  );
};

export default HomeModule;
