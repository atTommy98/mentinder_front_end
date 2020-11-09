import React from "react";
import { Link } from "react-router-dom";

function Button({ buttonText, path }) {
  return (
    <Link to={path}>
      <button>{buttonText}</button>
    </Link>
  );
}

export default Button;
