import React from "react";

export default function WhyUsTile({ description, iconName }) {
  return (
    <div className="whyUsTile-component">
      {iconName}
      <h2>{description}</h2>
    </div>
  );
}
