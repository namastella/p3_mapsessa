import { Outlet } from "react-router-dom";
import { BottomNav } from "./components/BottomNav/BottomNav";
import "./App.css";

export function AppLayout() {
  return (
    <div className="app">
      <main className="screen">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
