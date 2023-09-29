import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

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
          Home
        </NavLink>
        <NavLink
          to="/services"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          HandyMan Services
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        {/* <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link> */}
        <button>Request Service</button>
        <button>Contact</button>
      </nav>
    </header>
  );
}
