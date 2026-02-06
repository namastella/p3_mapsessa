import { useNavigate } from "react-router-dom";
import "./Menu.css";

export function Menu({ onClose }) {
    const navigate = useNavigate();

  return (
    <div className="menu-overlay" onClick={onClose} role="presentation">
      <div
        className="menu-sheet"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Menü"
      >
        <div className="menu-handle" />
        <div className="menu-header">
          <span className="menu-title">Menü</span>
          <button
            className="menu-close"
            onClick={onClose}
            aria-label="Schließen"
          >
            ✕
          </button>
        </div>

        <button className="menu-item"  
          onClick={() => {
            navigate("/aufruf/neu");
            onClose();
          }}>Aufruf starten</button>
        <button className="menu-item"
          onClick={() => {
            onClose?.();
            navigate("/", { state: { report: true } }); // Report-Mode an
          }}
        >
          Barriere melden
        </button>
      </div>
    </div>
  );
}


