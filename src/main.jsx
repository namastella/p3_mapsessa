import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectRoutes } from "./ProjectRoutes";
import "./index.css";
import { ScoreProvider } from "./context/ScoreContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScoreProvider>
      <ProjectRoutes />
    </ScoreProvider>
  </StrictMode>
);

