/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import styled from "styled-components";

export const HomeSC = styled.div``;

export const OnTop = styled.div`
  position: absolute;
  left: 8.33%;
  right: 16.31%;
  top: 45.38%;
  bottom: 50.82%;
  font-family: Lato;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #707070;
`;

export const OnTopText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
`;

export const LoremText = styled.div`
  height: 18px;
  position: absolute;
  top: 55.43%;
  bottom: 42.12%;
  color: #b7b7b7;
  text-align: left;
  font-family: Merriweather;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  overflow: hidden;
  text-overflow: clip;
`;

export const Login = styled.div`
  height: 19px;
  color: black;
  position: absolute;
  width: 50px;
  left: 44.69%;
  right: 44.44%;
  top: 86.68%;
  bottom: 10.73%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    left: 46.69%;
}
@media only screen and (min-width: 992px) {
    left: 47.5%;
}
  a {
    text-decoration: none;
  }
`;

export const SignUp = styled.div`
  position: absolute;
  left: 15.46%;
  right: 15.22%;
  top: 77.04%;
  bottom: 15.76%;
  background: #3b286d;
  height: 53px;
  width: 287px;
  border-radius: 5px;
  border-color: transparent;
  a {
    color: #fff;
  }
`;
