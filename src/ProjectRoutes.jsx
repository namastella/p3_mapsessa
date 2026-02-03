import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { App } from "./App";
import { ShowPraemien } from "./pages/ShowPraemien";
import { ShowPraemieDetail } from "./pages/ShowPraemieDetail";

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout-Route bekommt ein path="/" */}
        <Route path="/" element={<AppLayout />}>
          {/* Startseite als index-Route */}
          <Route index element={<App />} />
          {/* Prämien */}
          <Route path="praemien" element={<ShowPraemien />} />
          <Route path="praemien/:id" element={<ShowPraemieDetail />} />
          <Route path="profil" element={<div>Profil</div>} />
          <Route path="netzwerk" element={<div>Netzwerk</div>} />
          <Route path="*" element={<div style={{ padding: 16 }}>404 – Seite nicht gefunden</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
