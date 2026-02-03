import "./ShowPraemieDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import { REWARDS } from "../data/rewards";

export function ShowPraemieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const reward = REWARDS.find((r) => r.id === id);

  if (!reward) {
    return (
        <div style={{ position: "sticky", top: 0, zIndex: 9999, background: "yellow", padding: 8 }}>
  DETAILSEITE IST DA ✅ id: {id}
</div>
      
    );
  }

  return (
    <div className="detail-page">
      <header className="detail-header">
        <button className="back" onClick={() => navigate(-1)} aria-label="Zurück">
          ←
        </button>
        <span className="detail-eyebrow">Prämien Detailansicht</span>
      </header>

      <div className="detail-image-wrap">
        <img src={reward.image} alt="" className="detail-image" />
        <div className="detail-price-badge">{reward.points} P.</div>
      </div>

      <div className="detail-content">
        <h1 className="detail-title">{reward.title}</h1>
        <p className="detail-text">{reward.description}</p>
        <p className="detail-text muted">{reward.details}</p>

        {reward.footnote ? (
          <p className="detail-footnote">{reward.footnote}</p>
        ) : null}
      </div>

      <div className="detail-cta">
        <span className="detail-cta-text">
          Jetzt Prämie für {reward.points} Punkte erhalten!
        </span>
        <button className="detail-cta-button" aria-label="Prämie einlösen">
          +
        </button>
      </div>
    </div>
  );
}
