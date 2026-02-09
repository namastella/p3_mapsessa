import "./CallCard.css";

import MessageIcon from "../../assets/icons/message.svg?react";
import ConnectIcon from "../../assets/icons/connect.svg?react";

export function CallCard({
  call,
  onMessage,
  onConnect,
  onFinish,
  connected = false,
  completed = false,
}) {
  return (
    <article className="call-card">
      <header className="call-card__header">
        <div className="call-card__name">{call.name}</div>
        <div className="call-card__handle">{call.handle}</div>
      </header>

      <p className="call-card__text">{call.text}</p>

      <footer className="call-card__footer">
        <span className="call-card__date">{call.date}</span>

        <div className="call-card__actions">
          <button
            type="button"
            className="icon-btn msg"
            aria-label="Nachricht schreiben"
            onClick={() => onMessage?.(call)}
          >
            <MessageIcon />
          </button>

          <button
            type="button"
            className={`icon-btn connect ${connected ? "is-active" : ""} ${
              completed ? "is-completed" : ""
            }`}
            aria-label="Verbinden"
            onClick={() => onConnect?.(call)}
            disabled={connected || completed}
            title={
              completed
                ? "Bereits abgeschlossen"
                : connected
                  ? "Bereitschaft gesendet"
                  : "Verbinden"
            }
          >
            <ConnectIcon />
          </button>

          {/* nur zeigen, wenn connected aber noch nicht completed */}
          {connected && !completed ? (
            <button
              type="button"
              className="call-card__finish"
              onClick={() => onFinish?.(call)}
            >
              Interaktion abschließen
            </button>
          ) : null}
        </div>

        {/* Statuszeile */}
        {completed ? (
          <span className="call-card__status">
            ✔️ Interaktion abgeschlossen
          </span>
        ) : connected ? (
          <span className="call-card__status">
            1 Person hat Bereitschaft signalisiert
          </span>
        ) : null}
      </footer>
    </article>
  );
}
