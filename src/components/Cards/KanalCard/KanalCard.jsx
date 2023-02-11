import React from "react";
import { useLazyGetChanelViewQuery } from "store/endpoints/authorizedRequests";
import styles from "./index.module.scss";
const KanalCard = ({ data, func }) => {
  //   const [trigger, { data: viewData }] = useLazyGetChanelViewQuery();
  const onSubmit = () => {
    func(data);
  };
  return (
    <div className={styles.kanalCard} onClick={onSubmit} tabIndex={1}>
      <img src={data?.channelIcon} alt="" />
      <p>{data?.title}</p>
    </div>
  );
};

export default KanalCard;
