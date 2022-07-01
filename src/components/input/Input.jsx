import React from "react";
import "./Input.css";

const Input = ({ size = "medium", ...rest }) => {
  return <input className={`size ${size}`} {...rest} />;
};

export default Input;
