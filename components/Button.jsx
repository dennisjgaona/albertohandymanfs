import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, linkTo, ...attributes }) {
  return (
    <Link to={linkTo} style={{ ...attributes }}>
      {children}
    </Link>
  );
}
