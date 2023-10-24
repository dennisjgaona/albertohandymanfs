import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ServicePageTile({ iconName, title, btnPath }) {
  const [isHovered, setHover] = useState(false);
  //const tagName = iconName;

  const normalView = (
    <>
      <div className="service-tile-img-norm">{iconName}</div>
      <div className="service-tile-title-norm">
        <h2>{title}</h2>
      </div>
    </>
  );

  return (
    <Link to={btnPath}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`service-tile ${isHovered ? "schover" : ""}`}
      >
        {normalView}
      </div>
    </Link>
  );
}
