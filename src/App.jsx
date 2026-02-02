// import { useState } from 'react'
// import { Map } from './components/Map/Map.jsx'
import { Outlet } from "react-router-dom"

import './App.css'
// import { Menu } from "./components/Menu/Menu.jsx"
import { BottomNav } from './components/BottomNav/BottomNav.jsx'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="app">
        <Outlet />
        <BottomNav />
      </div>


    </>

    
  )
}

export default App
