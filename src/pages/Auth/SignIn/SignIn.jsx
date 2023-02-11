import React, { useState } from "react";
import logo from "assets/images/logo.png";
import style from "./index.module.scss";
import { Form, Input } from "antd";
import InputMask from "react-input-mask";
import ButtunSmall from "UI/Buttons/ButtunSmall/ButtunSmall";
import { Link } from "react-router-dom";
import { useConfirmMutation, useRegistrMutation } from "store/endpoints/auth";

const SignIn = () => {
  const [valueInput, setValueInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [registration] = useRegistrMutation();
  const [confirmData] = useConfirmMutation();

  const onFinish = () => {
    const value = valueInput.split(" ").join("");
    const data = {
      phone: value,
    };
    const registrationPromise = registration(data).unwrap();
    registrationPromise.then((res) => {
      if (res.code === 200) {
        setConfirm(true);
      }
    });
  };
  const onSubmit = (value) => {
    const number = valueInput.split(" ").join("");
    const data = {
      phone: number,
      code: value.username,
    };
    const confirmPromise = confirmData(data).unwrap();
    confirmPromise
      .then((res) => {
        if (res.code === 200) {
          localStorage.setItem("access_token", res?.data?.cineramaToken);
          window.location.reload();
        }
      })
      .catch((e) => {
        if (e.status === 400) {
          setErrorMessage(e.data.message);
        }
      });
  };
  return (
    <section className={style.signIn}>
      <img src={logo} alt="" />
      <div className={style.signForm}>
        <h4>Авторизация</h4>
        {confirm ? (
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onSubmit}
            autoComplete="off"
          >
            {errorMessage.length > 0 && (
              <p className={style.error}>{errorMessage}</p>
            )}
            <p className={style.confirm}>
              На ваш номер отправленно сообщение с кодом
            </p>
            <Form.Item name="username" className={style.formItem}>
              <Input
                className={style.inputConfirm}
                placeholder={"Введите код"}
              />
            </Form.Item>
            <div className={style.btns}>
              <ButtunSmall title={"Отправить код"} />
              <Link to={"/auth/login"}>
                <p>Войдите с помощью логина</p>
              </Link>
            </div>
          </Form>
        ) : (
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
              <span className={style.mask}>+998</span>
              <InputMask
                mask={" 99 999 99 99"}
                className={style.input}
                placeholder={" __ ___ __ __"}
                required
                onChange={(e) => setValueInput(e.target.value)}
              />
            </Form.Item>
            <div className={style.btns}>
              <ButtunSmall title={"Отправить код"} />
              <Link to={"/auth/login"}>
                <p>Войдите с помощью логина</p>
              </Link>
            </div>
          </Form>
        )}
      </div>
    </section>
  );
};

export default SignIn;
