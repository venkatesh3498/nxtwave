import React from "react";
import { StyledButton } from './Styles';

const Button = ({ text, variant, ...rest }) => {
  return <StyledButton {...rest} variant={variant}>{text}</StyledButton>;
};

export default Button;
