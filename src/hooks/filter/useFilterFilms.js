import { Form, Input, Select } from "antd";
import styles from "./index.module.scss";
const { Option } = Select;
const useFilterFilms = () => {
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
            <Form.Item
              name="username"
              label="username"
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
            <Form.Item
              name="username"
              label="username"
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
            <Form.Item
              name="username"
              label="username"
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
            <Form.Item
              name="username"
              label="username"
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
            <Form.Item
              name="username"
              label="username"
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
