import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { App } from "./App";
import { ShowPraemien } from "./pages/ShowPraemien";
import { ShowPraemieDetail } from "./pages/ShowPraemieDetail";
import { ShowNetzwerk } from "./pages/ShowNetzwerk";
import { CreateCall } from "./pages/CreateCall";

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
            {/* Andere Seiten */}
          <Route path="profil" element={<div>Profil</div>} />
          <Route path="netzwerk" element={<ShowNetzwerk />} />
          <Route path="aufruf/neu" element={<CreateCall />} />
          {/* 404 Route */}
          <Route path="*" element={<div style={{ padding: 16 }}>404 – Seite nicht gefunden</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
