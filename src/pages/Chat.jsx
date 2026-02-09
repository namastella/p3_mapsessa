import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCalls } from "../context/CallsContext";
import "./Chat.css";

function timeNowHHMM() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export function Chat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { calls } = useCalls();

  const call = calls.find((c) => c.id === id);

  const initialMessages = useMemo(() => {
    // Dummy-Chatverlauf
    return [
      {
        id: "m1",
        from: "me",
        text:
          "Hi! Hab deinen Aufruf gesehen. Ich hätte morgen Zeit und könnte dir bei der Etappe helfen.",
        time: "12:10",
      },
      {
        id: "m2",
        from: "other",
        text: "Oh wow, danke dir! Das würde mir mega helfen. Wann passt es dir?",
        time: "12:12",
      },
      {
        id: "m3",
        from: "me",
        text: "Gerne 😊 Sagen wir 15:30 an der Ecke Rhönring?",
        time: "12:13",
      },
    ];
  }, []);

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { id: `m-${Date.now()}`, from: "me", text, time: timeNowHHMM() },
    ]);
    setInput("");
  };

  if (!call) {
    return (
      <div style={{ padding: 16 }}>
        <p>Chat nicht gefunden.</p>
        <button onClick={() => navigate("/netzwerk")}>Zurück</button>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <header className="chat-top">
        <button className="chat-back" type="button" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="chat-title">
          <div className="chat-name">{call.name}</div>
          <div className="chat-handle">{call.handle}</div>
        </div>
      </header>

      <div className="chat-thread" role="log" aria-label="Chat Verlauf">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`bubble-row ${m.from === "me" ? "me" : "other"}`}
          >
            <div className="bubble">
              <div className="bubble-text">{m.text}</div>
              <div className="bubble-time">{m.time}</div>
            </div>
          </div>
        ))}
      </div>

      <footer className="chat-inputbar">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nachricht schreiben…"
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />
        <button className="chat-send" type="button" onClick={send}>
          Senden
        </button>
      </footer>
    </div>
  );
}
