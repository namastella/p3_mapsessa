import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectRoutes } from "./ProjectRoutes";
import "./index.css";
import { ScoreProvider } from "./context/ScoreContext";
import { CallsProvider } from "./context/CallsContext";
import { ThemeProvider } from "./context/ThemeContext";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ScoreProvider>
        <CallsProvider>
          <ProjectRoutes />
        </CallsProvider>
      </ScoreProvider>
    </ThemeProvider>
  </StrictMode>,
);
