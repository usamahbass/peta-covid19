import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LayerRight, DynamicMarker } from "./views";
import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={[-0.789275, 113.921327]}
      zoom={4.5}
    >
      <TileLayer
        url={"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />

      <DynamicMarker />
      <LayerRight />
    </MapContainer>
  );
};

export default App;
