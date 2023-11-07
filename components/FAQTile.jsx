import React, { useState } from "react";

export default function FAQTile({ question, answer }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div>{question}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{answer}</div>}
      </div>
    </>
  );
}
