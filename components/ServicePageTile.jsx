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
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={isHovered ? "service-tile-hover" : "service-tile-normal"}
    >
      {normalView}
    </div>
  );
}
