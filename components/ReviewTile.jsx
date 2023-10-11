import React from "react";

export default function ReviewTile({ imgSrc, description, name }) {
  return (
    <div>
      <img src={imgSrc} alt="review-source"></img>
      <h3>{description}</h3>
      <h4>{name}</h4>
    </div>
  );
}
