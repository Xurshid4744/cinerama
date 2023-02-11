import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import style from "./index.module.scss";
const CollectionCard = ({ data }) => {
  return (
    <div style={{ display: "grid" }}>
      <div className={style.collectionCardContainer}>
        <div className={style.collectionCard}>
          <div className={style.collectionCardImages}>
            <img src={data?.poster} alt="" className={style.collectionImg1} />
            <img src={data?.poster} alt="" className={style.collectionImg2} />
            <img src={data?.poster} alt="" className={style.collectionImg} />
            <BsPlayCircle className={style.play} color="#ffff4d" />
          </div>
        </div>
      </div>
      <p className={style.collectionCardTitle}>{data?.title}</p>
      <p className={style.collectionCardSubTitle}>{data?.description}</p>
    </div>
  );
};

export default CollectionCard;
