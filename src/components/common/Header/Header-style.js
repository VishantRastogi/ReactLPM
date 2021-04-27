/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import styled from "styled-components";

export const HeaderSC = styled.div``;

export const HeaderImage = styled.div`
  position: absolute;
  top: 10%;
  left: 47%;
  transform: translateX(-50%);
  width: 150px;
  bottom: 82.74%;
  background-repeat: no-repeat, repeat;
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : ""};
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    left: 48%;
  }
`;

export const HeaderBottom = styled.div`
  margin-top: 55px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  width: 92px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  /* identical to box height */
  color: #0a0a0a;
`;

export const BarChart = styled.div``;

export const RectangleI = styled.div`
  position: absolute;
  left: 40.64%;
  right: 55.98%;
  top: 32.83%;
  bottom: 61.28%;
  border-radius: 20px;
  background: linear-gradient(180deg, #a8e9d9 6.2%, #5ec2cc 102.4%);
`;

export const RectangleS = styled.div`
  position: absolute;
  left: 46.1%;
  right: 50.52%;
  top: 31.08%;
  bottom: 61.28%;
  border-radius: 20px;
  background: linear-gradient(180deg, #5ec2cc 17.1%, #338ba8 98.8%);
`;

export const RectangleT = styled.div`
  position: absolute;
  left: 51.57%;
  right: 45.06%;
  top: 29.15%;
  bottom: 61.28%;
  border-radius: 20px;
  background: linear-gradient(180deg, #338ba8 15.9%, #3360a8 104.5%);
`;

export const RectangleF = styled.div`
  position: absolute;
  left: 57.03%;
  right: 39.59%;
  top: 31.08%;
  bottom: 61.28%;
  border-radius: 20px;
  background: linear-gradient(180deg, #7581d4 5.1%, #6247b0 127.17%);
`;
