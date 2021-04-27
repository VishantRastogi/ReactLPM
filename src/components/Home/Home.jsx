/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import React from "react";
import {
  HomeSC,
  OnTop,
  OnTopText,
  LoremText,
  Login,
} from "./Home-style";
import Button from "../common/Button/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "../common/Header/Header";

function Home(props) {
  const { history } = props;
  const onSignUp = () => {
    history.push("/signup");
  };

  return (
    <HomeSC>
      <Header showBar />
      <OnTop>
        Stay on the top <OnTopText>of your finance</OnTopText>
      </OnTop>
      <LoremText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      </LoremText>
      <Button buttonText="가입하기" triggerEvent={onSignUp} />
      <Login>
        <Link to="/login">로그인</Link>
      </Login>
    </HomeSC>
  );
}

export default withRouter(Home);
