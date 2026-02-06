import "./ShowPraemieDetail.css";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal/ConfirmModal";
import { useParams, useNavigate } from "react-router-dom";
import { REWARDS } from "../data/rewards";
import { useScore } from "../context/ScoreContext";


export function ShowPraemieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const { score, spend, canAfford } = useScore();


  const reward = REWARDS.find((r) => r.id === id);

  if (!reward) {
    return (
      <div style={{ padding: 16 }}>
        <p>Prämie nicht gefunden.</p>
        <button onClick={() => navigate("/praemien")}>
          Zurück zur Übersicht
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <header className="detail-header">
        <button
          className="back"
          onClick={() => navigate(-1)}
          aria-label="Zurück"
        >
          ←
        </button>
        <span className="detail-eyebrow">{reward.shortTitle ?? "Prämie"}</span>
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
        <button
          className="detail-cta-button"
          aria-label="Prämie einlösen"
          onClick={() => setConfirmOpen(true)}
        >
          +
        </button>
      </div>
      <ConfirmModal
        open={confirmOpen}
        cancelText="Abbrechen"
        confirmText="Eintauschen"
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
  if (!canAfford(reward.points)) {
    // statt dem vielleicht lieber ein anderes Modal anzeigen? oder Button ausgegraut? 
    setConfirmOpen(false);
    alert("Du hast leider nicht genug Punkte.");
    return;
  }

  spend(reward.points);      // Punkte abziehen
  setConfirmOpen(false);
  setSuccessOpen(true);
}}

      >
        <p>
          Wenn du gerne <b>{reward.points} Punkte</b> gegen diesen Gutschein
          eintauschen möchtest, wird dir der Gutscheincode an deine hinterlegte
          E-Mail Adresse gesendet.
        </p>
        <p>
          Wenn du damit einverstanden bist, bestätige bitte deinen
          Prämieneintausch.
        </p>
      </ConfirmModal>
      <ConfirmModal
        open={successOpen}
        variant="success"
        onClose={() => setSuccessOpen(false)}
      >
        <p>
          <b>Super, das hat geklappt.</b>
        </p>
        <p>
          Dein Gutscheincode sollte sich nun in deinem e-Mail Postfach befinden.
        </p>
        <p>Viel Spaß mit deiner Prämie!</p>
      </ConfirmModal>
    </div>
  );
}
