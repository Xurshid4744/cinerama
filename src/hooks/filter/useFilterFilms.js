import { Form, Input, Select } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { useEffect, useRef, useState } from "react";
import { useFilterQuery } from "store/endpoints/filter";
import { yearFunc } from "utils/year";
import styles from "./index.module.scss";
const { Option } = Select;
const useFilterFilms = () => {
  const { data: filterData, isSuccess } = useFilterQuery();
  const year = useRef();
  if(isSuccess){
    year.current = yearFunc(filterData);
  }
  console.log(filterData, "filterData");
  const onFinish = (data) => {
    console.log(data);
  };
  const body = () => {
    return (
      <section className={styles.filterContainer}>
        <div className="container">
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            className={styles.form}
          >
            <Form.Item name="genres" label="Жанры" className={styles.formItem}>
              <Select
                showSearch
                optionFilterProp="children"
                className={styles.input}
              >
                {filterData?.data?.genres.map((item) => (
                  <Option value={item.slug}>{item.title}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="countries"
              label="Страны"
              className={styles.formItem}
            >
              <Select
                showSearch
                optionFilterProp="children"
                className={styles.input}
              >
                {filterData?.data?.countries.map((item) => (
                  <Option value={item.slug}>{item.title}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="yearFrom"
              label="Год (от)"
              className={styles.formItem}
            >
              <Select
                showSearch
                optionFilterProp="children"
                className={styles.input}
              >
                {year.current?.map((item) => (
                  <Option value={item} key={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="yearTo"
              label="Год (до)"
              className={styles.formItem}
            >
              <Select
                showSearch
                optionFilterProp="children"
                className={styles.input}
              >
                {year.current?.map((item) => (
                  <Option value={item} key={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="qualities"
              label="Качество"
              className={styles.formItem}
            >
              <Select
                showSearch
                optionFilterProp="children"
                className={styles.input}
              >
                <Option>Xurshid</Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </section>
    );
  };
  return [onFinish, body];
};
export default useFilterFilms;
