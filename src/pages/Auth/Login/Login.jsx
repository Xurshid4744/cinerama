import { Form, Input } from "antd";
import logo from "assets/images/logo.png";

import React from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "store/endpoints/auth";
import ButtunSmall from "UI/Buttons/ButtunSmall/ButtunSmall";
import style from "./index.module.scss";
const Login = () => {
  const [login] = useLoginMutation();
  const onFinish = (value) => {
    const loginPromise = login(value).unwrap();
    loginPromise.then((res) => {
      if (res.code === 200) {
        localStorage.setItem("access_token", res?.data?.cineramaToken);
        window.location.reload();
      }
    });
  };
  return (
    <section className={style.login}>
      <img src={logo} alt="" />
      <div className={style.loginForm}>
        <h4>Авторизация</h4>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="username" className={style.formItem}>
            <Input className={style.input} placeholder={"Логин"} required />
          </Form.Item>
          <Form.Item name="password" className={style.formItem}>
            <Input
              className={style.input}
              placeholder={"Пароль"}
              type={"password"}
              required
            />
          </Form.Item>
          <div className={style.btns}>
            <Link to={"/auth/sign-in"}>
              <p>Войдите с помощью телефона</p>
            </Link>
            <div className={style.btns}>
              <Link to={"/auth/sign-up"}>
                <p>Регистрация</p>
              </Link>
              <ButtunSmall title={"Войти"} />
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
