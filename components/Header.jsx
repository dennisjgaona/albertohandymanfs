import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import LangButton from "./LangButton";
import { ContextLang } from "./Layout";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const { lang } = useContext(ContextLang);

  return (
    <header>
      <Link className="site-logo" to="/">
        #HandyMan
      </Link>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {lang ? "Home" : "Casa"}
        </NavLink>
        <NavLink
          to="/services"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {lang ? "HandyMan Services" : "HandyMan Servicios"}
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {lang ? "Projects" : "Proyectos"}
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {lang ? "About" : "Informacion"}
        </NavLink>
        <LangButton />
        <NavLink to="/book-a-handyman">
          <button>{lang ? "Request Service" : "Requesiciona Servicio"}</button>
        </NavLink>
        <button>{`(214)-444-4444`}</button>
      </nav>
    </header>
  );
}
