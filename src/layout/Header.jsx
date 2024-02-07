import React from "react";
import logo from "../assets/logo/logoDesktopKasa.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="" />
      </div>

      <div className="navigation__navLinks">
        <NavLink
          to="/"
          className={({ isActive }) =>
            !isActive
              ? "navigation__navLinks__link"
              : "navigation__navLinks__link--active"
          }
        >
          <p className="navigation__navLinks__link">Acceuil</p>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            !isActive
              ? "navigation__navLinks__link"
              : "navigation__navLinks__link--active"
          }
        >
          <p className="navigation__navLinks__link">A Propos</p>
        </NavLink>
      </div>
    </nav>
  );
}
