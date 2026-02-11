import "./ShowNetzwerk.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CallCard } from "../components/CallCard/CallCard";
import { useCalls } from "../context/CallsContext";
import { ConfirmModal } from "../components/ConfirmModal/ConfirmModal";

export function ShowNetzwerk() {
  const navigate = useNavigate();

  const { calls } = useCalls();

  const [selectedCall, setSelectedCall] = useState(null);
  const [modalStep, setModalStep] = useState("connect"); // "connect" | "confirm"
  const [connectedIds, setConnectedIds] = useState([]); // Bereitschaft gesendet
  const [completedIds, setCompletedIds] = useState([]); // Interaktion abgeschlossen

  const [confirmedMe, setConfirmedMe] = useState(false);
  const [confirmedOther, setConfirmedOther] = useState(false);

  const isConnected = (id) => connectedIds.includes(id);
  const isCompleted = (id) => completedIds.includes(id);

  const closeModal = () => {
    setSelectedCall(null);
    setModalStep("connect");
    setConfirmedMe(false);
    setConfirmedOther(false);
  };

  return (
    <div className="netzwerk-page">
      <header className="netzwerk-top">
        <button
          type="button"
          className="back-btn"
          onClick={() => window.history.back()}
          aria-label="Zurück"
        >
          ←
        </button>

        <div className="netzwerk-top__title">Aufrufe</div>

        <button
          type="button"
          className="start-call-btn"
          onClick={() => navigate("/aufruf/neu")}
        >
          Aufruf starten
        </button>
      </header>

      <div className="feed">
        {calls.map((call) => (
          <CallCard
            key={call.id}
            call={call}
            connected={isConnected(call.id)}
            completed={isCompleted(call.id)}
            onMessage={(c) => navigate(`/chat/${c.id}`)}
            onConnect={(c) => {
              setSelectedCall(c);
              setModalStep("connect");
              setConfirmedMe(false);
              setConfirmedOther(false);
            }}
            onFinish={(c) => {
              setSelectedCall(c);
              setModalStep("confirm");
              setConfirmedMe(false);
              setConfirmedOther(true);
            }}
          />
        ))}
      </div>

      {selectedCall && (
        <ConfirmModal
          open={true}
          title={
            modalStep === "connect"
              ? "Bereitschaft signalisieren"
              : "Interaktion abschließen"
          }
          confirmText={
            modalStep === "connect" ? "Bereitschaft senden" : "Fertig"
          }
          cancelText="Schließen"
          onClose={closeModal}
          onConfirm={() => {
            if (modalStep === "connect") {
              setConnectedIds((prev) =>
                prev.includes(selectedCall.id)
                  ? prev
                  : [selectedCall.id, ...prev],
              );
              closeModal();
            } else {
              if (confirmedMe && confirmedOther) {
                setCompletedIds((prev) =>
                  prev.includes(selectedCall.id)
                    ? prev
                    : [selectedCall.id, ...prev],
                );
                closeModal();
              }
            }
          }}
        >
          {modalStep === "connect" ? (
            <>
              <p>
                Du signalisierst, dass du bereit bist, bei diesem Aufruf zu
                helfen.
              </p>
              <p>Die Person kann dich anschließend kontaktieren.</p>
            </>
          ) : (
            <>
              <p>Bitte bestätigt beide, dass die Hilfe stattgefunden hat.</p>

              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <button
                  type="button"
                  onClick={() => setConfirmedMe(true)}
                  disabled={confirmedMe}
                >
                  {confirmedMe ? "Ich bestätige ✓" : "Ich bestätige"}
                </button>

                <button
                  type="button"
                  onClick={() => setConfirmedOther(true)}
                  disabled={confirmedOther}
                >
                  {confirmedOther
                    ? "Andere Person ✓"
                    : "Andere Person (simulieren)"}
                </button>
              </div>

              {confirmedMe && confirmedOther ? (
                <p style={{ marginTop: 12, fontWeight: 700 }}>
                  ✔️ Interaktion abgeschlossen – Dir werden in Kürze 100 Punkte
                  auf deinem Konto gutgeschrieben.
                </p>
              ) : (
                <p style={{ marginTop: 12, opacity: 0.7 }}>
                  Beide Bestätigungen nötig.
                </p>
              )}
            </>
          )}
        </ConfirmModal>
      )}
    </div>
  );
}
