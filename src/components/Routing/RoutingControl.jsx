import L from "leaflet";
import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";

// props: waypoints = [[lat,lng], [lat,lng]]
const createRoutingControl = ({ waypoints }) => {
  const instance = L.Routing.control({
    waypoints: waypoints.map((p) => L.latLng(p[0], p[1])),
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    routeWhileDragging: false,

    // ✅ keine LRM-Panel-UI anzeigen
    show: false,
    collapsible: false,
    showAlternatives: false,

    // Optional: line styling (LRM selbst zeichnet Polyline)
    lineOptions: {
      styles: [{ weight: 5, opacity: 0.9 }],
    },
  });

  return instance;
};

export const RoutingControl = createControlComponent(createRoutingControl);
