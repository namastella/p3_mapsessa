import "./Score.css";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../context/ScoreContext";

export function Score() {
  const navigate = useNavigate();
  const { score } = useScore();

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
