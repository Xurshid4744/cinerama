import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import style from "./index.module.scss";
const FilmCard = ({ id, pool }) => {
  const obj = pool[id];
  return (
    <div style={{ display: "grid" }}>
      <div className={style.filmCardContainer}>
        <div className={style.filmCard}>
          <div className={style.filmCardImages}>
            <img src={obj?.poster} alt="" className={style.filmImg1} />
            <img src={obj?.poster} alt="" className={style.filmImg2} />
            <img src={obj?.poster} alt="" className={style.filmImg} />
            {obj?.isNew && <div className={style.title}>НОВОЕ</div>}
            <div className={style.format}>{obj?.quality}</div>
            <div className={style.age}>{obj?.ageLimit}</div>
            <BsPlayCircle className={style.play} color="#ffff4d" />
          </div>
        </div>
      </div>
      <p className={style.filmCardTitle}>{obj?.title}</p>
      <p className={style.filmCardSubTitle}>{`${obj?.year.toString()} / ${
        obj?.genre
      }`}</p>
    </div>
  );
};

export default FilmCard;
