import { useState } from "react";
import "./ShowProfile.css";
import { useTheme } from "../context/ThemeContext";
import { SettingRow } from "../components/Settings/SettingRow";
import { Toggle } from "../components/Settings/Toggle";

export function ShowProfile() {
  const [sound, setSound] = useState(true);
  const [lightMode, setLightMode] = useState(false);
  const [rightHanded, setRightHanded] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="profil-page">
      <header className="profil-top">
        <h1 className="profil-title">Profil</h1>
      </header>

      <section className="profil-card">
        <div className="avatar" aria-hidden="true" />
        <div className="profil-meta">
          <div className="profil-name">Stella</div>
          <div className="profil-handle">@stellaumlauf</div>
        </div>
      </section>

      <section className="settings">
        <div className="section-title">Einstellungen</div>

        <SettingRow
          label="Ton & Vibration"
          description="Feedback bei Interaktionen"
          right={
            <Toggle
              checked={sound}
              onChange={setSound}
              ariaLabel="Ton und Vibration umschalten"
            />
          }
        />

        <SettingRow
          label="Dark Mode"
          description="Dunkler Look für die App"
          right={
            <Toggle
              checked={isDark}
              onChange={toggleTheme}
              ariaLabel="Dark Mode umschalten"
            />
          }
        />

        <SettingRow
          label="Rechtshänder-Modus"
          description="Buttons besser erreichbar"
          right={
            <Toggle
              checked={rightHanded}
              onChange={setRightHanded}
              ariaLabel="Rechtshänder-Modus umschalten"
            />
          }
        />

        <SettingRow
          label="Schrift & Lesbarkeit"
          description="Größe, Kontrast, Vereinfachung"
          right={<span className="chev">›</span>}
          onClick={() => alert("Schrifteinstellungen (später)")}
        />

        <SettingRow
          label="Barrierefreiheit"
          description="Bedienhilfe & Assistenz"
          right={<span className="chev">›</span>}
          onClick={() => alert("Barrierefreiheit (später)")}
        />
      </section>
    </div>
  );
}
