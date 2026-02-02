import "./BottomNav.css";
import NavIcon from "../../assets/icons/navPfeil.svg?react";
import ProfileIcon from "../../assets/icons/profil.svg?react";
import NetworkIcon from "../../assets/icons/netzwerk.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="nav-item">
        <NavIcon />
      </button>

      <button className="nav-item">
        <NetworkIcon />
      </button>

      <button className="nav-item">
        <ProfileIcon />
      </button>

      <button className="menu-button" aria-label="Menü öffnen">
        <MenuIcon />
      </button>
    </nav>
  );
}

