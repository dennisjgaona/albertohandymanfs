import React, { useContext } from "react";
import "./LangButton.css";
import { ContextLang } from "./Layout";

export default function LangButton() {
  const { lang, setLang } = useContext(ContextLang);

  function handleChange() {
    setLang(!lang);
    //console.log(toggle);
  }

  return (
    <div>
      <div className={`radio ${!lang ? "off" : "on"}`}>
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
