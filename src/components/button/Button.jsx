import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { variant = "primary", children, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOf(["Primary", "Secondary", "Success", "Danger"]),
};

Button.defaultProps = {
  variant: "secondary",
  children: "Primary",
};
