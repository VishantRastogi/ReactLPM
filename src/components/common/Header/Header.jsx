/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import React from "react";
import {
  HeaderSC,
  HeaderImage,
  HeaderBottom,
  BarChart,
  RectangleI,
  RectangleS,
  RectangleT,
  RectangleF,
} from "./Header-style";
import GradationImage from "../../../asset/gradation.png";
import PropTypes from "prop-types";

function Header({ showBar, text }) {
  return (
    <HeaderSC>
      <HeaderImage bgImage={GradationImage} />
      {showBar ? (
        <BarChart>
          <RectangleI />
          <RectangleS />
          <RectangleT />
          <RectangleF />
        </BarChart>
      ) : (
        <HeaderBottom>{text}</HeaderBottom>
      )}
    </HeaderSC>
  );
}

export default Header;

Header.propTypes = {
  showBar: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Header.defaultProps = {
  showBar: false,
};
