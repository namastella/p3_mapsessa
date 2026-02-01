import "./Map.css"
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";



export function Map () {
    return (
        <MapContainer center={[49.8728, 8.6512]} zoom={17}> {/* center=  per default Darmstadt (in Klammern Koordinaten) zoom ist wie weit reingezoomt ist*/}
            <TileLayer 
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright" >OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}