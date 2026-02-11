import L from "leaflet";
import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";

// props: waypoints = [[lat,lng], [lat,lng]]
const createRoutingControl = ({ waypoints }) => {
  const instance = L.Routing.control({
    waypoints: waypoints.map((p) => L.latLng(p[0], p[1])),

    /* HIER: Fußverkehr statt Auto */
    router: L.Routing.osrmv1({
      serviceUrl: "https://router.project-osrm.org/route/v1",
      profile: "walking",
    }),

    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    routeWhileDragging: false,

    /* keine LRM-UI */
    show: false,
    collapsible: false,
    showAlternatives: false,

    /* Linien-Styling */
    lineOptions: {
      styles: [
        {
          weight: 5,
          opacity: 0.9,
          color: "#0E3296", 
        },
      ],
    },
  });

  return instance;
};

export const RoutingControl = createControlComponent(createRoutingControl);
