import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { RoutingControl } from "../components/Routing/RoutingControl";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { BARRIERS } from "../data/barriers";

// optional: fix default marker icons (Leaflet + Vite)
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./MapHome.css";

const markerColors = {
  Bordstein: "orange",
  Treppe: "red",
  Baustelle: "violet",
  Gefälle: "green",
  User: "blue",
};

function getMarkerIcon(type = "User") {
  const color = markerColors[type] || markerColors.User;

  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    iconRetinaUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function ReportClick({ enabled, onAdd }) {
  useMapEvents({
    click(e) {
      if (!enabled) return;
      onAdd([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}



export function MapHome() {
  const location = useLocation();

  const center = useMemo(() => [49.8728, 8.6512], []);
  const [mode, setMode] = useState("browse"); // "browse" | "report"
  const [userBarriers, setUserBarriers] = useState([]);
  const [route, setRoute] = useState(null); // { from: [..], to: [..] }

  // HIER: Menü-Trigger auslesen und Mode setzen
  useEffect(() => {
    if (location.state?.report) setMode("report");
    if (location.state?.report === false) setMode("browse");
  }, [location.state]);

  const allBarriers = useMemo(
    () => [...BARRIERS, ...userBarriers],
    [userBarriers],
  );

  const addBarrier = ({ title, type, position, description }) => {
    const newB = {
      id: `u-${Date.now()}`,
      title,
      type,
      position,
      description,
    };

    setUserBarriers((prev) => [newB, ...prev]);
  };

  const [draftPos, setDraftPos] = useState(null); // Klick-Position
  const [draftType, setDraftType] = useState("Bordstein");
  const [draftTitle, setDraftTitle] = useState("");

  return (
    <div className="map-screen">

        

      <MapContainer center={center} zoom={16} className="map-leaflet">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/*  Nur aktiv, wenn report-mode */}
        <ReportClick
          enabled={mode === "report"}
          onAdd={(pos) => {
            setDraftPos(pos);
          }}
        />

        {allBarriers.map((b) => (
          <Marker key={b.id} position={b.position} icon={getMarkerIcon(b.type)}>
            <Popup>
              <div style={{ minWidth: 180 }}>
                <b>{b.title}</b>
                <div style={{ fontSize: 12, opacity: 0.8 }}>Typ: {b.type}</div>
                <p style={{ margin: "8px 0", fontSize: 13 }}>{b.description}</p>

                <button
  type="button"
  className="btn btn--primary btn--block"
  onClick={() => setRoute({ from: center, to: b.position })}
>
                  Route starten 
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {route ? <RoutingControl waypoints={[route.from, route.to]} /> : null}
      </MapContainer>

      {mode === "report" && (
        <div className="report-banner">
          <div className="report-text">
            Tippe auf die Karte, um eine Barriere zu setzen
          </div>

          <button
            type="button"
            className="report-cancel"
            onClick={() => setMode("browse")}
          >
            Abbrechen
          </button>
        </div>
      )}
      {draftPos && (
        <div className="report-sheet">
          <h3>Barriere melden</h3>

          <label>
            Titel (optional)
            <input
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
              placeholder="z. B. Hoher Bordstein"
            />
          </label>

          <label>
            Typ
            <select
              value={draftType}
              onChange={(e) => setDraftType(e.target.value)}
            >
              <option value="Bordstein">Bordstein</option>
              <option value="Treppe">Treppe</option>
              <option value="Baustelle">Baustelle</option>
              <option value="Gefälle">Gefälle</option>
            </select>
          </label>

          <div className="report-actions">
            <button
  type="button"
  className="btn btn--secondary"
  onClick={() => {
    setDraftPos(null);
    setMode("browse");
  }}
>
  Abbrechen
</button>

<button
  type="button"
  className="btn btn--primary"
  onClick={() => {
    addBarrier({
      title: draftTitle || "Gemeldete Barriere",
      type: draftType,
      position: draftPos,
      description: "",
    });
    setDraftPos(null);
    setDraftTitle("");
    setDraftType("Bordstein"); 
    setMode("browse");
  }}
>
  Speichern
</button>

          </div>
        </div>
      )}
    </div>
  );
}
