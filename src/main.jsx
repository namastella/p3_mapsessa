import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectRoutes } from "./ProjectRoutes";
import "./index.css";
import { ScoreProvider } from "./context/ScoreContext";
import { CallsProvider } from "./context/CallsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScoreProvider>
      <CallsProvider>
        <ProjectRoutes />
      </CallsProvider>
    </ScoreProvider>
  </StrictMode>,
);
