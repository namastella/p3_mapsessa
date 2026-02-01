import "./BottomNav.css";

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="nav-item">Route</button>
      <button className="nav-item">Netzwerk</button>
      <button className="nav-item">Profil</button>

      <button className="menu-button" aria-label="Menü öffnen">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </button>
    </nav>
  );
}
