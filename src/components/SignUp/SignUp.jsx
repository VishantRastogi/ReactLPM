/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import React from "react";
import {
  SignUpSC,
  Form,
  ColumnWrapper,
  RowWrapper,
  CheckMark,
  ColumnListWrapper,
  Login,
} from "./SignUp-style";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import Label from "../common/Label/Label";
import { Link } from "react-router-dom";
import Header from "../common/Header/Header";

const SignUp = () => {
  const onInputChange = (e) => {

};

  return (
    <SignUpSC>
      <Header text="회원가입" />
      <Form>
        <ColumnWrapper>
          <Label htmlFor="username">이채민</Label>
          <Input
            id="username"
            name="username"
            placeholder="이채민"
            onChange={onInputChange}
          />
        </ColumnWrapper>
        <ColumnWrapper>
          <Label htmlFor="phonenumber">휴대폰 번호</Label>
          <Input
            id="phonenumber"
            name="phonenumber"
            placeholder="+82 111 1111111"
            onChange={onInputChange}
          />
        </ColumnWrapper>
        <ColumnWrapper>
          <Label htmlFor="dob">생년월일</Label>
          <Input
            id="dob"
            name="dob"
            placeholder="mm - dd- yyyy"
            onChange={onInputChange}
          />
        </ColumnWrapper>
        <ColumnWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            autofill={false}
            placeholder="john.doe@alphametics.com"
            onChange={onInputChange}
          />
        </ColumnWrapper>
        <ColumnWrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            name="password"
            type="password"
            style={{ fontSize: "35px", letterSpacing: "9px" }}
            onChange={onInputChange}
          />
        </ColumnWrapper>
        <ColumnWrapper marginBottom>
          <Label htmlFor="confirmpassword">비밀번호 확인</Label>
          <Input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            pattern=".{8,}"
            style={{ fontSize: "35px", letterSpacing: "9px" }}
            onChange={onInputChange}
          />
        </ColumnWrapper>
        <RowWrapper>
          <ColumnListWrapper>
            <label>
              <span>최소 8자 이상</span>
              <input
                type="checkbox"
                checked={false}
                onChange={() => console.log("dd")}
              />
              <CheckMark checked={false} />
            </label>
            <label>
              <span>최소 하나의 대문자</span>
              <input
                type="checkbox"
                checked={false}
                onChange={() => console.log("dd")}
              />
              <CheckMark checked={false} />
            </label>
          </ColumnListWrapper>
        </RowWrapper>
        <RowWrapper>
          <ColumnListWrapper>
            <label>
              <span>최소 하나의 숫자</span>
              <input
                type="checkbox"
                checked={false}
                onChange={() => console.log("dd")}
              />
              <CheckMark checked={false} />
            </label>
            <label>
              <span>최소 하나의 특수문자</span>
              <input
                type="checkbox"
                checked={false}
                onChange={() => console.log("dd")}
              />
              <CheckMark checked={true} />
            </label>
          </ColumnListWrapper>
        </RowWrapper>
        <RowWrapper>
          <ColumnListWrapper flexC>
            <label>
              <span>이용약관에 동의합니다</span>
              <input
                type="checkbox"
                checked={false}
                onChange={() => console.log("dd")}
              />
              <CheckMark checked={true} normal />
            </label>
          </ColumnListWrapper>
        </RowWrapper>
        <Button
          isRel="true"
          buttonText="가입하기"
          triggerEvent={() => console.log("red")}
        />
        <Login>
          이미 계정이 있으신가요?
          <Link to="/login">로그인</Link>
        </Login>
      </Form>
    </SignUpSC>
  );
}

export default SignUp;
