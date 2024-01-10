import React from "react";

export default function ValidationServicesComponent(props) {
  return (
    <>
      <div className="validationServices-comp">
        <h1> {props.title}</h1>
        <h2>{props.subTitle}</h2>
        <img
          alt="svgImg"
          src={props.imgSrc}
          style={{ height: "100px", width: "100px", alignSelf: "center" }}
        ></img>
      </div>
    </>
  );
}
