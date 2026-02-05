import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { Menu } from "./components/Menu/Menu";
import { Score } from "./components/Score/Score";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

export function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();


  return (
    <div className={`app ${theme === "dark" ? "theme-dark" : ""}`}>
        <Score />
        
      <main className="screen">
        <Outlet />
      </main>

      <BottomNav onMenu={() => setMenuOpen(true)} />

      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}

    </div>
  );
}
