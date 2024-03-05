import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, linkTo, type, ...attributes }) {
  return (
    <Link to={linkTo} style={{ ...attributes }} type={type ? type : ""}>
      {children}
    </Link>
  );
}
