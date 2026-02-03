import "./TileRow.css";

export function TileRow({ children }) {
  return (
    <div className="tile-row" role="list" aria-label="Kachel-Reihe">
      {children}
    </div>
  );
}
