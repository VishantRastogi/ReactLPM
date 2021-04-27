/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import styled, { css } from "styled-components";

export const InputSC = styled.input`
  border-radius: 4px;
  border: transparent;
  background-color: transparent;
  transition: all 0.3s ease 0s;
  height: 20px;
  font-size: 14px;
  font-weight: 100;
  color: rgb(155, 155, 155) !important;
  padding: 0px !important;
  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  &::placeholder {
    color: #b7b7b7;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #b7b7b7;
  }

  &::-ms-input-placeholder {
    color: #b7b7b7;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  }
  ${(props) =>
    props.isError &&
    css`
      border-color: red;
    `};
`;
