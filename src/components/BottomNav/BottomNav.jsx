import "./BottomNav.css";
import { NavLink } from "react-router-dom";

import NavIcon from "../../assets/icons/navPfeil.svg?react";
import ProfileIcon from "../../assets/icons/profil.svg?react";
import NetworkIcon from "../../assets/icons/netzwerk.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Bottom Navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `nav-item ${isActive ? "is-active" : ""}`}
        aria-label="Karte"
      >
        <NavIcon />
      </NavLink>

      <NavLink
        to="/netzwerk"
        className={({ isActive }) => `nav-item ${isActive ? "is-active" : ""}`}
        aria-label="Netzwerk"
      >
        <NetworkIcon />
      </NavLink>

      <NavLink
        to="/profil"
        className={({ isActive }) => `nav-item ${isActive ? "is-active" : ""}`}
        aria-label="Profil"
      >
        <ProfileIcon />
      </NavLink>

      <button className="menu-button" aria-label="Menü öffnen">
        <MenuIcon />
      </button>
    </nav>
  );
}
