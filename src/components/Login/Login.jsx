/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import React, { useEffect, useState } from "react";
import {
  LoginSC,
  Form,
  ColumnWrapper,
  ForgotPassword,
  LoginButton,
} from "./Login-style";
import Header from "../common/Header/Header";
import Input from "../common/Input/Input";
import Label from "../common/Label/Label";
import Button from "../common/Button/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Login = (props) => {
  const { history } = props;
  const [initialState, setInitialState] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (event) => {
    setInitialState({
      ...initialState,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const inputEl = document.querySelector("#password");

    const customInputEl = document.querySelector("#customInput");

    function changeInputStyles() {
      const dummyText = Array(inputEl.value.length).fill("*").join("");
      customInputEl.innerHTML = dummyText;
    }
    inputEl.addEventListener("keyup", changeInputStyles);
    return () => {
      inputEl.removeEventListener("keyup", changeInputStyles);
    };
  }, []);

  const onLogin = () => {
    if (
      !!initialState.email &&
      initialState.email === "test@luxpmsoft.com" &&
      !!initialState.password &&
      initialState.password === "test1234!"
    ) {
      history.push('/dashboard');
    } else {
        alert('Wrong Id/Password');
    }
  };

  return (
    <LoginSC>
      <Header text="로그인" />
      <Form>
        <ColumnWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            onChange={onInputChange}
          />
        </ColumnWrapper>
        <ColumnWrapper trans>
          <Label htmlFor="password">비밀번호</Label>
          <div style={{ position: "relative" }}>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={onInputChange}
            />
            <span id="customInput"></span>
          </div>
        </ColumnWrapper>
        <ForgotPassword>비밀번호 찾기</ForgotPassword>
        <Button isRel="true" buttonText="로그인" triggerEvent={onLogin} />
        <LoginButton>
          계정이 없으신가요?{"  "}
          <Link to="/signup">{"  "}가입하기</Link>
        </LoginButton>
      </Form>
    </LoginSC>
  );
};

export default withRouter(Login);
