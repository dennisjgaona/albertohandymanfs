import React, { useState } from "react";
import "./ToggleLang.css";

function ToggleLang(props) {
  const [toggle, setToggle] = useState(false);

  function handleChange() {
    setToggle(!toggle);
    props.pullLang(toggle);
    //console.log(toggle);
  }

  //   function handleSPClick() {
  //     setToggle(true);
  //   }

  return (
    <div>
      <div className={`radio ${toggle ? "off" : "on"}`}>
        <div className="wrap">
          <input type="radio" id="on" name="radio" />
          <label for="on" onClick={handleChange}>
            🇺🇸
          </label>

          <input type="radio" id="off" name="radio" />
          <label for="off" onClick={handleChange}>
            🇲🇽
          </label>

          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}
export default ToggleLang;
