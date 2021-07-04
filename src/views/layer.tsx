import React from "react";
import { GeoJSON, useMap } from "react-leaflet";
import L, { Layer as LayerOptions } from "leaflet";
import type { GeoJsonType } from "~/models";
import GeoJsonIndo from "~/assets/json/idn_prov.json";

const defaultStyle = {
  weight: 1,
  color: "#fff",
  dashArray: "",
  fillOpacity: 0.9,
  fillColor: "#D83439",
};

const activeStyle = {
  weight: 1,
  color: "#fff",
  dashArray: "",
  fillOpacity: 0.9,
  fillColor: "#67092D",
};

let prevLayerClicked: LayerOptions | any = null;

export const Layer = () => {
  const map = useMap();
  const datas = GeoJsonIndo;

  const handleEachFeature = (feature: GeoJsonType, layer: LayerOptions) => {
    layer.on({
      mouseover: (e) => {
        if (prevLayerClicked !== null) {
          prevLayerClicked.setStyle(defaultStyle);
        }

        const layer = e.target;
        layer.bindTooltip(feature?.properties?.Propinsi).openTooltip();
        layer.setStyle(activeStyle);

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          layer.bringToFront();
        }

        prevLayerClicked = layer;
      },
      click: (e) => {
        const layer = e.target;
        const centroid = layer.getBounds().getCenter();
        map.flyTo(new L.LatLng(centroid.lat, centroid.lng), 10);
      },
    });
  };

  return (
    <GeoJSON
      data={datas}
      onEachFeature={handleEachFeature}
      style={defaultStyle}
    />
  );
};
