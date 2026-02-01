// import { useState } from 'react'
// import { Map } from './components/Map/Map.jsx'
import { Link, NavLink, Outlet } from "react-router"
import './App.css'
// import { Menu } from "./components/Menu/Menu.jsx"
import { BottomNav } from './components/BottomNav/BottomNav.jsx'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hallo mapsessa!</h1>

      <div className="app">
        <Outlet />
        <BottomNav />
      </div>


    </>

    
  )
}

export default App
