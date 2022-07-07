import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = (props) => {
  const { variant = "primary", children, size, ...rest } = props;

  return (
    <button className={`button ${variant} ${size}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOf(["Primary", "Secondary", "Success", "Danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  variant: "secondary",
  children: "Primary",
  size: "medium",
};
