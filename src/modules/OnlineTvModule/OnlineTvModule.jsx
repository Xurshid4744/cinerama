import { Select } from "antd";
import { KanalCard } from "components/Cards/KanalCard";
import Loader from "components/Loader/Loader";
import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import {
  useGetChanelCategoryQuery,
  useGetChanelTitleQuery,
} from "store/endpoints/chanels";
import styles from "./index.module.scss";
const { Option } = Select;

const OnlineTvModule = () => {
  const [chanelId, setChanelId] = useState(15);
  const [loader, setLoader] = useState(false);
  const [currentData, setCurrentData] = useState({
    channelIcon:
      "https://files.cinerama.uz/images/tv_channels/2020/06/12/7264f8a9-b852-461e-8791-3dd998e5a9e5.png",
    id: 22,
    title: "Первый",
  });
  const { data } = useGetChanelTitleQuery();
  const { data: chanelsData } = useGetChanelCategoryQuery(chanelId);
  const onChange = (value) => {
    setChanelId(value);
  };
  const currentChanel = (data) => {
    setCurrentData(data);
  };
  const watch = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  };
  return (
    <div className={styles.onlineTvModule}>
      <div className={styles.onlineTvBox}>
        <p>{currentData?.title}</p>
        <div
          className={styles.onlineVido}
          style={{
            backgroundImage: `url(${currentData?.channelIcon})`,
            filter: loader ? `blur(8px)` : `blur(0)`,
          }}
          onClick={watch}
        ></div>
        {loader ? (
          <div className={styles.play}>
            <Loader />
          </div>
        ) : (
          <BsPlayCircle className={styles.play} onClick={watch} />
        )}
      </div>
      <div className={styles.onlineTvKanals}>
        <Select
          defaultValue={"Все"}
          onChange={onChange}
          className={styles.selectInput}
          optionFilterProp="children"
        >
          {data?.data.map((item) => (
            <Option value={item.id} key={item.id}>
              {item.title}
            </Option>
          ))}
        </Select>
        <div className={styles.onlineTvKanalsBox}>
          {chanelsData?.data.map((item) => (
            <KanalCard data={item} key={item.id} func={currentChanel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineTvModule;
