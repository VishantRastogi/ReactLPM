/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import styled from "styled-components";

export const SignUpSC = styled.div`
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
  border-bottom: 1px solid #b7b7b7;
  margin-bottom: ${(props) => (props.marginBottom ? "20px" : "0")};
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex: 1;
  margin: 5px 7px;
  background: transparent;
  padding: 6px 12px;
`;

export const ColumnListWrapper = styled.div`
  display: flex;
  //   justify-content: ${(props) =>
    props.flexC ? "center" : "space-between"};
  justify-content: space-evenly;
  width: 100% !important;
  div {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 100%;
  }
  ul {
    flex-wrap: wrap;
    height: 350px;
    display: flex;
    flex-direction: column;
  }
  label {
    padding-left: 27px;
    display: block;
    position: relative;
    margin-bottom: 18px;
    cursor: pointer;
    font-size: 15px;
    user-select: none;
  }
  span {
    vertical-align: middle;
    font-size: 0.875rem;
    font-weight: 400;
    color: #757575;
    position: relative;
    text-transform: capitalize;
  }
  input {
    z-index: -1;
    opacity: 0;
  }
`;

export const CheckMark = styled.div`
  top: 2px;
  height: 16px;
  width: 16px !important;
  background: ${(props) => (props.checked ? "#3B286D" : "#B7B7B7")};
  border-radius: ${(props) => (props.normal ? "0" : "50%")};
  position: absolute;
  left: 0px;
  &::after {
    top: 2px;
    width: 3px;
    height: 8px;
    display: block;
    border: solid #fff;
    border-width: 0 1px 2px 0;
    left: 6px;
    display: ${(props) => (props.checked ? "block" : "none")};
    display: block;
    transform: rotate(45deg);
    content: "";
    position: absolute;
  }
`;

export const Login = styled.div`
  position: relative;
  color: #707070;
  left: 50%;
  transform: translateX(-50%);
  width: 310px;
  margin: 20px 0 50px 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
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
      right: 30%;
    }
  }
`;
