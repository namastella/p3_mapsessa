import "./InteractionModal.css";

export function InteractionModal({
  open,
  onClose,
  call,
  onConfirmMe,
  onConfirmOther,
}) {
  if (!open || !call) return null;

  const i = call.interaction;

  return (
    <div className="icm-overlay" onClick={onClose}>
      <div className="icm-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="icm-title">Interaktion abschließen</div>
        <div className="icm-sub">
          Bitte bestätigt beide, dass die Hilfe stattgefunden hat.
        </div>

        <div className="icm-row">
          <span>Ich bestätige</span>
          <button
            type="button"
            className="icm-btn"
            onClick={onConfirmMe}
            disabled={i?.confirmedMe}
          >
            {i?.confirmedMe ? "Bestätigt ✓" : "Bestätigen"}
          </button>
        </div>

        <div className="icm-row">
          <span>Andere Person</span>
          <button
            type="button"
            className="icm-btn"
            onClick={onConfirmOther}
            disabled={i?.confirmedOther}
          >
            {i?.confirmedOther ? "Bestätigt ✓" : "Simulieren"}
          </button>
        </div>

        {i?.status === "completed" ? (
          <div className="icm-done">✅ Abgeschlossen – Punkte können gutgeschrieben werden.</div>
        ) : null}

        <button type="button" className="icm-close" onClick={onClose}>
          Schließen
        </button>
      </div>
    </div>
  );
}
