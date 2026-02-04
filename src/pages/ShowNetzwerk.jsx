//import "./ShowNetzwerk.css";
import { CALLS } from "../data/calls";
import { CallCard } from "../components/CallCard/CallCard";

export function ShowNetzwerk() {
  const handleStartCall = () => {
    alert("Aufruf starten (kommt als nächstes)");
  };

  return (
    <div className="netzwerk-page">
      <header className="netzwerk-top">
        <div className="netzwerk-top__title">Aufrufe</div>

        <button type="button" className="start-call-btn" onClick={handleStartCall}>
          Aufruf starten
        </button>
      </header>

      <div className="feed">
        {CALLS.map((call) => (
          <CallCard
            key={call.id}
            call={call}
            onMessage={(c) => alert(`Nachricht an ${c.name}`)}
            onConnect={(c) => alert(`Connect mit ${c.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
