import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { App } from "./App";
import { ShowPraemien } from "./pages/ShowPraemien";
import { ShowPraemieDetail } from "./pages/ShowPraemieDetail";
import { ShowNetzwerk } from "./pages/ShowNetzwerk";
import { CreateCall } from "./pages/CreateCall";
import { Chat } from "./pages/Chat";
import { ShowProfile } from "./pages/ShowProfile";
import { MapHome } from "./pages/MapHome";



export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout-Route bekommt ein path="/" */}
        <Route path="/" element={<AppLayout />}>
          {/* Startseite als index-Route */}
          <Route index element={<MapHome />} />
          {/* Prämien */}
          <Route path="praemien" element={<ShowPraemien />} />
          <Route path="praemien/:id" element={<ShowPraemieDetail />} />
            {/* Andere Seiten */}
          <Route path="profil" element={<ShowProfile />} />
          <Route path="netzwerk" element={<ShowNetzwerk />} />
          <Route path="aufruf/neu" element={<CreateCall />} />
          <Route path="chat/:id" element={<Chat />} />
          {/* 404 Route */}
          <Route path="*" element={<div style={{ padding: 20, marginTop: 70 }}>404 – Oh Nein! Dieser Link war wohl nicht barrierefei. 😭</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
