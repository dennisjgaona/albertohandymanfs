import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LangButton from "./LangButton";
import { ContextLang } from "./Layout";
import Button from "./Button";
import Logo from "../src/assets/Logo";

const Hamburger = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="24"
        viewBox="0 0 52 24"
      >
        <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
          <rect
            id="Rectangle_3"
            data-name="Rectangle 3"
            width="42"
            height="4"
            rx="2"
            transform="translate(304 47)"
            fill="#574c4c"
          />
          <rect
            id="Rectangle_5"
            data-name="Rectangle 5"
            width="42"
            height="4"
            rx="2"
            transform="translate(304 67)"
            fill="#574c4c"
          />
          <rect
            id="Rectangle_4"
            data-name="Rectangle 4"
            width="52"
            height="4"
            rx="2"
            transform="translate(294 57)"
            fill="#574c4c"
          />
        </g>
      </svg>
    </div>
  );
};

export default function Header() {
  const { lang } = useContext(ContextLang);
  const [showNavbar, setShowNavbar] = useState(false);

  function handleShowNavbar() {
    setShowNavbar(!showNavbar);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link className="site-logo" to="/">
            <Logo />
          </Link>
        </div>

        <div className="navbar-menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar}>
                {lang ? "Home" : "Casa"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleShowNavbar}>
                {lang ? "HandyMan Services" : "HandyMan Servicios"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={handleShowNavbar}>
                {lang ? "Projects" : "Proyectos"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleShowNavbar}>
                {lang ? "About" : "Informacion"}
              </NavLink>
            </li>

            <li>
              <NavLink to="/book-a-handyman" onClick={handleShowNavbar}>
                <Button
                  linkTo="/book-a-handyman"
                  background-color="#30bced"
                  display="flex"
                  color="white"
                  flexDirection="column"
                  justifyContent="center"
                  fontSize="16px"
                  textAlign="center"
                  border="none"
                  width="125px"
                  height="60px"
                  borderRadius="12px"
                  justifySelf="center"
                >
                  {lang ? "Request Service" : "Requesiciona Servicio"}
                </Button>
              </NavLink>
            </li>
            <li>
              <Button
                linkTo="/book-a-handyman"
                background-color="orange"
                display="flex"
                color="white"
                flexDirection="column"
                justifyContent="center"
                fontSize="16px"
                textAlign="center"
                border="none"
                width="125px"
                height="60px"
                borderRadius="12px"
                justifySelf="center"
              >
                214-444-4444
              </Button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
