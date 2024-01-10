import React from "react";

export default function ReviewTile({ imgSrc, description, name }) {
  return (
    <div className="review-tile">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>⭐⭐⭐⭐⭐</p>
        <img src={imgSrc} alt="review-source" style={{ height: "3vh" }}></img>
      </div>

      <h3 style={{ color: "#4d4d4d" }}>{description}</h3>
      <h4 style={{ color: "#30bced" }}>{name}</h4>
    </div>
  );
}
