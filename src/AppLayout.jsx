import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { Menu } from "./components/Menu/Menu";
import "./App.css";

export function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
        
      <main className="screen">
        <Outlet />
      </main>

      <BottomNav onMenu={() => setMenuOpen(true)} />

      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}

    </div>
  );
}
