import "./ShowNetzwerk.css";
import { useNavigate } from "react-router-dom";
import { CallCard } from "../components/CallCard/CallCard";
import { useCalls } from "../context/CallsContext";
import { useState } from "react";
import { ConfirmModal } from "../components/ConfirmModal/ConfirmModal";


export function ShowNetzwerk() {
  const navigate = useNavigate();
  const { calls } = useCalls();
  const [connectedIds, setConnectedIds] = useState([]);
  const [connectCall, setConnectCall] = useState(null);
  const isConnected = (id) => connectedIds.includes(id);

  return (
    <div className="netzwerk-page">
      <header className="netzwerk-top">
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
            onMessage={(c) => navigate(`/chat/${c.id}`)}
            onConnect={(c) => setConnectCall(c)}
          />
        ))}
        {connectCall && (
          <ConfirmModal
            open={true}
            title="Bereitschaft signalisieren"
            confirmText="Bereitschaft senden"
            cancelText="Abbrechen"
            onClose={() => setConnectCall(null)}
            onConfirm={() => {
              setConnectedIds((prev) => [...prev, connectCall.id]);
              setConnectCall(null);
            }}
          >
            <p>
              Du signalisierst, dass du bereit bist, bei diesem Aufruf zu
              helfen.
            </p>
            <p>Die Person kann dich anschließend kontaktieren.</p>
          </ConfirmModal>
        )}
      </div>
    </div>
  );
}
