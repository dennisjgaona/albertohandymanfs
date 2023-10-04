import React from "react";

export default function ValidationComponent(props) {
  return (
    <>
      <div className="validation-comp">
        <h1> {props.title}</h1>
        <h2>{props.subTitle}</h2>
        <img alt="svgImg" src={props.imgSrc}></img>
      </div>
    </>
  );
}
