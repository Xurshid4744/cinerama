import { Pagination } from "antd";
import FilmCard from "components/Cards/FilmCard";
import { useFilterFilms } from "hooks";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
const ContentModule = () => {
  const [onFinish, body] = useFilterFilms();
  const param = useParams();
  const [page, setPage] = useState(1);
  const data = require(`data/${param.id}/${page}.json`);
  const filmData =
    data?.pageProps?.dehydratedState?.queries[0]?.state?.data?.data;
  const handlePagination = (page) => {
    setPage(page);
  };
  return (
    <>
      {body()}
      <section className="container">
        <div className="flex-align-justfy">
          <h4 className="films-title">{data?.pageProps?.moduleTitle}</h4>
          <Pagination
            defaultCurrent={1}
            total={8}
            pageSize={3}
            onChange={handlePagination}
          />
        </div>
        <div className={styles.allFilms}>
          {filmData?.ids.map((item) => (
            <FilmCard id={item} pool={filmData?.pool} key={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ContentModule;
