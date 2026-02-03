import "./Score.css";
import { useNavigate } from "react-router-dom";

export function Score({ score = 120 }) {
  const navigate = useNavigate();

  return (
    <button
      className="score-box"
      onClick={() => navigate("/praemien")}
      aria-label={`${score} Punkte – zu Prämien`}
      type="button"
    >
      <div className="score-number">{score}</div>
      <div className="score-label">Punkte</div>
    </button>
  );
}
