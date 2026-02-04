import "./ShowNetzwerk.css";
import { useNavigate } from "react-router-dom";
import { CallCard } from "../components/CallCard/CallCard";
import { useCalls } from "../context/CallsContext";

export function ShowNetzwerk() {
  const navigate = useNavigate();
  const { calls } = useCalls();

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
            onMessage={(c) => alert(`Nachricht an ${c.name} (kommt als nächstes)`)}
            onConnect={(c) => alert(`Connect mit ${c.name} (kommt als nächstes)`)}
          />
        ))}
      </div>
    </div>
  );
}
