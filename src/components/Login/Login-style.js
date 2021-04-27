/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import styled from "styled-components";

export const LoginSC = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.div`
  position: absolute;
  margin-top: 65px;
  top: 15%;
  left: 6%;
  width: 85%;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin: 5px 7px;
  background: transparent;
  padding: 6px 12px;
  border-bottom: 1px solid #16110d;
  margin-bottom: ${(props) => (props.marginBottom ? "20px" : "0")};

  input {
    color: ${(props) => (props.trans ? "transparent !important" : "initial")};
  }

  span {
    position: absolute;
    top: 7px;
    left: 3px;
    color: #b7b7b7;
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 33px 15px 120px 0px;
`;

export const LoginButton = styled.div`
color: #707070;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 20px 0 50px 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  width: 310px;
  @media only screen and (max-width: 410px) {
    margin: 20px 0 50px 30px;
  }
  a {
    margin-bottom: 5px;
    color: #707070;
    text-decoration: none;
    &::after {
      content: "";
      border-bottom: 1px solid #3b286d;
      width: 50px;
      display: block;
      position: absolute;
      right: 36%;
      @media only screen and (max-width: 410px) {
        right: 30%;
      }
      @media only screen and (max-width: 320px) {
        /* Extra small devices (phones, 320px and down) */
        right: 20%;
      }
    }
  }
`;

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}
