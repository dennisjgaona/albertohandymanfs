import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export default function ServiceTile({ iconName, title, description, btnPath }) {
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

  const hoveredView = (
    <>
      <div className="service-tile-img-hover">
        {
          <IconContext.Provider
            value={{
              verticalAlign: "right",
              size: "50px",
              color: "white",
            }}
          >
            {iconName}
          </IconContext.Provider>
        }
      </div>
      <div className="service-tile-title-hover">
        <h2> {title}</h2>
        <h3>{description}</h3>
        <div>
          <Link to={btnPath}>Learn More</Link>
        </div>
      </div>
    </>
  );
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={isHovered ? "service-tile-hover" : "service-tile-normal"}
    >
      {isHovered ? hoveredView : normalView}
    </div>
  );
}
