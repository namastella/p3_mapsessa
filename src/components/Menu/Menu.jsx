import { Link, NavLink, Outlet } from "react-router"
import "./Menu.css"

export function Menu ({ onClose}) {
    return ( 
        <>
            <div className="overlay" onClick={onClose}>
                <div className="sheet" onClick={(e) => e.stopPropagation()}>
                    <button>Aufruf starten</button>
                    <button>Barriere melden</button>
                </div>
            </div>
        </>
    )
}