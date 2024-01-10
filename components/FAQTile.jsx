import React, { useState, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function FAQTile({ question, answer }) {
  const contentHeight = useRef();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion-item">
        <div
          className={`question-container ${isActive ? "active" : ""}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className="question-content">{question}</div>
          <RiArrowDropDownLine
            className={`arrow ${isActive ? "active" : ""}`}
          />
        </div>
        <div
          ref={contentHeight}
          className="answer-container"
          style={
            isActive
              ? { height: contentHeight.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className="answer-content">{answer}</p>
        </div>
      </div>
    </>
  );
}
