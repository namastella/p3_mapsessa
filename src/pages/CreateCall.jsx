import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCalls } from "../context/CallsContext";
import "./CreateCall.css";

function formatDateDE(d = new Date()) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

export function CreateCall() {
  const navigate = useNavigate();
  const { addCall } = useCalls();

  const today = useMemo(() => formatDateDE(), []);
  const [text, setText] = useState("");

  //Dummy-User
  const name = "Stella";
  const handle = "@stellaimdhda";

  const canSubmit = text.trim().length >= 20;

  const submit = () => {
    addCall({
      name,
      handle,
      text: text.trim(),
      date: today,
    });

    navigate("/netzwerk"); // zurück in Feed (neuer Call steht oben)
  };

  return (
    <div className="create-page">
      <header className="create-top">
        <button className="back-btn" type="button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1 className="create-title">Aufruf starten</h1>
      </header>

      <div className="create-card">
        <div className="create-meta">
          <div className="create-user">
            <b>{name}</b> <span className="create-muted">{handle}</span>
          </div>
          <div className="create-muted">{today}</div>
        </div>

        <label className="create-label" htmlFor="call-text">
          Beschreibe kurz, wobei du Hilfe brauchst:
        </label>

        <textarea
          id="call-text"
          className="create-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="z.B. Bordstein + Gefälle am Rhönring… Ich brauche morgen Unterstützung bis zur Adresse…"
          rows={9}
        />

        <div className="create-actions">
          <button
            type="button"
            className="create-cancel"
            onClick={() => navigate(-1)}
          >
            Abbrechen
          </button>

          <button
            type="button"
            className="create-submit"
            onClick={submit}
            disabled={!canSubmit}
          >
            Veröffentlichen
          </button>
        </div>

        <p className="create-hint create-muted">
          Dein Aufruf erscheint danach im Netzwerk-Feed.
        </p>
      </div>
    </div>
  );
}
