import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { v4 as uuidv4 } from "uuid";
import { LayerRight, DynamicMarker, Layer, LayerKab } from "./views";
import { AppContext } from "./context";
import { YourLocation } from "./components";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";

const App = () => {
  const { state } = useContext(AppContext);

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={[-0.789275, 113.921327]}
      zoom={4.5}
    >
      {state.basemap === "googlemap" && (
        <TileLayer
          url={"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
      )}
      {state.basemap === "googlesatelite" && (
        <TileLayer
          url={"http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
      )}

      {state.layer.map((el) => {
        if (el === "batas_prov") return <Layer key={uuidv4()} />;
        if (el === "batas_kab") return <LayerKab key={uuidv4()} />;
      })}

      <DynamicMarker />
      <LayerRight />
      <YourLocation />
    </MapContainer>
  );
};

export default App;
