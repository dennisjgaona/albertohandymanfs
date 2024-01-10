import React, { useState } from "react";
import { Link } from "react-router-dom";
//"#fc5130"
export default function CustomLink({ color, locationTo, pathTo }) {
  const [hover, setHover] = useState(false);

  const noHoverStyle = {
    color: "#000000",
    textDecoration: "none",
    alignSelf: "center",
  };
  const onHoverStyle = {
    color: color,
    textDecoration: "underline",
    alignSelf: "center",
  };
  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link to={pathTo} style={hover ? onHoverStyle : noHoverStyle}>
          {locationTo}
        </Link>
      </div>
    </>
  );
}
