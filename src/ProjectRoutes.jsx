import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { App } from "./App";
import { ShowPraemien } from "./pages/ShowPraemien";


export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/praemien" element={<ShowPraemien />} />
          <Route path="/profil" element={<div>Profil</div>} />
          <Route path="/netzwerk" element={<div>Netzwerk</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
