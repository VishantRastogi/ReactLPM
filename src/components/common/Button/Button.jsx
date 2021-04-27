/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import React from "react";
import { ButtonSC } from "./Button-style";
import PropTypes from "prop-types";

export default function Button({ buttonText, triggerEvent, isRel }) {
  return (
    <ButtonSC rel={isRel} onClick={triggerEvent}>
      {buttonText}
    </ButtonSC>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  triggerEvent: PropTypes.func.isRequired,
  isRel: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isRel: "false",
};
