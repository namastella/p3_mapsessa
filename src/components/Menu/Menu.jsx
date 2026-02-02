import "./Menu.css";

export function Menu({ onClose }) {
  return (
    <div className="menu-overlay" onClick={onClose} role="presentation">
      <div
        className="menu-sheet"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Menü"
      >
        <div className="menu-header">
          <span className="menu-title">Menü</span>
          <button className="menu-close" onClick={onClose} aria-label="Schließen">
            ✕
          </button>
        </div>

        <button className="menu-item">Aufruf starten</button>
        <button className="menu-item">Barriere melden</button>
      </div>
    </div>
  );
}
