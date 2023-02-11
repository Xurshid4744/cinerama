import { Pagination } from "antd";
import { CollectionCard } from "components/Cards/CollectionCard";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
const CollectionsModule = () => {
  const param = useParams();
  const [page, setPage] = useState(1);
  const data = require(`data/${param.id}/${page}.json`);
  const filmData =
    data?.pageProps?.dehydratedState?.queries[0]?.state?.data?.data;
    const handlePagination = (page) => {
      setPage(page);
    };
  return (
    <div className="container">
      <div className="flex-align-justfy">
        <h4 className="films-title">Подборки</h4>
        <Pagination
          defaultCurrent={1}
          total={8}
          pageSize={3}
          onChange={handlePagination}
        />
      </div>
      <div className={styles.collectionModuleContainer}>
        {filmData?.map((item) => (
          <CollectionCard data={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsModule;
